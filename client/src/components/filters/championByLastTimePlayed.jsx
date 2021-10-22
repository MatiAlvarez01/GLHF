import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { useParams } from "react-router";
import styled from "styled-components"
import { filterChampionsByLastTimePlayed } from "../../action"

function ChampionByLastTimePlayed() {
    const dispatch = useDispatch()
    const { summonerNameParam } = useParams();
    const [order, setOrder] = useState("DESC")
    function handleClickButton() {
        if (order === "DESC") {
            setOrder("ASC")
            dispatch(filterChampionsByLastTimePlayed(summonerNameParam, order))
        } else {
            setOrder("DESC")
            dispatch(filterChampionsByLastTimePlayed(summonerNameParam, order))
        }
    }

    return (
        <div>
            <button onClick={handleClickButton}>Ultima vez usado</button>
        </div>
    )
}

export default ChampionByLastTimePlayed;