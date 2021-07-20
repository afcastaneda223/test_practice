const capitalize = require('./capitalize');

test('checks capitalize', () => {
    expect(capitalize('abc')).toBe('Abc');
});
