import React from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import styled from "styled-components";
import { filterChampionsByChest, getAllChampions } from "../../action";

function ChampionByChest({check, setCheck}) {
    const { summonerNameParam } = useParams();
    const dispatch = useDispatch();

    function handleCheckChange() {
        if(!check) {
            dispatch(filterChampionsByChest(summonerNameParam, check))
            setCheck(true)
        } else {
            dispatch(getAllChampions(summonerNameParam))
            setCheck(false)
        }
    }

    return (
        <div style={{
            color: "#99CEFF"}}>
            <label>
                <input 
                    type="checkbox"
                    onChange={handleCheckChange}
                />
            Cofre disponible
            </label>
        </div>
    )
}

export default ChampionByChest;