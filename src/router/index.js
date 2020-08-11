import Vue from 'vue'
import Router from 'vue-router'
import Index from '../components/index.vue'
import Login from '../components/Login.vue'
import Hello from '../components/Hello.vue'

Vue.use(Router)
export default new Router({
	routes:[
		{
			path:'/',
			name:'Index',
			component:Index
		},
		{
			path:'/hello',
			name:'Hello',
			component:Hello
		},
		{
			path:'/login',
			name:'Login',
			component:Login
		}
	]
})