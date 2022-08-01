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

// interface IWithLength {
//     length:number
// }
//
// function echoWithLength<T extends IWithLength>(arg:T):T{
//     console.log(arg.length)
//     return arg
// }
//
// const str = echoWithLength('str')
// const obj = echoWithLength({length:10,width:10})
// const arr = echoWithLength([1,2,3])
// echoWithLength(13)

//类中使用泛型
class Queue<T>{
    private data = []
    push(item:T){
        return this.data.push(item)
    }
    pop():T{
        return this.data.shift()
    }
}
const queue = new Queue<number>()
queue.push(1)
console.log(queue.pop().toFixed())

//接口中使用泛型
interface KeyPair<T,U>{
    key:T,
    value:U
}
let kp1: KeyPair<number, string> = {key:1,value:'string'}
let kp2: KeyPair<string, number> = {key:'str',value:123}

//常用接口使用泛型,Array是接口
let arrTwo : Array<number> = [1,2,3]
