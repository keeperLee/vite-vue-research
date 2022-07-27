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
function echoWithLength(arg) {
    console.log(arg.length);
    return arg;
}
var str = echoWithLength('str');
var obj = echoWithLength({ length: 10, width: 10 });
var arr = echoWithLength([1, 2, 3]);
// echoWithLength(13)
