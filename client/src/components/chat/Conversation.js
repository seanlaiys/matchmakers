import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';

const Conversation = ({auth: { user }}) => {

  return (
    <div className="conversation my-top-small">
      <span className="conversationName"> User ABCD </span>
    </div>
  );
}


Conversation.propTypes = {
    auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    auth: state.auth,
});

  
export default connect(mapStateToProps, {})(Conversation);
