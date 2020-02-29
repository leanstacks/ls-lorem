const { sentences } = require('./sentences');

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
