const text = require('./exercise1')

describe('Texts tests', () => {
  test('return the text', () => {
    expect(text('text')).toBe('text')
  })
  test('not return other text different to -text-', () => {
    expect(text('text')).not.toBe('other-thing')
  })
})
