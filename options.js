var numOfCategories = 6;
var subsArray =
  {
    election: "election",
    debate: "debate",
    house: "house",
    supreme: "supreme",
    president: "president",

    sagan: "sagan",
    wormhole: "wormhole",
    blackhole: "blackhole",
    instrument: "instrument",
    tool: "tool",
    researcher: "researcher",
    scientist: "scientist",
    starwars: "starwars",
    startrek: "startrek",

    reporter: "reporter",
    critic: "critic",
    investigation: "investigation",
    dead: "dead",
    witness: "witness",
    allegedly: "allegedly",
    celebrity: "celebrity",

    box: "box",
    strategy: "strategy",
    ceo: "ceo",
    cto: "cto",
    cfo: "cfo",
    startup: "startup",

    internet: "internet",
    twitter: "twitter",
    facebook: "facebook",
    snapchat: "snapchat",
    instagram: "instagram",
    youtube: "youtube",
    blog: "blog",
    website: "website",

    selfdriving: "selfdriving",
    spherical: "spherical",
    horsepower: "horsepower",
    teenager: "teenager"
  };

function save_options () {
  var settings = {};
  Object.keys(subsArray).forEach(function (key) {
    settings[key] = document.getElementById(subsArray[key]).checked;
  })
  chrome.storage.sync.set(settings, function () {
    var status = document.getElementById('status');
    status.textContent = 'Options saved';
    setTimeout(function () {
      status.textContent = '';
    }, 750);
  });
}

function restore_options () {
  var restore = {};
  Object.keys(subsArray).forEach(function (key) {
    restore[key] = true;
  })

  chrome.storage.sync.get(restore, function (items) {
    Object.keys(subsArray).forEach(function (key) {
      document.getElementById(subsArray[key]).checked = items[key];
    })
  });
  save_options();
}

document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);

for (var i = 1; i < numOfCategories + 1; i ++) {
  document.getElementById("header" + i).addEventListener("click", handleDropDown);
  document.getElementById("all" + i).addEventListener("click", toggleCheck);
  document.getElementById("non" + i).addEventListener("click", toggleCheck);
}

function handleDropDown() {
  var num = event.target.id[6];
  document.getElementById("list" + num).classList.toggle("show");
  var button = document.getElementById("button" + num);
  if (button.innerHTML === "+") {
    button.innerHTML = "-";
  } else {
    button.innerHTML = "+";
  }
}

function toggleCheck() {
  var num = event.target.id[3];
  if (event.target.id[0] === "a") {
    var boolean = true;
  } else {
    var boolean = false;
  }

  var list = document.getElementById("list" + num);
  for (var i = 1; i < list.children.length; i++) {
    var checkbox = list.children[i].firstChild.firstChild;
    checkbox.checked = boolean;
  }
}

var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
var timestamp = (new Date(Date.now())).toLocaleDateString("en-Us", options);
var dateArray = timestamp.split(",");
document.getElementById("date").innerHTML = dateArray.slice(0, 2).join(" ") + ", " + dateArray[2];
