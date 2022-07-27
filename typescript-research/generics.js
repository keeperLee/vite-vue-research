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
var Queue = /** @class */ (function () {
    function Queue() {
        this.data = [];
    }
    Queue.prototype.push = function (item) {
        return this.data.push(item);
    };
    Queue.prototype.pop = function () {
        return this.data.shift();
    };
    return Queue;
}());
var queue = new Queue();
queue.push(1);
console.log(queue.pop().toFixed());
var kp1 = { key: 1, value: 'string' };
var kp2 = { key: 'str', value: 123 };
//常用接口使用泛型,Array是接口
var arrTwo = [1, 2, 3];
