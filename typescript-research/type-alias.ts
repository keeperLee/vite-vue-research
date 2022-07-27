//type alias,类型别名
let sum:(x:number,y:number)=>number
let result = sum(1,2)

type PlusType = (x:number,y:number)=>number
let sum2:PlusType
let result2 = sum2(3,4)

type stringOrNumber = string | number
let result3 : stringOrNumber = 'abc'
result3 = 666


//字面量
const str: 'name' ='name'
const num: 1 = 1
type Directions = 'Up' | 'Down' | 'Left' | 'Right'
let toWhere:Directions = 'Left'

//交叉类型
interface IName{
    name:string
}
type IPerson = IName & {age:number}
let person:IPerson = {name:'lijian',age:24}

