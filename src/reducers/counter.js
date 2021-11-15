import {
  COUNTER_INCREMENT,
  COUNTER_DECREMENT,
  COUNTER_INCREASE,
  COUNTER_TOGGLE_VIEW,
} from '../actions/counterActions';

const initialState = { counter: 0, showCounter: true };

export default (state = initialState, action) => {
  switch (action.type) {
    case COUNTER_INCREMENT:
      return { ...state, counter: state.counter + 1 };
    case COUNTER_DECREMENT:
      return { ...state, counter: state.counter - 1 };
    case COUNTER_INCREASE:
      return { ...state, counter: state.counter + action.payload };
    case COUNTER_TOGGLE_VIEW:
      return { ...state, showCounter: !state.showCounter };
    default:
      return state;
  }
};
