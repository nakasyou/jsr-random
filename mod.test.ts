import * as random from './mod.ts'

Deno.test('randInt', () => {
  for (let i = 0; i !== 100; i ++) {
    const randomValue = random.randInt(0, 10)
    if (randomValue < 0 || 10 < randomValue) {
      throw new TypeError('Out of range')
    }
  }
})
