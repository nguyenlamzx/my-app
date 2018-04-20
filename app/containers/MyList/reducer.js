/*
 *
 * MyList reducer
 *
 */

import uuid from 'uuid/v1';
import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
} from './constants';

const initialState = fromJS({
  list: [
    {
      id: uuid(),
      type: 'text',
      title: 'In incididunt nostrud occaecat qui ex occaecat deserunt ullamco magna occaecat veniam veniam.',
      text: 'Aliqua sunt dolor pariatur nisi. Nisi aliquip dolor eu dolor. Proident duis quis aliqua minim commodo nulla occaecat ullamco sint sunt Lorem tempor tempor cillum. Aute ullamco tempor labore consequat laboris dolor sint. Voluptate velit ea enim ullamco amet et mollit.'
    }
  ]
});

function myListReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    default:
      return state;
  }
}

export default myListReducer;
