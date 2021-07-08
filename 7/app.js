const vm0 = Vue.createApp({
  data() {
    return {
      message: 'Hello world!',
    }
  },

  template: '<p>{{ message }}</p>',
});

vm0.mount('#app0');

// const res = Vue.compile('<p v-if="true">Hello</p>').mount();

const vm1 = Vue.createApp({
  data() {
    return {
      message: 'Hello world!',
    }
  },

  // compile template manually, without Vue compiler
  render() {
    // gotta return an object
    // build it on your own or with a little help if h() function
    // h() is short for hyperscript
    return Vue.h('p', this.message);
  },
})

vm1.mount('#app1');
