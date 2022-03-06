const app = Vue.createApp({
  data: () => ({
    newItem: ''
  }),
  methods: {
    // クリック時のイベントを設定
    addItem: function(event) {
    console.log('Clicked!')
    }
  }
}).mount('#app')