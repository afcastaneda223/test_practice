const stringLength = require('./lenght');

test('checks 1< strl < 10 to be true', () => {
    expect(stringLength('abcs')).toBe(4);
  });

test('checks strl <1 ', () => {
  expect(stringLength('')).toBe(false);
});

test('checks strl >10 ', () => {
  expect(stringLength('0123456789a')).toBe(false);
});

