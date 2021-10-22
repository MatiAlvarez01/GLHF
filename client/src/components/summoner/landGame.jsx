import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import styled from "styled-components";
import { getMatchDetails, clearMatchDetails, getMatchStats, clearMatchStats } from "../../action";
import GameDetails from "./gameDetails";

function LandGame() {
    const dispatch = useDispatch();
    const { matchIdParam } = useParams();
    const matchDetails = useSelector(state => state.matchDetails)
    const matchStats = useSelector(state => state.matchStats)

    useEffect(() => {
        dispatch(getMatchDetails(matchIdParam))
        dispatch(getMatchStats(matchIdParam))
        return(() => {
            dispatch(clearMatchDetails())
            dispatch(clearMatchStats())
        })
    }, [])

    return (
        <div>
            {matchDetails.participantsIds ? <GameDetails details={matchDetails} stats={matchStats}/> : <h1>Cargando</h1>}
        </div>
    )
}

export default LandGame;