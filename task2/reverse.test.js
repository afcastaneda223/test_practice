const reverseString = require('./reverse');

test('checks reverse be true', () => {
    expect(reverseString('abc')).toBe('cba');
});
