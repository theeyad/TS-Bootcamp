class User {
  private static _count: number = 0;
  public static get count(): number {
    return User._count;
  }

  msg: () => string;
  constructor(
    public id: number,
    private _userName: string,
    private age: number,
  ) {
    this.msg = () => `Message from obj ${this.userName}`;
    User._count++;
  }
  sayMsg(): string {
    return `Hello from obj`;
  }

  public get userName(): string {
    return this._userName;
  }
  public set userName(value: string) {
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
