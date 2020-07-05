import Vue from 'vue'
import Router from 'vue-router'
import login from "../components/login";
import emplist from "../components/emplist";
import addEmp from "../components/addEmp";
import updataEmp from "../components/updataEmp";
import regist from "../components/regist";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
     {
      path: '/login',
      name: 'login',
      component: login
    },
     {
      path: '/home',
      name: 'home',
      component: emplist
    },
     {
      path: '/addEmp',
      name: 'addEmp',
      component: addEmp
    },
    {
      path: '/updataEmp/:id',
      name: 'updataEmp',
      component: updataEmp
    },
    {
      path: '/regist',
      name: 'regist',
      component: regist
    },
  ]
})
