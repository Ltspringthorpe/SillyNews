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

  //xkcd inspired
  phrase = phrase.replace(/\b(eye)?witnesses\b/g, "people who saw stuff");
  phrase = phrase.replace(/\b(Eye)?(W|w)itnesses\b/g, "People who saw stuff");
  phrase = phrase.replace(/\b(eye)?witness\b/g, "person who saw stuff");
  phrase = phrase.replace(/\b(Eye)?(W|w)itness\b/g, "Person who saw stuff");
  phrase = phrase.replace(/\ballegedly\b/g, "kinda probably");
  phrase = phrase.replace(/\bAllegedly\b/g, "Kinda probably");
  phrase = phrase.replace(/\b(D|d)ebate('s|s(?:')?)?\b/g, "$1ance-off$2");
  phrase = phrase.replace(/\bself(\s|\-)driving\b/g, "uncontrollably$1swerving");
  phrase = phrase.replace(/\bSelf(\s|\-)(D|d)riving\b/g, "Uncontrollably$1Swerving");
  phrase = phrase.replace(/\bglobal\b/g, "spherical");
  phrase = phrase.replace(/\bGlobal\b/g, "Spherical");
  phrase = phrase.replace(/\bhorsepower\b/g, "engine-ponies");
  phrase = phrase.replace(/\bHorsepower\b/g, "Engine-Ponies");
  phrase = phrase.replace(/\b(B|b)log('s|s(?:')?)?\b/g, "$1lag$2");
  phrase = phrase.replace(/\b(B|b)logger('s|s(?:')?)?\b/g, "$1lagger$2");
  phrase = phrase.replace(/\b(W|w)ebsite('s|s(?:')?)?\b/g, "$1obsite$2");

  //Random
  phrase = phrase.replace(/\bresearcher('s|s(?:')?)?\b/g, "YouTube commenter$1");
  phrase = phrase.replace(/\bResearcher('s|s(?:')?)?\b/g, "YouTube Commenter$1");
  phrase = phrase.replace(/\bscientist(s)?('|'s)?\b/g, "smarty pants$2");
  phrase = phrase.replace(/\bScientist(s)?('|'s)?\b/g, "Smarty Pants$2");
  phrase = phrase.replace(/\b(I|i)nternet('s)?\b/g, "$1ntertubes$2");
  phrase = phrase.replace(/\bceleb(rity)?\b/g, "glory hound");
  phrase = phrase.replace(/\bCeleb(rity)?\b/g, "Glory Hound");
  phrase = phrase.replace(/\bceleb(ritie)?s\b/g, "glory hounds");
  phrase = phrase.replace(/\bCeleb(ritie)?s\b/g, "Glory Hounds");
  phrase = phrase.replace(/\bteen(age)?(d)? (G|g)irl('s|s(?:')?)?\b/g, "ungrateful female offspring");
  phrase = phrase.replace(/\bTeen(age)?(d)? (G|g)irl('s|s(?:')?)?\b/g, "Ungrateful female offspring");
  phrase = phrase.replace(/\bteen(age)?(d)? (B|b)oy('s|s(?:')?)?\b/g, "ungrateful male offspring");
  phrase = phrase.replace(/\bTeen(age)?(d)? (B|B)oy('s|s(?:')?)?\b/g, "Ungrateful male offspring");
  phrase = phrase.replace(/\bteen(age)?(r)?('s|s(?:')?)?\b/g, "ungrateful offspring");
  phrase = phrase.replace(/\bTeen(age)?(r)?('s|s(?:')?)?\b/g, "Ungrateful offspring");

  //Science
  phrase = phrase.replace(/\bbillions and billions\b/g, "a Sagan");
  phrase = phrase.replace(/\bBillions and billions\b/g, "A Sagan");
  phrase = phrase.replace(/\bwormhole('s|s(?:')?)?\b/g, "stargate$1");
  phrase = phrase.replace(/\bWormhole('s|s(?:')?)?\b/g, "Stargate$1");
  phrase = phrase.replace(/\bblackhole\b/g, "terrifying abyss");
  phrase = phrase.replace(/\bBlackhole\b/g, "Terrifying Abyss");
  phrase = phrase.replace(/\bblackholes\b/g, "terrifying abysses");
  phrase = phrase.replace(/\bBlackholes\b/g, "Terrifying Abysses");
  phrase = phrase.replace(/\bStar Wars\b/g, "George Lucas' Space Opera");
  phrase = phrase.replace(/\bStar Trek\b/g, "Gene Roddenberry's Space Opera");
  phrase = phrase.replace(/\binstrument('s|s(?:')?)?\b/g, "thingamajig$1");
  phrase = phrase.replace(/\bInstrument('s|s(?:')?)?\b/g, "Thingamajig$1");
  phrase = phrase.replace(/\btool('s|s(?:')?)?\b/g, "doohickey$1");
  phrase = phrase.replace(/\bTool('s|s(?:')?)?\b/g, "Doohickey$1");

  //Politics
  phrase = phrase.replace(/\belection('s|s(?:')?)?\b/g, "mud throwing contest$1");
  phrase = phrase.replace(/\bElection('s|s(?:')?)?\b/g, "Mud Throwing Contest$1");
  phrase = phrase.replace(/\bcandidate('s|s(?:')?)?\b/g, "mud throwing contender$1");
  phrase = phrase.replace(/\bCandidate('s|s(?:')?)?\b/g, "Mud Throwing Contender$1");
  phrase = phrase.replace(/\b(S|s)enate('s)?\b/g, "Department of Squabbling Children$2");
  phrase = phrase.replace(/\b(the )?(C|c)ongress\b/g, "the Department of Squabbling Children");
  phrase = phrase.replace(/\bSenator('s)?\b/g, "Squabbling Child$1");
  phrase = phrase.replace(/\bCongress(wo)?man('s)?\b/g, "Squabbling Child$2");
  phrase = phrase.replace(/\bSenators('s)?\b/g, "Squabbling Children$1");
  phrase = phrase.replace(/\bCongress(wo)?men('s)?\b/g, "Squabbling Children$2");
  phrase = phrase.replace(/\bSupreme Court Justice('s|s(?:')?)?\b/g, "Awesomest Court Gavel Holder$1");
  phrase = phrase.replace(/\bSupreme Court Judge('s|s(?:')?)?\b/g, "Awesomest Court Gavel Holder$1");
  phrase = phrase.replace(/\bSupreme Court\b/g, "Awesomest Court");
  phrase = phrase.replace(/\b(T|t)he President('s)?\b/g, "The Chosen One$2");

  //Business
  phrase = phrase.replace(/\bI (T|t)hink (O|o)utside the (B|b)ox\b/g, "I am unrealistically unique");
  phrase = phrase.replace(/\bthink outside the box\b/g, "be unrealistically unique");
  phrase = phrase.replace(/\bthinking outside the box\b/g, "being unrealistically unique");
  phrase = phrase.replace(/\bthinks outside the box\b/g, "is unrealistically unique");
  phrase = phrase.replace(/\bthought outside the box\b/g, "was unrealistically unique");
  phrase = phrase.replace(/\bThink (O|o)utside the (B|b)ox\b/g, "Be unrealistically unique");
  phrase = phrase.replace(/\bThinking (O|o)utside the (B|b)ox\b/g, "Being unrealistically unique");
  phrase = phrase.replace(/\bThinks (O|o)utside the (B|b)ox\b/g, "Is unrealistically unique");
  phrase = phrase.replace(/\bThought (O|o)utside the (B|b)ox\b/g, "Was unrealistically unique");
  phrase = phrase.replace(/\bstrategy\b/g, "top secret plan");
  phrase = phrase.replace(/\bStrategy\b/g, "Top secret plan");
  phrase = phrase.replace(/\bstrategies\b/g, "top secret plans");
  phrase = phrase.replace(/\bStrategies\b/g, "Top secret plans");
  phrase = phrase.replace(/\bCEO\b/g, "Big Cheese");
  phrase = phrase.replace(/\bCTO\b/g, "Chief Wizard");
  phrase = phrase.replace(/\bCFO\b/g, "Chief Swindler");
  phrase = phrase.replace(/\bstart(\s|\-)?up(\sbusiness)?(\scompany)?('s|')?\b/g, "baby business$4");
  phrase = phrase.replace(/\bStart(\s|\-)?up(\s(B|b)usiness)?(\s(C|c)ompany)?('s|')?\b/g, "Baby Business$4");
  phrase = phrase.replace(/\bstart(\s|\-)?up(s)?(\sbusinesses)?(\scompanies)?('s|')?\b/g, "baby businesses$5");
  phrase = phrase.replace(/\bStart(\s|\-)?up(s)?(\s(B|b)usinesses)?(\s(C|c)ompanies)?('s|')?\b/g, "Baby Businesses$5");

  //Journalism
  phrase = phrase.replace(/\bcritics contend\b/g, "mean people say");
  phrase = phrase.replace(/\bCritics (C|c)ontend\b/g, "Mean people say");
  phrase = phrase.replace(/\binvestigate\b/g, "call the Spanish Inquisition");
  phrase = phrase.replace(/\bInvestigate\b/g, "Call the Spanish Inquisition");
  phrase = phrase.replace(/\b(I|i)nvestigation('s|s(?:')?)?\b/g, "Spanish Inquisition$2");
  phrase = phrase.replace(/\bis dead\b/g, "is pining for the fjords");
  phrase = phrase.replace(/\bis deceased\b/g, "is pining for the fjords");
  phrase = phrase.replace(/\bmedia('s|s(?:')?)?\b/g, "gossipmongers$1");
  phrase = phrase.replace(/\bMedia('s|s(?:')?)?\b/g, "Gossipmongers$1");
  phrase = phrase.replace(/\breporter('s|s(?:')?)?\b/g, "gossipmonger$1");
  phrase = phrase.replace(/\bReporter('s|s(?:')?)?\b/g, "Gossipmonger$1");

  //Social Media
  phrase = phrase.replace(/\btweet('s|s(?:')?)?\b/g, "chirp$1");
  phrase = phrase.replace(/\bTweet('s|s(?:')?)?\b/g, "Chirp$1");
  phrase = phrase.replace(/\b(T|t)witter('s)?\b/g, "Chirper$2");
  phrase = phrase.replace(/\bfacebook('s)?\b/g, "The Facebook$1");
  phrase = phrase.replace(/\bFacebook('s)?\b/g, "The Facebook$1");
  phrase = phrase.replace(/\b(S|s)napchat('s|s(?:')?)?\b/g, "DirtyPicture$2");
  phrase = phrase.replace(/\b(I|i)nstagram('s|s(?:')?)?\b/g, "HipsterFilter$2");
  phrase = phrase.replace(/\bPok(é|e)mon(\s|\-)(G|g)(O|o)\b/g, "");
  phrase = phrase.replace(/\b(Y|y)ou(T|t)ube('s)?\b/g, "CatVideos$3");

  //Unnecessary Qualifiers
  phrase = phrase.replace(/\bgay marriage('s|s(?:')?)?\b/g, "marriage$1");
  phrase = phrase.replace(/\bGay (M|m)arriage('s|s(?:')?)?\b/g, "Marriage$2");
  phrase = phrase.replace(/\bsame(\s|\-)sex marriage('s|s(?:')?)?\b/g, "marriage$2");
  phrase = phrase.replace(/\bSame(\s|\-)(S|s)ex (M|m)arriage('s|s(?:')?)?\b/g, "Marriage$4");
  phrase = phrase.replace(/\bgay wedding('s|s(?:')?)?\b/g, "wedding$1");
  phrase = phrase.replace(/\bGay (W|w)edding('s|s(?:')?)?\b/g, "Wedding$2");
  phrase = phrase.replace(/\bsame(\s|\-)sex wedding('s|s(?:')?)?\b/g, "wedding$2");
  phrase = phrase.replace(/\bSame(\s|\-)(S|s)ex (W|w)edding('s|s(?:')?)?\b/g, "Wedding$4");
  phrase = phrase.replace(/\blesbian marriage('s|s(?:')?)?\b/g, "marriage$1");
  phrase = phrase.replace(/\bLesbian (M|m)arriage('s|s(?:')?)?\b/g, "Marriage$2");
  phrase = phrase.replace(/\blesbian wedding('s|s(?:')?)?\b/g, "wedding$1");
  phrase = phrase.replace(/\bLesbian (W|w)edding('s|s(?:')?)?\b/g, "Wedding$2");
  phrase = phrase.replace(/\blesbian wom(a|e)n('s)?\b/g, "wom$1n$2");
  phrase = phrase.replace(/\bLesbian (W|w)om(a|e)n('s)?\b/g, "Wom$2n$3");
  phrase = phrase.replace(/\blesbian('s)?\b/g, "woman$1");
  phrase = phrase.replace(/\bLesbian('s)?\b/g, "Woman$1");
  phrase = phrase.replace(/\blesbians\b/g, "women");
  phrase = phrase.replace(/\bLesbians\b/g, "Women");
  phrase = phrase.replace(/\bgay m(a|e)n\b/g, "m$1n");
  phrase = phrase.replace(/\bgay male('s|s(?:')?)?\b/g, "male$1");
  phrase = phrase.replace(/\bGay (M|m)(a|e)n\b/g, "M$2n");
  phrase = phrase.replace(/\bGay (M|m)ale('s|s(?:')?)?\b/g, "$1ale$2");
  phrase = phrase.replace(/\btrans(gender)?(ed)? (wo)?m(a|e)n('s)?\b/g, "$3m$4n$5");
  phrase = phrase.replace(/\bTrans(gender)?(ed)? (M|m)(a|e)n('s)?\b/g, "M$4n$5");
  phrase = phrase.replace(/\bTrans(gender)?(ed)? (W|w)om(a|e)n('s)?\b/g, "Wom$4n$5");

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

function walkAndObserve(doc) {
  var title = doc.getElementsByTagName('title')[0],
  observerConfig = {
    characterData: true,
    childList: true,
    subtree: true
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

walkAndObserve(document);
