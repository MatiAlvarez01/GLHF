import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import styled from "styled-components";
import { searchSummonerName } from "../../action";
import Profile from "./profile"
import { loadPhrase } from "../../refs";

const MainSection = styled.section`
    height: 100vh;
    background-color: #bfe870;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const PhraseP = styled.p`
    text-align: center;
    font-family: 'Fredoka One', cursive;
    font-size: 3rem;
    color: #293845;
`

function Land() {
    const dispatch = useDispatch();
    const { summonerNameParam } = useParams();
    const [phrase, setPhrase] = useState();
    const summonerDetails = useSelector(state => state.summonerDetails)

    useEffect(() => {
        setPhrase(loadPhrase[Math.floor(Math.random() * loadPhrase.length)])
        dispatch(searchSummonerName(summonerNameParam))
        return (() => {
            setPhrase("")
        })
    }, [summonerNameParam])
    
    return (
        <div>
            {summonerDetails.name ? <Profile details={summonerDetails}/> : 
            <MainSection>
                <div>
                    <PhraseP>{phrase}</PhraseP>
                </div>
            </MainSection>}
        </div>
    )
}

export default Land;