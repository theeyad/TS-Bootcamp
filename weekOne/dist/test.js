"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function multiplyNums(...nums) {
    let result = 1;
    for (const num of nums) {
        result *= num;
    }
    return result;
}
console.log(multiplyNums(5, 6, 5));
//# sourceMappingURL=test.js.map