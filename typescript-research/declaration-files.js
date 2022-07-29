"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// axios.get('url')
// axios.post('url',{name:'lijian'})
var calculator_1 = require("calculator");
var axios_1 = require("axios");
axios_1.default.get('http://baidu.com').then(function (res) {
    console.log(res.data);
});
jQuery('').height();
(0, calculator_1.default)('minus', [1, 2]);
calculator_1.default.minus([1, 2]);
