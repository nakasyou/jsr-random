/**
 * This module contains main functions to calc random values.
 * @module
 */

/**
 * This module functions's options
 */
export interface RandOpts {
  /**
   * Calc random value
   * @returns Random value (0.0 <= x < 1)
   */
  random?: () => number
}

/**
 * Get random value (0 <= x < 1)
 * @param opts Options
 * @returns Random value
 */
export const random = (opts?: RandOpts): number => (opts?.random ?? Math.random)()

/**
 * Get random float value
 * @param min A min value
 * @param max A max value
 * @param opts Options
 * @returns Ramdom float value
 */
export const uniform = (min: number, max: number, opts?: RandOpts): number =>
  random(opts) * (max - min) + min

/**
 * Get random integer
 * @param min A min integer
 * @param max A max integer
 * @param opts Options
 * @returns Random value, min <= x <= max
 */
export const randInt = (min: number, max: number, opts?: RandOpts): number =>
  Math.floor(random(opts) * (max - min + 1)) + min

/**
 * Get random item from Array
 * @param arr Array
 * @param opts Options
 * @returns A random item
 */
export const choice = <T>(arr: T[], opts?: RandOpts): T =>
  arr[Math.floor(arr.length * random(opts))]

/**
 * Get random items from Array
 * @param arr Array
 * @param n How many item do you want to get
 * @param opts Options
 * @returns Random items from Array
 */
export const choices = <T>(arr: T[], n: number, opts?: RandOpts): T[] =>
  [...new Array(n)].map(() => choice(arr, opts))

/**
 * Shuffle array. In-place.
 * @param arr Target Array
 * @param opts Options
 * @returns Shuffled array, it points to the same thing as the argument.
 */
export const shuffle = <T>(arr: T[], opts?: RandOpts): T[] =>
  arr.sort(() => random(opts) - 0.5)

/**
 * Shuffle array. The result is copyed. It don't change argment array.
 * @param arr Target Array
 * @param opts Options
 * @returns Shuffled array, copyed.
 */
export const toShuffled = <T>(arr: T[], opts?: RandOpts): T[] =>
  arr.toSorted(() => random(opts) - 0.5)

/**
 * Get random items from Array, not duplicated
 * @param arr Target array
 * @param size How long item do you want
 * @param opts Options
 * @returns Items, not duplicated
 */
export const sample = <T>(arr: T[], size: number, opts?: RandOpts): T[] =>
  toShuffled(arr, opts).slice(0, size)
