import { useSelector, useDispatch } from 'react-redux';
import {
  COUNTER_INCREMENT,
  COUNTER_DECREMENT,
  COUNTER_INCREASE,
  COUNTER_TOGGLE,
} from '../store';

import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter);
  const showCounter = useSelector(state => state.showCounter);

  const incrementHandler = () => {
    dispatch({
      type: COUNTER_INCREMENT,
    });
  };

  const decrementHandler = () => {
    dispatch({
      type: COUNTER_DECREMENT,
    });
  };

  const increaseHandler = () => {
    dispatch({
      type: COUNTER_INCREASE,
      amount: 5,
    });
  };

  const toggleCounterHandler = () => {
    dispatch({
      type: COUNTER_TOGGLE,
    });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
