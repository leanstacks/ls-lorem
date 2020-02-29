const { paragraph, paragraphs } = require('./paragraphs');

test('generates paragraph', () => {
  const pgph = paragraph();

  expect(pgph).toBeDefined();
  expect(pgph.length).toBeGreaterThan(1);
});

test('generates specified number of paragraphs', () => {
  const pgphs = paragraphs(3);

  expect(pgphs.length).toBe(3);
});
