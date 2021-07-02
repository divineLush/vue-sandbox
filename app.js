// one vue instance can't control multiple elements at once
// a vue instance can only be mounted to one element

// if multiple elements match the value we pass into .mount()
// vue will assign itself to the first element that it finds

Vue.createApp({
  data() {
    return {
      a: '123123213'
    }
  }
}).mount('.app');

Vue.createApp({
  data() {
    return {
      a: '123123213'
    }
  }
}).mount('#twin0');

Vue.createApp({
  data() {
    return {
      a: '123123213'
    }
  }
}).mount('#twin1');

const vm = Vue.createApp({
  data() {
    return {
      firstName: 'John',
      lastName: 'Doe',
    }
  },

  methods: {
    fullName() {
      return `${this.firstName} ${this.lastName}`;
    }
  },
}).mount('#vm');

setTimeout(() => {
  // we dont have to type vm.$data.firstName
  // cause vue provides proxy getters and setters
  vm.firstName = 'Bob';
}, 3000);
