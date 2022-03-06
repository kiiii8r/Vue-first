const app = Vue.createApp({
  data: () => ({
    newItem: '',
    todos: []
  }),
  methods: {
    // クリック時のイベントを設定
    addItem: function(event) {

    // 空入力は処理を終了する
    if(this.newItem === '') return

    // todosにnewItemの記載内容を格納する
    let todo = {
      item: this.newItem
    }
    this.todos.push(todo)
    
    // Addボタンクリック時、入力欄をリセットする
    this.newItem = ''
    }
  }
}).mount('#app')