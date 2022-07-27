// function echo<T>(arg:T):T{
//     return arg
// }
// const result = echo(true)
//
// function swap<T,U>(tuple:[T,U]):[U,T]{
//     return [tuple[1],tuple[0]]
// }
// const result2 = swap(['sting',123])
// console.log(result2)

interface IWithLength {
    length:number
}

function echoWithLength<T extends IWithLength>(arg:T):T{
    console.log(arg.length)
    return arg
}

const str = echoWithLength('str')
const obj = echoWithLength({length:10,width:10})
const arr = echoWithLength([1,2,3])
// echoWithLength(13)
