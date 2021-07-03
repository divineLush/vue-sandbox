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
  // reactivity is when any changes to the data is
  // immediately reflected on the page
  data() {
    return {
      firstName: 'John',
      middleName: '',
      lastName: 'Doe',
      url: 'https://duckduckgo.com/',
      rawURL: '<a href="https://duckduckgo.com/" target="_blank">DUCK</a>',
      age: 20,
    }
  },

  methods: {
    fullName() {
      return `${this.firstName} ${this.middleName} ${this.lastName}`;
    },
    increment() {
      this.age++;
    },
    // when vue calls function, it'll automatically pass the event object
    updateLastName(event) {
      console.log(event);
      this.lastName = event.target.value;
    },
    updateLastNameWithMessage(event, message) {
      console.log(message);
      this.updateLastName(event);
    },
    updateMiddleName(event) {
      this.middleName = event.target.value;
    },
  },
}).mount('#vm');

setTimeout(() => {
  // we dont have to type vm.$data.firstName
  // cause vue provides proxy getters and setters
  vm.firstName = 'Bob';
}, 3000);
