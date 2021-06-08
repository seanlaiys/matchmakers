import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import Conversation from './Conversation';
import Message from './Message';


const MessageBox = ({auth: { user }}) => {
    return <Fragment>
        <div className ="row">
        <div className="col-sm-4 col-md-4">
            <Conversation />
            <Conversation />
            <Conversation />
            <Conversation />
        </div>
        <div className="col-sm-8 col-md-8"> 
            < Message />
            < Message sent ={true}/>
            < Message />
            < Message />
            <div className ="input-group">
            <textarea type="text" className ="form-control rounded" placeholder="Type Something" aria-describedby="search-addon" />
            <button type="button" class="btn btn-outline-primary my-right"> <i class="fas fa-paper-plane" /> </button>
            </div>
        </div>
        </div>
    </Fragment> 
}


MessageBox.propTypes = {
    auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    auth: state.auth,
});

  
export default connect(mapStateToProps, {})(MessageBox);
