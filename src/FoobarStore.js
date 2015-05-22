import alt from './alt';

class FoobarStore {
  constructor() {
    this.foo = 'foo';
    this.bar = { quux: 'foobar' };
  }
}

export default alt.createStore(FoobarStore, 'FoobarStore');
