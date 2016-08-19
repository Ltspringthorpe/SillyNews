function save_options () {

  var election = document.getElementById('election').checked,
      debate = document.getElementById('debate').checked,
      house = document.getElementById('house').checked,
      supreme = document.getElementById('supreme').checked,
      president = document.getElementById('president').checked;

  var sagan = document.getElementById('sagan').checked,
      wormhole = document.getElementById('wormhole').checked,
      blackhole = document.getElementById('blackhole').checked,
      instrument = document.getElementById('instrument').checked,
      tool = document.getElementById('tool').checked,
      researcher = document.getElementById('researcher').checked,
      scientist = document.getElementById('scientist').checked,
      starwars = document.getElementById('starwars').checked,
      startrek = document.getElementById('startrek').checked;

  var reporter = document.getElementById('reporter').checked,
      critic = document.getElementById('critic').checked,
      investigation = document.getElementById('investigation').checked,
      dead = document.getElementById('dead').checked,
      witness = document.getElementById('witness').checked,
      allegedly = document.getElementById('allegedly').checked,
      celebrity = document.getElementById('celebrity').checked;

  var box = document.getElementById('box').checked,
      strategy = document.getElementById('strategy').checked,
      ceo = document.getElementById('ceo').checked,
      cto = document.getElementById('cto').checked,
      cfo = document.getElementById('cfo').checked,
      startup = document.getElementById('startup').checked;

  var internet = document.getElementById('internet').checked,
      twitter = document.getElementById('twitter').checked,
      facebook = document.getElementById('facebook').checked,
      snapchat = document.getElementById('snapchat').checked,
      instagram = document.getElementById('instagram').checked,
      youtube = document.getElementById('youtube').checked,
      blog = document.getElementById('blog').checked,
      website = document.getElementById('website').checked;

  var selfdriving = document.getElementById('selfdriving').checked,
      spherical = document.getElementById('spherical').checked,
      horsepower = document.getElementById('horsepower').checked,
      teenager = document.getElementById('teenager').checked;

  chrome.storage.sync.set (
    {
      election: election,
      debate: debate,
      house: house,
      supreme: supreme,
      president: president,

      sagan: sagan,
      wormhole: wormhole,
      blackhole: blackhole,
      instrument: instrument,
      tool: tool,
      researcher: researcher,
      scientist: scientist,
      starwars: starwars,
      startrek: startrek,

      reporter: reporter,
      critic: critic,
      investigation: investigation,
      dead: dead,
      witness: witness,
      allegedly: allegedly,
      celebrity: celebrity,

      box: box,
      strategy: strategy,
      ceo: ceo,
      cto: cto,
      cfo: cfo,
      startup: startup,

      internet: internet,
      twitter: twitter,
      facebook: facebook,
      snapchat: snapchat,
      instagram: instagram,
      youtube: youtube,
      blog: blog,
      website: website,

      selfdriving: selfdriving,
      spherical: spherical,
      horsepower: horsepower,
      teenager: teenager
    },

    function () {
      var status = document.getElementById('status');
      status.textContent = 'Options saved';
      setTimeout(function () {
        status.textContent = '';
      }, 750);
    }
  );
}

