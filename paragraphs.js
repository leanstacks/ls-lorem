const { sentences } = require('./sentences');

const _DEFAULT_SENTENCES_MIN = 5;
const _DEFAULT_SENTENCES_MAX = 8;

const _MAX_PARAGRAPHS = 50;

const _sentencesInParagraph = () => {
  const maxVariance = _DEFAULT_SENTENCES_MAX - _DEFAULT_SENTENCES_MIN;
  const randVariance = Math.round((Math.random() * maxVariance));
  const paragraphLen = _DEFAULT_SENTENCES_MIN + randVariance;
  return paragraphLen;
};

const _createParagraph = () => {
  const nbrSentences = _sentencesInParagraph();
  let paragraph = sentences(nbrSentences);
  return paragraph;
};

const _paragraph = () => {
  return _createParagraph();
};

const _paragraphs = (nbr = 1) => {
  const res = [];
  const totalParagraphs = (( 0 < nbr ) && ( nbr <= _MAX_PARAGRAPHS )) ? nbr : 1;

  for (let i = 0; i < totalParagraphs; i++) {
    res.push(_createParagraph());
  }

  return res;
};

module.exports = {
  paragraph: _paragraph,
  paragraphs: _paragraphs
};
