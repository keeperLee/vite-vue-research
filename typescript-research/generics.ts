function echo<T>(arg:T):T{
    return arg
}
const result = echo(true)

function swap<T,U>(tuple:[T,U]):[U,T]{
    return [tuple[1],tuple[0]]
}
const result2 = swap(['sting',123])
console.log(result2)
