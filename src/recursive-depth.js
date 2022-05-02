// const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here

    // if (Array.isArray(arr)) {
    //   return 1 + this.calculateDepth(arr[0]);
    // }
    // // else return `0` since it not
    // // a nested array
    // return 0;

    return Math.max(...arr.map(e => Array.isArray(e) ? this.calculateDepth(e) : 0)) + 1

    // return Array.isArray(arr) ? 1 + Math.max.apply(this, arr.map(this.calculateDepth)) : 0

    
  }
}

module.exports = {
  DepthCalculator
};

var dc = new DepthCalculator;
console.log(dc.calculateDepth([1, 2, 3, 4, 5, [1]]))