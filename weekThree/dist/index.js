"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    id;
    _userName;
    age;
    static _count = 0;
    static get count() {
        return User._count;
    }
    msg;
    constructor(id, _userName, age) {
        this.id = id;
        this._userName = _userName;
        this.age = age;
        this.msg = () => `Message from obj ${this.userName}`;
        User._count++;
    }
    sayMsg() {
        return `Hello from obj`;
    }
    get userName() {
        return this._userName;
    }
    set userName(value) {
        this._userName = value;
    }
}
let user = new User(100, "ali", 20);
let user2 = new User(100, "ali", 20);
let user3 = new User(100, "ali", 20);
console.log(user.id);
console.log(user.userName);
user.userName = "Ahmed";
console.log(user.userName);
console.log(user.msg());
console.log(user.sayMsg());
console.log(User.count);
//# sourceMappingURL=index.js.map