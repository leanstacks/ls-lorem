const _WORDS = ["lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipiscing", "elit", "sed", "do", "eiusmod", "tempor", "incididunt", "labore", "et", "dolore", "magna", "aliqua", "ut", "enim", "ad", "minim", "veniam", "quis", "nostrud", "exercitation", "ullamco", "laboris", "nisi", "aliquip", "ex", "ea", "a", "commodo", "consequat", "duis", "aute", "irure", "in", "reprehenderit", "voluptate", "velit", "esse", "cillum", "fugait", "nulla", "pariatur", "excepteur", "sint", "occaecat", "cupidatat", "non", "proident", "sunt", "culpa", "qui", "officia", "deserunt", "mollit", "anim", "id", "est", "laborum", "justo", "fermentum", "bibendum", "massa", "nunc", "pulvinar", "sapien", "ligula", "condimentum", "vel", "ero", "ornare", "egestas", "dui", "mi", "nul", "posuere", "quam", "vitae", "proin", "neque", "nibh", "morbi", "tempus", "urna", "arcu", "at", "e", "dapibus", "qos", "nam", "convallis", "aenean", "cras", "facilisis", "laoreet", "donec"];

const _MAX_WORDS = 1000;

const _SPACE = " ";

const _dedup = () => {
  console.log(`dedup. word count:${_WORDS.length}`);
  _WORDS.forEach(word => {
    let occurrences = _WORDS.filter(word2 => word === word2);
    if (occurrences.length > 1) {
      console.log(`found "${word}" ${occurrences.length} times`);
    }
  });
};

const _wordsAsArray = (nbr = 1) => {
  let res = [];
  const totalWords = (( 0 < nbr ) && ( nbr <= _MAX_WORDS )) ? nbr : 1;

  for (let i = 0; i < totalWords; i++) {
    let idx = Math.floor((Math.random() * _WORDS.length));
    res.push(_WORDS[idx]);
  }
  
  return res;
};

const _words = (nbr = 1) => {
  let res = "";
  const words = _wordsAsArray(nbr);

  res = words.reduce((acc, val) => acc += _SPACE + val);

  return res.trim();
};

module.exports =  {
  words: _words,
  wordsAsArray: _wordsAsArray
};
