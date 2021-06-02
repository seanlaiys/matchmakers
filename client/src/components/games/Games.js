import React, { Fragment, useEffect } from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {getGames} from '../../actions/game';
import Spinner from '../layout/Spinner';

const Games = ( {getGames, game: {games, loading}, auth}) => {
    // eslint-disable-next-line
    useEffect(() => {
        getGames();
    }, [getGames]);

    return loading ? <Spinner /> : <Fragment>
          <h1 className = "large text-primary big-header"> All Upcoming Games </h1>

            <div className ="input-group my-3">
                <input type="search" className ="form-control rounded" placeholder="Search" aria-label="Search"
                    aria-describedby="search-addon" />
                <button type="button" class="btn btn-outline-primary">search</button>
            </div>
            <Link to="#!" className="btn btn-light btn-dark btn-block my-4"> Host Your Game </Link>
        {games.map(game => (
            <div className="card mb-3">
                <div className="card-body">
                <h5 className="card-title">{game.sport}</h5>
                <p className="card-text"> <span className='text-primary'> Location: </span> {game.location}</p>
                <p className="card-text"> <span className='text-primary'> Waiting Room: </span> {game.players.length} players out of {game.maxPlayers}</p>
                <p className="card-text"> <span className='text-primary'> Date: </span> </p>
                <p className="card-text">
                <small className="card-text"> Created on: {game.dateTime} </small></p>
                <br></br>
                <small className="text-muted"> Game Host: {game.name} </small>
                {auth.user._id !== game.user ? <Link to={`/games/${game._id}`} className="btn btn-dark join-all"> Enter Room</Link> :
                <Fragment>
                 <Link to={`/games/${game._id}`} className="btn btn-dark join-all "> Enter Room </Link>
                 <Link to="#!" className="btn btn-danger join-all my-right"> Cancel Game </Link>
                 </Fragment>
                 }
                 
                </div>
            </div>
        ))}

    </Fragment>
}


Games.propTypes = {
    getGames: PropTypes.func.isRequired,
    game: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    game : state.game,
    auth: state.auth
});

export default connect(mapStateToProps, { getGames })(Games);