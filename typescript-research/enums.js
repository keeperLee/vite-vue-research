//普通枚举
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 10] = "Up";
    Direction[Direction["Down"] = 11] = "Down";
    Direction[Direction["Left"] = 12] = "Left";
    Direction[Direction["Right"] = 13] = "Right";
})(Direction || (Direction = {}));
var value = 'up';
if (value === "up" /* Up */) {
    console.log('go go go ');
}
