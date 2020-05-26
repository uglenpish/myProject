import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

import About from './components/pages/about.vue';
import Works from './components/pages/works.vue';
import Reviews from './components/pages/works.vue';
import Login from "./components/pages/login"

const routers = [
	{
		path: '/',
		component: About
	},
	{
		path: '/works',
		component: Works
	},
	{
		path: '/works',
		component: Reviews
	},
	{
		path: '/login',
		component: Login
	},
];

export default new Router({routers, mode: "history"});