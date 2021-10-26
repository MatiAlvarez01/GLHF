import {
    SEARCH_SUMMONER_NAME,
    ACT_SUMMONER_NAME,
    GET_ALL_CHAMPIONS,
    FILTER_CHAMPIONS_BY_LEVEL,
    FILTER_CHAMPIONS_BY_LAST_TIME_PLAYED,
    FILTER_CHAMPIONS_CHEST,
    GET_MATCH_DETAILS,
    CLEAR_MATCH_DETAILS,
    GET_MATCH_STATS,
    CLEAR_MATCH_STATS,
    GET_ALL_GAMES,
    CLEAR_MATCH_GAMES
} from "../action/constants"
var initialState = {
    summonerDetails: {},
    champions: [],
    matchDetails: {},
    matchStats: {},
    games: []
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case SEARCH_SUMMONER_NAME:
            return {
                ...state,
                summonerDetails: action.payload
            }
        case ACT_SUMMONER_NAME: 
            return {
                ...state,
                summonerDetails: action.payload
            }
        case GET_ALL_CHAMPIONS:
            return {
                ...state,
                champions: action.payload
            }
        case FILTER_CHAMPIONS_BY_LEVEL:
            return {
                ...state,
                champions: action.payload
            }
        case FILTER_CHAMPIONS_BY_LAST_TIME_PLAYED:
            return {
                ...state,
                champions: action.payload
            }
        case FILTER_CHAMPIONS_CHEST:
            return {
                ...state,
                champions: action.payload
            }
        case GET_MATCH_DETAILS:
            return {
                ...state,
                matchDetails: action.payload
            }
        case CLEAR_MATCH_DETAILS:
            return {
                ...state,
                matchDetails: {}
            }
        case GET_MATCH_STATS:
            return {
                ...state,
                matchStats: action.payload
            }
        case CLEAR_MATCH_STATS:
            return {
                ...state,
                matchStats: action.payload
            }
        case GET_ALL_GAMES:
            return {
                ...state,
                games: action.payload
            }
        case CLEAR_MATCH_GAMES:
            return {
                ...state,
                games: action.payload
            }
        default:
            return {
                ...state
            }
    }
}

export default reducer;