function walk(root) {
  var walker = document.createTreeWalker (
    root,
    NodeFilter.SHOW_TEXT,
    null,
    false
  ),
  node;

  while (node = walker.nextNode()) {
    handleText(node);
  };
};

function handleText(text) {
  text.nodeValue = replaceText(text.nodeValue);
};

function replaceText(phrase) {

  //Other
  if (prefs["selfdriving"]) {
    phrase = phrase.replace(/\bself(\s|\-)driving\b/g, "uncontrollably$1swerving");
    phrase = phrase.replace(/\bSelf(\s|\-)(D|d)riving\b/g, "Uncontrollably$1Swerving");
  }
  if (prefs["spherical"]) {
    phrase = phrase.replace(/\bglobal\b/g, "spherical");
    phrase = phrase.replace(/\bGlobal\b/g, "Spherical");
  }
  if (prefs["horsepower"]) {
    phrase = phrase.replace(/\bhorsepower\b/g, "engine-ponies");
    phrase = phrase.replace(/\bHorsepower\b/g, "Engine-Ponies");
  }
  if (prefs["teenager"]) {
    phrase = phrase.replace(/\bteen(age)?(d)? (G|g)irl('s|s(?:')?)?\b/g, "ungrateful female offspring");
    phrase = phrase.replace(/\bTeen(age)?(d)? (G|g)irl('s|s(?:')?)?\b/g, "Ungrateful female offspring");
    phrase = phrase.replace(/\bteen(age)?(d)? (B|b)oy('s|s(?:')?)?\b/g, "ungrateful male offspring");
    phrase = phrase.replace(/\bTeen(age)?(d)? (B|B)oy('s|s(?:')?)?\b/g, "Ungrateful male offspring");
    phrase = phrase.replace(/\bteen(age)?(r)?('s|s(?:')?)?\b/g, "ungrateful offspring");
    phrase = phrase.replace(/\bTeen(age)?(r)?('s|s(?:')?)?\b/g, "Ungrateful offspring");
  }

  //Science
  if (prefs["sagan"]) {
    phrase = phrase.replace(/\bbillions and billions\b/g, "a Sagan");
    phrase = phrase.replace(/\bBillions and billions\b/g, "A Sagan");
  }
  if (prefs["wormhole"]) {
    phrase = phrase.replace(/\bwormhole('s|s(?:')?)?\b/g, "stargate$1");
    phrase = phrase.replace(/\bWormhole('s|s(?:')?)?\b/g, "Stargate$1");
  }
  if (prefs["blackhole"]) {
    phrase = phrase.replace(/\bblackhole\b/g, "terrifying abyss");
    phrase = phrase.replace(/\bBlackhole\b/g, "Terrifying Abyss");
    phrase = phrase.replace(/\bblackholes\b/g, "terrifying abysses");
    phrase = phrase.replace(/\bBlackholes\b/g, "Terrifying Abysses");
  }
  if (prefs["starwars"]) {
    phrase = phrase.replace(/\bStar Wars\b/g, "George Lucas' Space Opera");
  }
  if (prefs["startrek"]) {
    phrase = phrase.replace(/\bStar Trek\b/g, "Gene Roddenberry's Space Opera");
  }
  if (prefs["instrument"]) {
    phrase = phrase.replace(/\binstrument('s|s(?:')?)?\b/g, "thingamajig$1");
    phrase = phrase.replace(/\bInstrument('s|s(?:')?)?\b/g, "Thingamajig$1");
  }
  if (prefs["tool"]) {
    phrase = phrase.replace(/\btool('s|s(?:')?)?\b/g, "doohickey$1");
    phrase = phrase.replace(/\bTool('s|s(?:')?)?\b/g, "Doohickey$1");
  }
  if (prefs["researcher"]) {
    phrase = phrase.replace(/\bresearcher('s|s(?:')?)?\b/g, "Wikipedia editor$1");
    phrase = phrase.replace(/\bResearcher('s|s(?:')?)?\b/g, "Wikipedia Editor$1");
  }
  if (prefs["scientist"]) {
    phrase = phrase.replace(/\bscientist(s)?('|'s)?\b/g, "smarty pants$2");
    phrase = phrase.replace(/\bScientist(s)?('|'s)?\b/g, "Smarty Pants$2");
  }

  //Politics
  if (prefs["election"]) {
    phrase = phrase.replace(/\belection('s|s(?:')?)?\b/g, "mud throwing contest$1");
    phrase = phrase.replace(/\bElection('s|s(?:')?)?\b/g, "Mud Throwing Contest$1");
    phrase = phrase.replace(/\bcandidate('s|s(?:')?)?\b/g, "mud throwing contender$1");
    phrase = phrase.replace(/\bCandidate('s|s(?:')?)?\b/g, "Mud Throwing Contender$1");
  }
  if (prefs["debate"]) {
    phrase = phrase.replace(/\b(D|d)ebate('s|s(?:')?)?\b/g, "$1ance-off$2");
  }
  if (prefs["house"]) {
    phrase = phrase.replace(/\b(S|s)enate('s)?\b/g, "Department of Squabbling Children$2");
    phrase = phrase.replace(/\b(the )?(C|c)ongress\b/g, "the Department of Squabbling Children");
    phrase = phrase.replace(/\bSenator('s)?\b/g, "Squabbling Child$1");
    phrase = phrase.replace(/\bCongress(wo)?man('s)?\b/g, "Squabbling Child$2");
    phrase = phrase.replace(/\bSenators('s)?\b/g, "Squabbling Children$1");
    phrase = phrase.replace(/\bCongress(wo)?men('s)?\b/g, "Squabbling Children$2");
  }
  if (prefs["supreme"]) {
    phrase = phrase.replace(/\bSupreme Court Justice('s|s(?:')?)?\b/g, "Awesomest Court Gavel Holder$1");
    phrase = phrase.replace(/\bSupreme Court Judge('s|s(?:')?)?\b/g, "Awesomest Court Gavel Holder$1");
    phrase = phrase.replace(/\bSupreme Court\b/g, "Awesomest Court");
    phrase = phrase.replace(/\b(T|t)he President('s)?\b/g, "The Chosen One$2");
  }

  //Business
  if (prefs["box"]) {
    phrase = phrase.replace(/\bI (T|t)hink (O|o)utside the (B|b)ox\b/g, "I am unrealistically unique");
    phrase = phrase.replace(/\bthink outside the box\b/g, "be unrealistically unique");
    phrase = phrase.replace(/\bthinking outside the box\b/g, "being unrealistically unique");
    phrase = phrase.replace(/\bthinks outside the box\b/g, "is unrealistically unique");
    phrase = phrase.replace(/\bthought outside the box\b/g, "was unrealistically unique");
    phrase = phrase.replace(/\bThink (O|o)utside the (B|b)ox\b/g, "Be unrealistically unique");
    phrase = phrase.replace(/\bThinking (O|o)utside the (B|b)ox\b/g, "Being unrealistically unique");
    phrase = phrase.replace(/\bThinks (O|o)utside the (B|b)ox\b/g, "Is unrealistically unique");
    phrase = phrase.replace(/\bThought (O|o)utside the (B|b)ox\b/g, "Was unrealistically unique");
  }
  if (prefs["strategy"]) {
    phrase = phrase.replace(/\bstrategy\b/g, "top secret plan");
    phrase = phrase.replace(/\bStrategy\b/g, "Top secret plan");
    phrase = phrase.replace(/\bstrategies\b/g, "top secret plans");
    phrase = phrase.replace(/\bStrategies\b/g, "Top secret plans");
  }
  if (prefs["ceo"]) {
    phrase = phrase.replace(/\bCEO\b/g, "Big Cheese");
  }
  if (prefs["cto"]) {
    phrase = phrase.replace(/\bCTO\b/g, "Chief Wizard");
  }
  if (prefs["cfo"]) {
    phrase = phrase.replace(/\bCFO\b/g, "Chief Swindler");
  }
  if (prefs["startup"]) {
    phrase = phrase.replace(/\bstart(\s|\-)?up(\sbusiness)?(\scompany)?('s|')?\b/g, "baby business$4");
    phrase = phrase.replace(/\bStart(\s|\-)?up(\s(B|b)usiness)?(\s(C|c)ompany)?('s|')?\b/g, "Baby Business$4");
    phrase = phrase.replace(/\bstart(\s|\-)?up(s)?(\sbusinesses)?(\scompanies)?('s|')?\b/g, "baby businesses$5");
    phrase = phrase.replace(/\bStart(\s|\-)?up(s)?(\s(B|b)usinesses)?(\s(C|c)ompanies)?('s|')?\b/g, "Baby Businesses$5");
  }

  //Journalism
  if (prefs["critic"]) {
    phrase = phrase.replace(/\bcritic\b/g, "mean person");
    phrase = phrase.replace(/\bCritic\b/g, "Mean person");
    phrase = phrase.replace(/\bcritics\b/g, "mean people");
    phrase = phrase.replace(/\bCritics\b/g, "Mean people");
  }
  if (prefs["investigation"]) {
    phrase = phrase.replace(/\binvestigate\b/g, "call the Spanish Inquisition");
    phrase = phrase.replace(/\bInvestigate\b/g, "Call the Spanish Inquisition");
    phrase = phrase.replace(/\b(I|i)nvestigation('s|s(?:')?)?\b/g, "Spanish Inquisition$2");
  }
  if (prefs["dead"]) {
    phrase = phrase.replace(/\b(I|i)s (D|d)ead\b/g, "$1s pining for the fjords");
    phrase = phrase.replace(/\b(I|i)s (D|d)eceased\b/g, "$1s pining for the fjords");
  }
  if (prefs["reporter"]) {
    phrase = phrase.replace(/\bmedia('s|s(?:')?)?\b/g, "gossipmongers$1");
    phrase = phrase.replace(/\bMedia('s|s(?:')?)?\b/g, "Gossipmongers$1");
    phrase = phrase.replace(/\breporter('s|s(?:')?)?\b/g, "gossipmonger$1");
    phrase = phrase.replace(/\bReporter('s|s(?:')?)?\b/g, "Gossipmonger$1");
  }
  if (prefs["witness"]) {
    phrase = phrase.replace(/\b(eye)?witnesses\b/g, "people who saw stuff");
    phrase = phrase.replace(/\b(Eye)?(W|w)itnesses\b/g, "People who saw stuff");
    phrase = phrase.replace(/\b(eye)?witness\b/g, "person who saw stuff");
    phrase = phrase.replace(/\b(Eye)?(W|w)itness\b/g, "Person who saw stuff");
  }
  if (prefs["allegedly"]) {
    phrase = phrase.replace(/\ballegedly\b/g, "kinda probably");
    phrase = phrase.replace(/\bAllegedly\b/g, "Kinda probably");
  }
  if (prefs["celebrity"]) {
    phrase = phrase.replace(/\bceleb(rity)?\b/g, "glory hound");
    phrase = phrase.replace(/\bCeleb(rity)?\b/g, "Glory Hound");
    phrase = phrase.replace(/\bceleb(ritie)?s\b/g, "glory hounds");
    phrase = phrase.replace(/\bCeleb(ritie)?s\b/g, "Glory Hounds");
  }

  //Internet
  if (prefs["teenager"]) {
    phrase = phrase.replace(/\b(I|i)nternet('s)?\b/g, "$1ntertubes$2");
  }
  if (prefs["twitter"]) {
    phrase = phrase.replace(/\btweet('s|s(?:')?)?\b/g, "chirp$1");
    phrase = phrase.replace(/\bTweet('s|s(?:')?)?\b/g, "Chirp$1");
    phrase = phrase.replace(/\b(T|t)witter('s)?\b/g, "Chirper$2");
  }
  if (prefs["facebook"]) {
    phrase = phrase.replace(/\bfacebook('s)?\b/g, "The Facebook$1");
    phrase = phrase.replace(/\bFacebook('s)?\b/g, "The Facebook$1");
  }
  if (prefs["snapchat"]) {
    phrase = phrase.replace(/\b(S|s)napchat('s|s(?:')?)?\b/g, "DirtyPicture$2");
  }
  if (prefs["instagram"]) {
    phrase = phrase.replace(/\b(I|i)nstagram('s|s(?:')?)?\b/g, "HipsterFilter$2");
  }
  if (prefs["youtube"]) {
    phrase = phrase.replace(/\b(Y|y)ou(T|t)ube('s)?\b/g, "CatVideos$3");
  }
  if (prefs["blog"]) {
    phrase = phrase.replace(/\b(B|b)log('s|s(?:')?)?\b/g, "$1lag$2");
    phrase = phrase.replace(/\b(B|b)logger('s|s(?:')?)?\b/g, "$1lagger$2");
  }
  if (prefs["website"]) {
    phrase = phrase.replace(/\b(W|w)ebsite('s|s(?:')?)?\b/g, "$1obsite$2");
  }

  return phrase;
};

function observerCallback(mutations) {
  var i;
  mutations.forEach(function(mutation) {
    for (i = 0; i < mutation.addedNodes.length; i++) {
      if (mutation.addedNodes[i].nodeType === 3) {
        handleText(mutation.addedNodes[i]);
      } else {
        walk(mutation.addedNodes[i]);
      }
    }
  });
};

function handlePrefs(data) {
  prefs = data;
  walkAndObserve(document);
};

function getPrefs(callback) {
  chrome.storage.sync.get(null, function(all) {
    callback(all);
  });
};

function walkAndObserve(doc) {
  var title = doc.getElementsByTagName('title')[0],
  observerConfig = {
    characterData: true,
    childList: true,
    subtree: true,
  },
  bodyObserver, titleObserver;

  walk(doc.body);
  doc.title = replaceText(doc.title);

  bodyObserver = new MutationObserver(observerCallback);
  bodyObserver.observe(doc.body, observerConfig);

  if (title) {
    titleObserver = new MutationObserver(observerCallback);
    titleObserver.observe(title, observerConfig);
  }
};

getPrefs(handlePrefs);
