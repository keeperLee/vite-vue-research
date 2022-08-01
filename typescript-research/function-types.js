// function add(x: number, y: number, z?: number): number {
//     if(typeof z === 'number'){
//         return x + y + z
//     }else{
//         return x + y
//     }
// }
//
// let result = add(1, 2)
var add = function (x, y, z) {
    if (typeof z === 'number') {
        return x + y + z;
    }
    else {
        return x + y;
    }
};
var add2 = add;
