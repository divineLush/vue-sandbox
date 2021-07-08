// the process of Vue inserting itself into the document is called mounting
// the moment we see the expression interpolated {{ message }} into the document indicates that view has been mounted

let vm = Vue.createApp({
  data() {
    return {
      message: "Hello world!"
    }
  }
});

vm.mount('#app');

// setTimeout(() => {
//   vm.mount('#app');
// }, 3000);

// Vue Lifecycce
// 1. Vue.createApp().mount() - create Vue instance, begin the lifecycle
// 2. beforeCreate() - Vue instance hasn't been fully created, no access to data or methods
// 3. Initialize data and methods
// 4. Instance created
// 5. created() - can access data and methods, Vue was not mounted to any template
// 6. Compile template - starts when .mount() is called on Vue instance
// 7. beforeMount()
// 8. Replace content inside selected .mount() element with the compiled template
// 9. Vue instence is mounted (insereted into the document)
// 10. Watch data for any changes (clicks, inputes, etc)
// 11. beforeUpdate() - data has been updated, but has not been applied to the template
// 12. Apply changes to the template
// 13. updated() - runs once the template is patched with the updated data
// 14. Restart lifecycle
