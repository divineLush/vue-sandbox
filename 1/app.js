let vm = Vue.createApp({
  data() {
    return {
      isPurple: false,
      selectedColor: '',
    }
  },

  computed: {
    circleClasses() {
      return { purple: this.isPurple };
    }
  },
}).mount('#app')
