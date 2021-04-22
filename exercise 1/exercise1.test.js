const text = require('./exercise1')

test('return the text', () => {
  expect(text('text')).toBe('text')
})
