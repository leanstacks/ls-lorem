const { words } = require('./words');

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
