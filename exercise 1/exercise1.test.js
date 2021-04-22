const text = require('./exercise1')

test('return text', () => {
  expect(text('text')).toBe('text')
})
