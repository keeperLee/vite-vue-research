"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// axios.get('url')
// axios.post('url',{name:'lijian'})
var axios_1 = require("axios");
axios_1.default.get('http://baidu.com').then(function (res) {
    console.log(res.data);
});
jQuery('').height();
