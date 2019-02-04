var app = new Vue({
  el: '#app',
  data: {
    title: 'Hello Vue JS!',
    newTodo: '',
    todos: []
  },
  methods: {
    addTodo() {
      this.todos.push({
        title: this.newTodo,
        done: false
      });
      this.newTodo = '';
    }
  }
});
Vue.component('todo-item', {
  template: '<li>This is a todo</li>'
})
Vue.component('name', {
  template: '<li>This is a name</li>'
})