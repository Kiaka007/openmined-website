import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import auth from './auth';
import notifications from './notifications';

export default combineReducers({
  routing: routerReducer,
  auth,
  notifications
});
