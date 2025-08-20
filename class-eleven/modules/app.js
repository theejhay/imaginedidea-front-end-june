//import * as math from './math.js';
import { add, multiply } from './math.js';
import greet, { farewell } from './greet.js';
console.log(add(2, 3)); // 5
console.log(multiply(2, 3)); // 6

console.log(greet('Alice')); // Hello, Alice!
console.log(farewell('Bob')); // Goodbye, Bob!