type A = {
    one: string
}

type B = {
    two: boolean
}

type C = A & {
    three: number
}

type mix = A & C & {
    four: number
}

function getAll(btn: mix) {
    console.log(btn.one)
    console.log(btn.three)
    console.log(btn.four)
}

getAll({one: "ali", three: 1, four: 2})