import { FrequencyValueEquals, FrequencyValueEvery, FrequencyValueOneOf } from "./Frequency";


/**
 * The class which contains commonly used functions by the library. These
 * functions and variables exist in a class so they may be overridden if
 * desired.
 */
export class Functions
{

  /**
   * Determines whether the given input is an array.
   *
   * @param input The variable to test.
   * @returns `true` if the variable is an array, otherwise `false`.
   */
  public static isArray<T>(input: any): input is Array<T>
  {
    return input instanceof Array;
  }

  /**
   * Determines whether the two arrays given are stricly equivalent. If the
   * arrays are not the same length or contain the same values in the same order
   * then `false` is returned.
   *
   * @param x The first array to test.
   * @param y The second array to test.
   * @returns `true` if they have the same exact values, otherwise `false`.
   */
  public static isArrayEquals(x: any[], y: any[]): boolean
  {
    if (x === y) return true;
    if (x.length !== y.length) return false;

    for (let i = 0; i < x.length; i++)
    {
      if (x[ i ] !== y[ i ])
      {
        return false;
      }
    }

    return true;
  }

  /**
   * Determines whether the given input is a string.
   *
   * @param input The variable to test.
   * @returns `true` if the variable is a string, otherwise `false`.
   */
  public static isString(input: any): input is string
  {
    return typeof(input) === 'string';
  }

  /**
   * Determines whether the given input is a finite number (a number which is
   * not infinite or not the result of a divide-by-zero operation).
   *
   * @param input The variable to test.
   * @returns `true` if the variable is a finite number, otherwise `false`.
   */
  public static isNumber(input: any): input is number
  {
    return isFinite(input) && typeof input === 'number';
  }

  /**
   * Determines whether the given input is an object and NOT an array.
   *
   * @param input The variable to test.
   * @returns `true` if the variable is a plain object, otherwise `false`.
   */
  public static isObject<T extends object>(input: any): input is T
  {
    return input !== null && !this.isArray(input) && typeof(input) === 'object';
  }

  /**
   * Determines whether the given input is defined.
   *
   * @param input The variable to test.
   * @return `true` if the variable is defined, otherwise `false`.
   */
  public static isDefined<T>(input: T | undefined): input is T
  {
    return typeof(input) !== 'undefined';
  }

  /**
   * Determines whether the given input is defined and not null.
   *
   * @param input The variable to test.
   * @return `true` if the variable is defined and not null, otherwise `false`.
   */
  public static isValue<T>(input: T | undefined | null): input is T
  {
    return input !== null && typeof(input) !== 'undefined';
  }

  /**
   * Determines whether the given input appears to be a valid
   * [[FrequencyValueEvery]].
   *
   * ```typescript
   * Functions.isFrequencyValueEvery({});                   // false
   * Functions.isFrequencyValueEvery([]);                   // false
   * Functions.isFrequencyValueEvery([1]);                  // false
   * Functions.isFrequencyValueEvery(null);                 // false
   * Functions.isFrequencyValueEvery({every:2});            // true
   * Functions.isFrequencyValueEvery({offset:1});           // false
   * Functions.isFrequencyValueEvery({every:2, offset:1});  // true
   * ```
   *
   * @param input The variable to test.
   * @returns `true` if the variable appears to be a [[FrequencyValueEvery]],
   *    otherwise false.
   */
  public static isFrequencyValueEvery(input: any): input is FrequencyValueEvery
  {
    return this.isObject<FrequencyValueEvery>( input ) && this.isNumber( input.every );
  }

  /**
   * Determines whether the given input appears to be a valid
   * [[FrequencyValueOneOf]].
   *
   * ```typescript
   * Functions.isFrequencyValueOneOf({});    // false
   * Functions.isFrequencyValueOneOf([]);    // false
   * Functions.isFrequencyValueOneOf([1]);   // true
   * Functions.isFrequencyValueOneOf(null);  // false
   * ```
   *
   * @param input The variable to test.
   * @returns `true` if the variable appears to be a [[FrequencyValueOneOf]],
   *    otherwise false.
   */
  public static isFrequencyValueOneOf(input: any): input is FrequencyValueOneOf
  {
    return this.isArray( input ) && input.length > 0;
  }

  /**
   * Determines whether the given input appears to be a valid
   * [[FrequencyValueEquals]].
   * 
   * ```typescript
   * Functions.isFrequencyValueEquals({});    // false
   * Functions.isFrequencyValueEquals([]);    // false
   * Functions.isFrequencyValueEquals([1]);   // false
   * Functions.isFrequencyValueEquals(null);  // false
   * Functions.isFrequencyValueEquals(0);     // false
   * ```
   * 
   * @param input The variable to test.
   * @returns `true` if the variable appears to be a [[FrequencyValueOneOf]],
   *    otherwise false.
   */
  public static isFrequencyValueEquals(input: any): input is FrequencyValueEquals
  {
    return typeof input === 'number' && isFinite(input);
  }

  /**
   * Returns the first argument which is defined.
   *
   * ```typescript
   * Functions.coalesce(3, 4);                // 3
   * Functions.coalesce(undefined, 4);        // 4
   * Functions.coalesce(null, 4);             // null
   * Functions.coalesce(void 0, void 0, 5);   // 5
   * ```
   *
   * @param a The first argument to look at.
   * @param b The second argument to look at.
   * @returns The first defined argument.
   * @see [[Functions.isDefined]]
   */
  public static coalesce(a: any, b: any, c?: any): any
  {
    return this.isDefined( a ) ? a : (this.isDefined( b ) ? b : c);
  }

  /**
   * Copies values from `from` object and sets them to the `target` object.
   *
   * @param target The object to set values to.
   * @param from The object to copy value references from.
   * @returns The reference to `target`.
   */
  public static extend<T = { [prop: string]: any }>(target: T, from: T): T
  {
    for (const prop in from)
    {
      target[ prop ] = from[ prop ];
    }

    return target;
  }

  /**
   * Pads the string `x` up to `length` characters with the given `padding`
   * optionally placing the `padding` `before` `x`.
   *
   * ```typescript
   * Functions.pad('hey', 5, '_', false);   // 'hey__'
   * Functions.pad('hey', 5, '_', true);    // '__hey'
   * Functions.pad('heyman', 5, '_', true); // 'heyman'
   * ```
   *
   * @param x The string to pad.
   * @param length The length to pad to.
   * @param padding The string to pad with.
   * @param before If the padding should go before the string to pad.
   * @returns The padded string if any padding needed be added.
   */
  public static pad(x: string, length: number, padding: string, before: boolean): string
  {
    while (x.length < length)
    {
      before ? x = padding + x : x = x + padding;
    }

    return x;
  }

  /**
   * Pads the number `x` up to `length` digits where the padding is `0` and it
   * goes before `x`. This function will only return the first `length`
   * characters of the padding string representation of the number but can return
   * an alternative number of `first` characters.
   *
   * ```typescript
   * Functions.padNumber(29, 3);      // '029'
   * Functions.padNumber(29, 3, 2);   // '02'
   * Functions.padNumber(9573, 3);    // '957'
   * ```
   *
   * @param x The number to pad with zeros in the beginning.
   * @param length The number of digits the number should be padded to.
   * @param first The number of digits to return from the start of the string.
   * @returns A padded number.
   */
  public static padNumber(x: number, length: number, first: number = length)
  {
    return this.pad(x + '', length, '0', true).substring( 0, first );
  }

}
