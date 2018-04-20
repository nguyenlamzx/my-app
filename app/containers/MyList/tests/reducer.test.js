
import { fromJS } from 'immutable';
import myListReducer from '../reducer';

describe('myListReducer', () => {
  it('returns the initial state', () => {
    expect(myListReducer(undefined, {})).toEqual(fromJS({}));
  });
});
