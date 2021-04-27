const text = require('./exercise1')

describe('Texts tests', () => {
  test('return the text', () => {
    expect(text('text')).toBe('text')
  })
})
