//它里面没有任何的实际实现代码,只有类型声明
//只有类型 - 比如 interface, function或者class等等

// declare function axios(url:string):string

interface IAxios{
    get:(url:string) => string
    post:(url:string,data:any) => string
}

declare const axios:IAxios
