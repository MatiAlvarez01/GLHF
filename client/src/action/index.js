import axios from "axios"
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
} from "./constants"

export function searchSummonerName(summonerName) {
    return function(dispatch) {
        return axios.post("http://localhost:3001/summoner/summonerName", {summonerName: summonerName})
            .then(summonerData => {
                dispatch({
                    type: SEARCH_SUMMONER_NAME,
                    payload: summonerData.data
                })
            })
            .catch(err => {
                console.log("ERROR en searchSummonerName:")
                console.log(err)
            })
    }
}

export function actSummonerName(summonerName) {
    return function(dispatch) {
        return axios.post("http://localhost:3001/summoner/summonerName/act", {summonerName: summonerName})
            .then(summonerData => {
                dispatch({
                    type: ACT_SUMMONER_NAME,
                    payload: summonerData.data
                })
            })
            .catch(err => {
                console.log("ERROR en actSummonerName:")
                console.log(err)
            })
    }
}

export function getAllChampions(summonerName) {
    return function(dispatch) {
        return axios.post("http://localhost:3001/champion/summoner/all", {summonerName: summonerName})
            .then(summonerData => {
                dispatch({
                    type: GET_ALL_CHAMPIONS,
                    payload: summonerData.data
                })
            })
            .catch(err => {
                console.log("ERROR en getAllChampions:")
                console.log(err)
            })
    }
}

export function filterChampionsByLevel(summonerName, champLevel) {
    return function(dispatch) {
        return axios.post("http://localhost:3001/champion/summoner/champLevel", {summonerName: summonerName, champLevel: champLevel})
            .then(summonerData => {
                dispatch({
                    type: FILTER_CHAMPIONS_BY_LEVEL,
                    payload: summonerData.data
                })
            })
            .catch(err => {
                console.log("ERROR en filterChampionsByLevel:")
                console.log(err)
            })
    }
}

export function filterChampionsByLastTimePlayed(summonerName, order) {
    return function(dispatch) {
        return axios.post("http://localhost:3001/champion/summoner/lastTimePlayed", {summonerName: summonerName, order: order})
            .then(summonerData => {
                dispatch({
                    type: FILTER_CHAMPIONS_BY_LAST_TIME_PLAYED,
                    payload: summonerData.data
                })
            })
            .catch(err => {
                console.log("ERROR en filterChampionsByLastTimePlayed:")
                console.log(err)
            })
    }
}

export function filterChampionsByChest(summonerName, chest) {
    return function(dispatch) {
        return axios.post("http://localhost:3001/champion/summoner/chest", {summonerName: summonerName, chest: chest})
            .then(summonerData => {
                dispatch({
                    type: FILTER_CHAMPIONS_CHEST,
                    payload: summonerData.data
                })
            })
            .catch(err => {
                console.log("ERROR en filterChampionsByChest:")
                console.log(err)
            })
    }
}

export function getMatchDetails(matchId) {
    return function(dispatch) {
        return axios.post("http://localhost:3001/match/details", {matchId: matchId})
            .then(gameData => {
                dispatch({
                    type: GET_MATCH_DETAILS,
                    payload: gameData.data
                })
            })
            .catch(err => {
                console.log("ERROR en getMatchDetails:")
                console.log(err)
            })
    }
}

export function clearMatchDetails() {
    return function(dispatch) {
        return dispatch({
            type: CLEAR_MATCH_DETAILS,
            payload: {}
        })
    }
}

export function getMatchStats(matchId) {
    return function(dispatch) {
        return axios.post("http://localhost:3001/match/stats", {matchId: matchId})
            .then(gameStats => {
                dispatch({
                    type: GET_MATCH_STATS,
                    payload: gameStats.data
                })
            })
            .catch(err => {
                console.log("ERROR en getMatchStats:")
                console.log(err)
            })
    }
}

export function clearMatchStats() {
    return function(dispatch) {
        return dispatch({
            type: CLEAR_MATCH_STATS,
            payload: {}
        })
    }
}

export function getAllGames(summonerName) {
    return function(dispatch) {
        return axios.post("http://localhost:3001/matchs/all", {summonerName: summonerName})
            .then(allGames => {
                dispatch({
                    type: GET_ALL_GAMES,
                    payload: allGames.data
                })
            })
            .catch(err => {
                console.log("ERROR en getAllGames:")
                console.log(err)
            })
    }
}

export function clearGames() {
    return function(dispatch) {
        return dispatch({
            type: CLEAR_MATCH_GAMES,
            payload: []
        })
    }
}