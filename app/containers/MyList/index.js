/**
 *
 * MyList
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectMyList from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

export class MyList extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet>
          <title>MyList</title>
          <meta name="description" content="Description of MyList" />
        </Helmet>
        <FormattedMessage {...messages.header} />
      </div>
    );
  }
}

MyList.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  mylist: makeSelectMyList(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'myList', reducer });
const withSaga = injectSaga({ key: 'myList', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(MyList);
