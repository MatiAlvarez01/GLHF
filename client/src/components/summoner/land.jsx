import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import styled from "styled-components";
import { searchSummonerName } from "../../action";
import Profile from "./profile"

function Land() {
    const dispatch = useDispatch();
    const { summonerNameParam } = useParams();
    const summonerDetails = useSelector(state => state.summonerDetails)

    useEffect(() => {
        dispatch(searchSummonerName(summonerNameParam))
    }, [summonerNameParam])

    return (
        <div>
            {summonerDetails.name ? <Profile details={summonerDetails}/> : <h1>Cargando</h1>}
        </div>
    )
}

export default Land;