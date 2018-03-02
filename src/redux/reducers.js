import { combineReducers } from 'redux';
import { RECEIVE_TERM, TOGGLE_LOADING } from './actions';

const app = (state = { term: null }, action) => {
  switch (action.type) {
    case RECEIVE_TERM:
      return Object.assign({}, state, { term: action.payload.term });
    default:
      return state;
  }
};

const ui = (state = { loading: false }, action) => {
  switch (action.type) {
    case TOGGLE_LOADING:
      return Object.assign({}, state, { loading: action.payload.visible });
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  ui,
  app,
});

export default rootReducer;
