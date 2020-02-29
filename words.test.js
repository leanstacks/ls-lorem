const { words, wordsAsArray } = require('./words');

describe('words', () => {

  test('generates default number of words', () => {
    const wrds = words();
    const wrdArray = wrds.split(" ");

    expect(wrdArray.length).toBe(1);
  });

  test('generates specified number of words', () => {
    const wrds = words(42);
    const wrdArray = wrds.split(" ");

    expect(wrdArray.length).toBe(42);
  });

});

describe('wordsAsArray', () => {

  test('generates default number of words', () => {
    const wrds = wordsAsArray();

    expect(wrds.length).toBe(1);
  });

  test('generates specified number of words', () => {
    const wrds = wordsAsArray(42);

    expect(wrds.length).toBe(42);
  });

});
