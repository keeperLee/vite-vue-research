// axios.get('url')
// axios.post('url',{name:'lijian'})
import axios from "axios";
axios.get('http://baidu.com').then(res=>{
    console.log(res.data)
})
