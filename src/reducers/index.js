/*
 * Created by jemo on 2018-3-19.
 * Reducers
 */

import { combineReducers } from 'redux';

// 测试用reducer
const example = (
  state = {
    test: 'test',
  },
  action
) => {
  switch(action.type) {
    case 'sometype':
      return {
        ...state,
        test: 'what',
      };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  example: example,
});

export default rootReducer;
