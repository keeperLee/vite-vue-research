//普通枚举
enum Direction {
    Up =10,
    Down,
    Left,
    Right
}

//常量枚举,性能更高
const enum DirectionConst {
    Up = 'up',
    Down = 'down',
    Left = 'left',
    Right = 'right'
}

const value = 'up'
if(value === DirectionConst.Up){
    console.log('go go go ')
}

