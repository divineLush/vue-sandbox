const data = { name: 'John' };

const observedData = new Proxy(data, {
  // target is the object we're accessing
  // key is the name of the property that's being accessed
  // value represents the value the property will be set to
  // set() won't be called until we update one of the properties on the object
  set(target, key, value) {
    document.querySelector('#name').innerText = value;
    target[key] = value;
  }
});

console.log(observedData.name);
observedData.name = 'Jane';

// The document will always reflect the latest value no matter how many times the name is updated

setTimeout(() => { observedData.name = 'Paul'; }, 2000);
setTimeout(() => { observedData.name = 'Anna'; }, 4000);
