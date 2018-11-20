import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import TodoList from './views/TodoList.vue'
import addTodoItem from './views/addTodoItem.vue'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '', redirect: '/todos' },
    { path: '/home', name: 'home', component: Home },
    { path: '/todos', name: 'todos', component: TodoList },
    { path: '/todos/add', name: 'addTodos', component: addTodoItem },
    { path: '/about', name: 'about', component: () => import(/* webpackChunkName: "about" */ './views/About.vue') }
  ]
})
