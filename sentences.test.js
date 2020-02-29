const { sentences, sentencesAsArray } = require('./sentences');

describe('sentences', () => {

  test('generates default number of sentences', () => {
    const snts = sentences();
    const sntArray = snts.split(".");
  
    expect(sntArray.length).toBe(2); // add 1 to account for item after final period.
  });
  
  test('generates specified number of sentences', () => {
    const snts = sentences(8);
    const sntArray = snts.split(".");
  
    expect(sntArray.length).toBe(9); // add 1 to account for item after final period.
  });
  
});

describe('sentencesAsArray', () => {

  test('generates default number of sentences', () => {
    const snts = sentencesAsArray();
  
    expect(snts.length).toBe(1);
  });
  
  test('generates specified number of sentences', () => {
    const snts = sentencesAsArray(8);
  
    expect(snts.length).toBe(8);
  });

});
