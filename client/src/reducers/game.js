import {
    GET_GAMES,
    GAME_FAIL,
    JOIN_UNJOIN,
    GET_GAME
} from '../actions/types'

const initialState = {
    games: [],
    game: null,
    loading: true,
    error: {}
}

export default function (state = initialState, action) {
    const {type, payload} = action;

    switch(type) {
        case GET_GAMES:
            return {
                ...state, 
                games: payload,
                loading: false
            };
        case GET_GAME: 
            return {
                ...state, 
                game: payload,
                loading: false
            }
        case GAME_FAIL:
            return {
                ...state, 
                error: payload,
                loading: false
             };
        case JOIN_UNJOIN:
            return {
                ...state,
                players: state.players.map(game => game._id === payload.id ? {...game, players:
                    payload.players} : game),
                loading: false
            }
        default: 
            return state;
    }
}