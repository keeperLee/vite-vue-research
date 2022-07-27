//类型推论
var str = 'abc';
//联合类型,变量只能访问联合类型里所有类型共有的方法
var numberOrString;
// numberOrString.toString()
//类型断言
function getLength(input) {
    var str = input;
    if (str.length) {
        return str.length;
    }
    else {
        var number = input;
        return number.toString().length;
    }
}
//类型判断
function getLength2(input) {
    if (typeof input === 'string') {
        return input.length;
    }
    else {
        return input.toString().length;
    }
}
