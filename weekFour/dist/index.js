"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    val;
    constructor(val) {
        this.val = val;
    }
    show(msg) {
        console.log(`${msg}`);
    }
}
let userOne = new User(100);
console.log(userOne.val);
userOne.show("m");
//# sourceMappingURL=index.js.map