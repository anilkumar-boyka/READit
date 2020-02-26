import Vue from 'vue';
import Router from 'vue-router';
import HomePage from '@/components/HomePage';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import ImageLink from '@/components/ImageLink';
import  nextPage from '@/components/PageSurfing';


Vue.use(Router);
Vue.use(BootstrapVue);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage,
    },
    {	
    	  path: '/image/:id',
    	  props:true,
    	  name:'ImageLink',
    	  component: ImageLink
    },
    {
      path:'/nextPage/:id',
      name:'PageSurfing',
      component:nextPage
    }
  ],
});