function restore_options () {
  chrome.storage.sync.get (
    {
      election: true,
      debate: true,
      house: true,
      supreme: true,
      president: true,

      sagan: true,
      wormhole: true,
      blackhole: true,
      instrument: true,
      tool: true,
      researcher: true,
      scientist: true,
      starwars: true,
      startrek: true,

      reporter: true,
      critic: true,
      investigation: true,
      dead: true,
      witness: true,
      allegedly: true,
      celebrity: true,

      box: true,
      strategy: true,
      ceo: true,
      cto: true,
      cfo: true,
      startup: true,

      internet: true,
      twitter: true,
      facebook: true,
      snapchat: true,
      instagram: true,
      youtube: true,
      blog: true,
      website: true,

      selfdriving: true,
      spherical: true,
      horsepower: true,
      teenager: true
    },

    function (items) {
      document.getElementById('election').checked = items.election;
      document.getElementById('debate').checked = items.debate;
      document.getElementById('house').checked = items.house;
      document.getElementById('supreme').checked = items.supreme;
      document.getElementById('president').checked = items.president;

      document.getElementById('sagan').checked = items.sagan;
      document.getElementById('wormhole').checked = items.wormhole;
      document.getElementById('blackhole').checked = items.blackhole;
      document.getElementById('instrument').checked = items.instrument;
      document.getElementById('tool').checked = items.tool;
      document.getElementById('researcher').checked = items.researcher;
      document.getElementById('scientist').checked = items.scientist;
      document.getElementById('starwars').checked = items.starwars;
      document.getElementById('startrek').checked = items.startrek;

      document.getElementById('reporter').checked = items.reporter;
      document.getElementById('critic').checked = items.critic;
      document.getElementById('investigation').checked = items.investigation;
      document.getElementById('dead').checked = items.dead;
      document.getElementById('witness').checked = items.witness;
      document.getElementById('allegedly').checked = items.allegedly;
      document.getElementById('celebrity').checked = items.celebrity;

      document.getElementById('box').checked = items.box;
      document.getElementById('strategy').checked = items.strategy;
      document.getElementById('ceo').checked = items.ceo;
      document.getElementById('cto').checked = items.cto;
      document.getElementById('cfo').checked = items.cfo;
      document.getElementById('startup').checked = items.startup;

      document.getElementById('internet').checked = items.internet;
      document.getElementById('twitter').checked = items.twitter;
      document.getElementById('facebook').checked = items.facebook;
      document.getElementById('snapchat').checked = items.snapchat;
      document.getElementById('instagram').checked = items.instagram;
      document.getElementById('youtube').checked = items.youtube;
      document.getElementById('blog').checked = items.blog;
      document.getElementById('website').checked = items.website;

      document.getElementById('selfdriving').checked = items.selfdriving;
      document.getElementById('spherical').checked = items.spherical;
      document.getElementById('horsepower').checked = items.horsepower;
      document.getElementById('teenager').checked = items.teenager;
    }
  );
}

document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);

document.getElementById("header1").addEventListener("click", handleDropDown);
document.getElementById("header2").addEventListener("click", handleDropDown);
document.getElementById("header3").addEventListener("click", handleDropDown);
document.getElementById("header4").addEventListener("click", handleDropDown);
document.getElementById("header5").addEventListener("click", handleDropDown);
document.getElementById("header6").addEventListener("click", handleDropDown);

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

document.getElementById("all1").addEventListener("click", checkAll);
document.getElementById("all2").addEventListener("click", checkAll);
document.getElementById("all3").addEventListener("click", checkAll);
document.getElementById("all4").addEventListener("click", checkAll);
document.getElementById("all5").addEventListener("click", checkAll);
document.getElementById("all6").addEventListener("click", checkAll);
document.getElementById("none1").addEventListener("click", checkNone);
document.getElementById("none2").addEventListener("click", checkNone);
document.getElementById("none3").addEventListener("click", checkNone);
document.getElementById("none4").addEventListener("click", checkNone);
document.getElementById("none5").addEventListener("click", checkNone);
document.getElementById("none6").addEventListener("click", checkNone);

function checkAll() {
  var num = event.target.id[3];
  var list = document.getElementById("list" + num)
  for (var i = 1; i < list.children.length; i++) {
    var checkbox = list.children[i].firstChild.firstChild;
    console.log(checkbox);
    checkbox.checked = true;
  }
}

function checkNone() {
  var num = event.target.id[4];
  var list = document.getElementById("list" + num)
  for (var i = 1; i < list.children.length; i++) {
    var checkbox = list.children[i].firstChild.firstChild;
    checkbox.checked = false;
  }
}
