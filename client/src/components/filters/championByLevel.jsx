import React from "react"
import { useDispatch } from "react-redux"
import { useParams } from "react-router";
import { filterChampionsByLevel } from "../../action"
import styled from "styled-components"

function ChampionByLevel() {
    const dispatch = useDispatch()
    const { summonerNameParam } = useParams();

    function handleSelect(e) {
        dispatch(filterChampionsByLevel(summonerNameParam, e.target.value))
    }

    return (
        <div>
            <select name="champLevel" onChange={handleSelect}>
                <option value="all">Todos</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
            </select>
        </div>
    )
}

export default ChampionByLevel;