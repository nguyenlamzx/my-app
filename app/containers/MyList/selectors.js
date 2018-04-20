import { createSelector } from 'reselect';

/**
 * Direct selector to the myList state domain
 */
const selectMyListDomain = (state) => state.get('myList');

/**
 * Other specific selectors
 */


/**
 * Default selector used by MyList
 */

const makeSelectMyList = () => createSelector(
  selectMyListDomain,
  (substate) => substate.toJS()
);

export default makeSelectMyList;
export {
  selectMyListDomain,
};
