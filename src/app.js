import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement, duplicate } from './redux/actions';

function App({ count, increment, decrement, duplicate }) {
  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={duplicate}>Duplicate</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    count: state.count,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement()),
    duplicate: () => dispatch(duplicate()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);