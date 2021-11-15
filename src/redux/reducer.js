import { combineReducers } from 'redux';
import auth from '../reducers/auth';
import counter from '../reducers/counter';

export default combineReducers({ auth, counter });
