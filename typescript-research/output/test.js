// const hello = (name:string)=>{
//     return `hello ${name}`
// }
//
// hello('lijian')
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
export function isString(value) {
    return (typeof value === 'string') || (value instanceof String);
}
export function isNumber(value) {
    return (typeof value === 'number') || (value instanceof Number);
}
export function isArray(value) {
    return Array.isArray(value);
}
export function copyArray(value) {
    return __spreadArray([], value, true);
}
