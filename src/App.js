import React from 'react';
import { connect } from 'react-redux';
import * as actions from './store/actions/index';
import './App.css';

const App = (props) => {
  const increaseValue = () => {
    props.onIncrease();
  }
  const decreaseValue = () => {
    props.onDecrease();
  }
  return (
    <div className="App">
      <div className="container" >
      <h2>Counter</h2>
      <div className = "control">
        <button onClick = {decreaseValue} className ="left">-</button>
        <label>{props.item}</label>
        <button onClick = {increaseValue} className ="right">+</button>
      </div>
      </div>
      
    </div>
  );
}

const mapStateToProps = state => {
  return {
    item: state.update.update
  }
}
const mapDispatchToProps = dispatch => {
  return {
    onIncrease: () => dispatch(actions.increaseItem()),
    onDecrease: () => dispatch(actions.decreaseItem())
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);
