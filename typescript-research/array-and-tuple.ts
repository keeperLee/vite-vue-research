//数组类型
let arrOfNumbers: number[] = [1,2,3]
arrOfNumbers.push(4)


function test(){
    console.log(arguments) //类数组
}

//元组类型
let user: [string,number] = ['lijian',20]
user.push('abc')
console.log(user)
