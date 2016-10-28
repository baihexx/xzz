new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue.js!',
    ok: 1
  },
  methods: {
    reverseMessage: function() {
      this.message = this.message.split('').reverse().join('')
    }
  }
})

var vm = new Vue({
  data: {
    a: 3
  },
  created: function() {
    console.log('a is:' + this.a)
  }
})
