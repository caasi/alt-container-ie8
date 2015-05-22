import 'babel/polyfill';
import React from 'react';
import AltContainer from 'alt/AltContainer';
import FoobarStore from './FoobarStore';

var Foobar = React.createClass({
  getDefaultProps() {
    return {
      foo: 'void',
      bar: { quux: 'empty' }
    };
  },
  render() {
    var { foo, bar } = this.props;
    return <p>{foo}<br />{bar.quux}</p>
  }
});

var App = React.createClass({
  render() {
    return (
      <AltContainer
        stores={{ FoobarStore }}
        transform={({ FoobarStore }) => FoobarStore}
      >
        <Foobar />
      </AltContainer>
    );
  }
});

React.render(<App />, document.body);

