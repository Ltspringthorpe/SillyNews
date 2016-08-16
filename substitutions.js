function walk(rootNode) {
  var walker = document.createTreeWalker (
    rootNode,
    NodeFilter.SHOW_TEXT,
    null,
    false
  ),
  node;

  while (node = walker.nextNode()) {
    handleText(node);
  };
};

function handleText(textNode) {
  textNode.nodeValue = replaceText(textNode.nodeValue);
};

function replaceText(v) {

  //Random
  v = v.replace(/\b(eye)?witnesses\b/g, "people who saw stuff");
  v = v.replace(/\b(Eye)?(W|w)itnesses\b/g, "People who saw stuff");
  v = v.replace(/\b(eye)?witness\b/g, "person who saw stuff");
  v = v.replace(/\b(Eye)?(W|w)itness\b/g, "Person who saw stuff");
  v = v.replace(/\ballegedly\b/g, "kinda probably");
  v = v.replace(/\bAllegedly\b/g, "Kinda probably");
  v = v.replace(/\bresearcher('s|s(?:')?)?\b/g, "YouTube commenter$1");
  v = v.replace(/\bResearcher('s|s(?:')?)?\b/g, "YouTube Commenter$1");
  v = v.replace(/\bscientist('s|s(?:')?)?\b/g, "smarty pants");
  v = v.replace(/\bScientist('s|s(?:')?)?\b/g, "Smarty Pants");
  v = v.replace(/\bthe internet\b/g, "the tubes");
  v = v.replace(/\bThe internet\b/g, "The tubes");
  v = v.replace(/\b(T|t)he Internet\b/g, "The Tubes");
  v = v.replace(/\bceleb(rity)?\b/g, "glory hound");
  v = v.replace(/\bCeleb(rity)?\b/g, "Glory Hound");
  v = v.replace(/\bceleb(ritie)?s\b/g, "glory hounds");
  v = v.replace(/\bCeleb(ritie)?s\b/g, "Glory Hounds");
  v = v.replace(/\bteen(age)?(d)? (G|g)irl('s|s(?:')?)?\b/g, "ungrateful female offspring");
  v = v.replace(/\bTeen(age)?(d)? (G|g)irl('s|s(?:')?)?\b/g, "Ungrateful female offspring");
  v = v.replace(/\bteen(age)?(d)? (B|b)oy('s|s(?:')?)?\b/g, "ungrateful male offspring");
  v = v.replace(/\bTeen(age)?(d)? (B|B)oy('s|s(?:')?)?\b/g, "Ungrateful male offspring");
  v = v.replace(/\bteen(age)?(r)?('s|s(?:')?)?\b/g, "ungrateful offspring");
  v = v.replace(/\bTeen(age)?(r)?('s|s(?:')?)?\b/g, "Ungrateful offspring");

  //Science
  v = v.replace(/\bbillions and billions\b/g, "a Sagan");
  v = v.replace(/\bBillions and billions\b/g, "A Sagan");
  v = v.replace(/\bwormhole('s|s(?:')?)?\b/g, "stargate$1");
  v = v.replace(/\bWormhole('s|s(?:')?)?\b/g, "Stargate$1");
  v = v.replace(/\bblackhole\b/g, "terrifying abyss");
  v = v.replace(/\bBlackhole\b/g, "Terrifying Abyss");
  v = v.replace(/\bblackholes\b/g, "terrifying abysses");
  v = v.replace(/\bBlackholes\b/g, "Terrifying Abysses");
  v = v.replace(/\bStar Wars\b/g, "George Lucas' Space Opera");
  v = v.replace(/\bStar Trek\b/g, "Gene Roddenberry's Space Opera");
  v = v.replace(/\binstrument('s|s(?:')?)?\b/g, "thingamajig$1");
  v = v.replace(/\bInstrument('s|s(?:')?)?\b/g, "Thingamajib$1");
  v = v.replace(/\btool('s|s(?:')?)?\b/g, "doohickey$1");
  v = v.replace(/\bTool('s|s(?:')?)?\b/g, "Doohickey$1");

  //Politics
  v = v.replace(/\belection('s|s(?:')?)?\b/g, "mud throwing contest$1");
  v = v.replace(/\bElection('s|s(?:')?)?\b/g, "Mud Throwing Contest$1");
  v = v.replace(/\bSenate\b/g, "Bickering Lawmakers");
  v = v.replace(/\bCongress\b/g, "Bickering Lawmakers");
  v = v.replace(/\bSupreme Court Justice('s|s(?:')?)?\b/g, "Awesomest Court Gavel Holder$1");
  v = v.replace(/\bSupreme Court Judge('s|s(?:')?)?\b/g, "Awesomest Court Gavel Holder$1");
  v = v.replace(/\bSupreme Court\b/g, "Awesomest Court");

  //Business
  v = v.replace(/\bI (T|t)hink (O|o)utside the (B|b)ox\b/g, "I am unrealistically unique");
  v = v.replace(/\bthink outside the box\b/g, "be unrealistically unique");
  v = v.replace(/\bthinking outside the box\b/g, "being unrealistically unique");
  v = v.replace(/\bthinks outside the box\b/g, "is unrealistically unique");
  v = v.replace(/\bthought outside the box\b/g, "was unrealistically unique");
  v = v.replace(/\bThink (O|o)utside the (B|b)ox\b/g, "Be unrealistically unique");
  v = v.replace(/\bThinking (O|o)utside the (B|b)ox\b/g, "Being unrealistically unique");
  v = v.replace(/\bThinks (O|o)utside the (B|b)ox\b/g, "Is unrealistically unique");
  v = v.replace(/\bThought (O|o)utside the (B|b)ox\b/g, "Was unrealistically unique");
  v = v.replace(/\bstrategy\b/g, "top secret plan");
  v = v.replace(/\bStrategy\b/g, "Top secret plan");
  v = v.replace(/\bstrategies\b/g, "top secret plans");
  v = v.replace(/\bStrategies\b/g, "Top secret plans");
  v = v.replace(/\breduce (business)? (expenditures|expenses)\b/g, "stop spending an absurd amount of money");
  v = v.replace(/\bReduce (B|b)?(usiness)? (E|e)(xpenditures|xpenses)\b/g, "Stop spending an absurd amount of money");

  //Journalism
  v = v.replace(/\bcritics contend\b/g, "mean people say");
  v = v.replace(/\bCritics (C|c)ontend\b/g, "Mean people say");
  v = v.replace(/\binvestigate\b/g, "call the Spanish Inquisition");
  v = v.replace(/\bInvestigate\b/g, "Call the Spanish Inquisition");
  v = v.replace(/\b(I|i)nvestigation('s|s(?:')?)?\b/g, "Spanish Inquisition$2");
  v = v.replace(/\bis dead\b/g, "is pining for the fjords");
  v = v.replace(/\bhas died\b/g, "is now pining for the fjords");
  v = v.replace(/\bdied\b/g, "is pining for the fjords");
  v = v.replace(/\bis deceased\b/g, "is pining for the fjords");
  v = v.replace(/\bhas passed away\b/g, "is now pining for the fjords");
  v = v.replace(/\bpassed away\b/g, "is pining for the fjords");
  v = v.replace(/\butilize('s|s(?:')?)?\b/g, "use$1");
  v = v.replace(/\bUtilize('s|s(?:')?)?\b/g, "Use$1");
  v = v.replace(/\bmedia('s|s(?:')?)?\b/g, "gossipmongers$1");
  v = v.replace(/\bMedia('s|s(?:')?)?\b/g, "Gossipmongers$1");
  v = v.replace(/\bpress('s|s(?:')?)?\b/g, "gossipmongers$1");
  v = v.replace(/\bPress('s|s(?:')?)?\b/g, "Gossipmongers$1");
  v = v.replace(/\breporter('s|s(?:')?)?\b/g, "gossipmonger$1");
  v = v.replace(/\bReporter('s|s(?:')?)?\b/g, "Gossipmonger$1");

  //Unnecessary Qualifiers
  v = v.replace(/\bgay marriage('s|s(?:')?)?\b/g, "marriage$1");
  v = v.replace(/\bGay (M|m)arriage('s|s(?:')?)?\b/g, "Marriage$2");
  v = v.replace(/\bsame(\s|\-)sex marriage('s|s(?:')?)?\b/g, "marriage$2");
  v = v.replace(/\bSame(\s|\-)(S|s)ex (M|m)arriage('s|s(?:')?)?\b/g, "Marriage$4");
  v = v.replace(/\bgay wedding('s|s(?:')?)?\b/g, "wedding$1");
  v = v.replace(/\bGay (W|w)edding('s|s(?:')?)?\b/g, "Wedding$2");
  v = v.replace(/\bsame(\s|\-)sex wedding('s|s(?:')?)?\b/g, "wedding$2");
  v = v.replace(/\bSame(\s|\-)(S|s)ex (W|w)edding('s|s(?:')?)?\b/g, "Wedding$4");
  v = v.replace(/\blesbian marriage('s|s(?:')?)?\b/g, "marriage$1");
  v = v.replace(/\bLesbian (M|m)arriage('s|s(?:')?)?\b/g, "Marriage$2");
  v = v.replace(/\blesbian wedding('s|s(?:')?)?\b/g, "wedding$1");
  v = v.replace(/\bLesbian (W|w)edding('s|s(?:')?)?\b/g, "Wedding$2");
  v = v.replace(/\blesbian wom(a|e)n('s)?\b/g, "wom$1n$2");
  v = v.replace(/\bLesbian (W|w)om(a|e)n('s)?\b/g, "Wom$2n$3");
  v = v.replace(/\blesbian('s)?\b/g, "woman$1");
  v = v.replace(/\bLesbian('s)?\b/g, "Woman$1");
  v = v.replace(/\blesbians\b/g, "women");
  v = v.replace(/\bLesbians\b/g, "Women");
  v = v.replace(/\bgay m(a|e)n\b/g, "m$1n");
  v = v.replace(/\bgay male('s|s(?:')?)?\b/g, "male$1");
  v = v.replace(/\bGay (M|m)(a|e)n\b/g, "M$2n");
  v = v.replace(/\bGay (M|m)ale('s|s(?:')?)?\b/g, "$1ale$2");
  v = v.replace(/\btrans(gender)?(ed)? (wo)?m(a|e)n('s)?\b/g, "$3m$4n$5");
  v = v.replace(/\bTrans(gender)?(ed)? (M|m)(a|e)n('s)?\b/g, "M$4n$5");
  v = v.replace(/\bTrans(gender)?(ed)? (W|w)om(a|e)n('s)?\b/g, "Wom$4n$5");

  return v;
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
  var docTitle = doc.getElementsByTagName('title')[0],
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

  if (docTitle) {
    titleObserver = new MutationObserver(observerCallback);
    titleObserver.observe(docTitle, observerConfig);
  }
};

walkAndObserve(document);
