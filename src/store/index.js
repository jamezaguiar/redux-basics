import { createStore } from 'redux';
import { createSlice } from '@reduxjs/toolkit';

export const COUNTER_INCREMENT = 'COUNTER_INCREMENT';
export const COUNTER_DECREMENT = 'COUNTER_DECREMENT';
export const COUNTER_INCREASE = 'COUNTER_INCREASE';
export const COUNTER_TOGGLE = 'COUNTER_TOGGLE';

const initialState = { counter: 0, showCounter: true };

createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.amount;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case COUNTER_INCREMENT:
      return { ...state, counter: state.counter + 1 };
    case COUNTER_DECREMENT:
      return { ...state, counter: state.counter - 1 };
    case COUNTER_INCREASE:
      return { ...state, counter: state.counter + action.amount };
    case COUNTER_TOGGLE:
      return { ...state, showCounter: !state.showCounter };
    default:
      return { ...state };
  }
};

const store = createStore(counterReducer);

export default store;
