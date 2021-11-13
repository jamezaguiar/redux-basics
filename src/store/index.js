import { createStore } from 'redux';

export const COUNTER_INCREMENT = 'COUNTER_INCREMENT';
export const COUNTER_DECREMENT = 'COUNTER_DECREMENT';
export const COUNTER_INCREASE = 'COUNTER_INCREASE';

const initialState = { counter: 0 };

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case COUNTER_INCREMENT:
      return { counter: state.counter + 1 };
    case COUNTER_DECREMENT:
      return { counter: state.counter - 1 };
    case COUNTER_INCREASE:
      return { counter: state.counter + action.amount };
    default:
      return state;
  }
};

const store = createStore(counterReducer);

export default store;
