import Vue from 'vue';
import vueRouter from 'vue-router';


Vue.use(vueRouter);

import About from './components/pages/about.vue';
import Works from './components/pages/works.vue';
import Reviews from './components/pages/reviews.vue';
import Login from "./components/pages/login";


const routes= [
	{
		path: '/',
		component: About
	},
	{
		path: '/works',
		component: Works
	},
	{
		path: '/reviews',
		component: Reviews
	},
	{
		path: '/login',
		component: Login
	},
];

export default new vueRouter({routes});