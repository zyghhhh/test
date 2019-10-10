import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import FirstScreen from '../components/firstScreen'
import TwoScreen from '../components/twoScreen'
import ThreeScreen from '../components/threeScreen'
import FourScreen from '../components/fourScreen'
import Test from '../components/test'

export default new VueRouter({
    mode:'hash',
    routes:[
        {
            path:'/test',
            component:Test
        },
        {
            path:'/firstScreen',
            component:FirstScreen
        },
        {
            path:'/twoScreen',
            component:TwoScreen
        },
        {
            path:'/threeScreen',
            component:ThreeScreen
        },
        {
            path:'/fourScreen',
            component:FourScreen
        },
        {
            redirect:'/firstScreen',
            path:'/'          
        }
    ]
})