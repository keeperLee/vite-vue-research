//类型推论
let str = 'abc'

//联合类型,变量只能访问联合类型里所有类型共有的方法
let numberOrString : number | string
// numberOrString.toString()


//类型断言
function getLength(input: string | number):number{
    const str = input as string
    if(str.length){
        return str.length
    }else{
        const number = input as number
        return number.toString().length
    }
}


//类型判断
function getLength2(input: string | number):number{
    if(typeof input === 'string'){
        return input.length
    }else{
        return input.toString().length
    }
}
