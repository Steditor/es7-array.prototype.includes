// Polyfill published under Public Domain at
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
if (!Array.prototype.includes) {
  Array.prototype.includes = function(searchElement /*, fromIndex*/ ) {
    'use strict';
    var O = Object(this);
    var len = parseInt(O.length, 10) || 0;
    if (len === 0) {
      return false;
    }
    var n = parseInt(arguments[1], 10) || 0;
    var k;
    if (n >= 0) {
      k = n;
    } else {
      k = len + n;
      if (k < 0) {k = 0;}
    }
    var currentElement;
    var searchIsNaN = isNaN(searchElement);
    while (k < len) {
      currentElement = O[k];
      // SameValueZero algorithm has to treat NaN as equal to itself, but
      // NaN === NaN is false, so check explicitly
      // SameValueZero treats 0 and -0 as equal, as does ===, so we're fine there
      if (searchElement === currentElement || (searchIsNaN && isNaN(currentElement))) {
        return true;
      }
      k++;
    }
    return false;
  };
}
