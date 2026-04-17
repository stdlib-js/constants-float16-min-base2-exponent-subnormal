/** @license Apache-2.0 */

'use strict';

/**
* The minimum biased base 2 exponent for a subnormal half-precision floating-point number.
*
* @module @stdlib/constants-float16-min-base2-exponent-subnormal
* @type {integer32}
*
* @example
* var FLOAT16_MIN_BASE2_EXPONENT_SUBNORMAL = require( '@stdlib/constants-float16-min-base2-exponent-subnormal' );
* // returns -24
*/


// MAIN //

/**
* The minimum biased base 2 exponent for a subnormal half-precision floating-point number.
*
* ```text
* -(BIAS+(10-1)) = -(15+9) = -24
* ```
*
* where `BIAS = 15` and `10` is the number of digits in the significand.
*
* @constant
* @type {integer32}
* @default -24
* @see [IEEE 754]{@link https://en.wikipedia.org/wiki/IEEE_754-1985}
*/
var FLOAT16_MIN_BASE2_EXPONENT_SUBNORMAL = -24|0; // asm type annotation


// EXPORTS //

module.exports = FLOAT16_MIN_BASE2_EXPONENT_SUBNORMAL;
