const words = require('./words');

const _DEFAULT_WORDS_MIN = 5;
const _DEFAULT_WORDS_MAX = 9;

const _COMMA = ", ";
const _PERIOD = ".";

const _wordsInSentence = () => {
  const maxVariance = _DEFAULT_WORDS_MAX - _DEFAULT_WORDS_MIN;
  const randVariance = Math.round((Math.random() * maxVariance));
  const sentenceLen = _DEFAULT_WORDS_MIN + randVariance;
  return sentenceLen;
};

const _capitalize = (sentence = '') => {
  if (sentence.length === 0) {
    return sentence;
  }

  return sentence.slice(0,1).toUpperCase() + sentence.slice(1);
};

const _createSentence = () => {
  const nbrWords = _wordsInSentence();
  let sentence = words(nbrWords);
  sentence += _PERIOD;
  sentence = _capitalize(sentence);
  return sentence;
};

module.exports = (nbr = 1) => {
  let res = "";
  for (let i = 0; i < nbr; i++) {
    res += " " + _createSentence();
  }
  return res.trim();
};