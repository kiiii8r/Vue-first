const app = Vue.createApp({
  data: () => ({
    newItem: '',
    todos: []
  }),
  methods: {
    // クリック時のイベントを設定
    addItem: function(event) {
    console.log('Clicked!')
    // todosにnewItemの記載内容を格納する
    let todo = {
      item: this.newItem
    }
    this.todos.push(todo)
    }
  }
}).mount('#app')