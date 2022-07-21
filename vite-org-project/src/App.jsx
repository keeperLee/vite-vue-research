import {defineComponent} from "vue";
import  '@styles/index.css'
import classes from '@styles/test.module.css'
import '@styles/test.styl'
export default defineComponent({
    setup(){
        return ()=>{
            return <div class={ `root ${classes.moduleClass} big`}>Hello vite-vueJsx</div>
        }
    }
})
