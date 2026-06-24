class User<T> {
    constructor(public val: T) { }
    show(msg: T): void {
        console.log(`${msg}`)
    }
}

let userOne = new User<number | string>(100)
console.log(userOne.val)
userOne.show("m")