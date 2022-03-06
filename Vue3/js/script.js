const app = Vue.createApp({
  data: () => ({

  }),
  methods: {
    // クリック時のイベントを設定
    addItem: function(event) {
    console.log('Clicked!')
    }
  }
}).mount('#app')