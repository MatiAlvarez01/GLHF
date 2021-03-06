import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import styled from "styled-components";
import { getMatchDetails, clearMatchDetails, getMatchStats, clearMatchStats } from "../../action";
import GameDetails from "./gameDetails";
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

function LandGame() {
    const dispatch = useDispatch();
    const { matchIdParam } = useParams();
    const [phrase, setPhrase] = useState();
    const matchDetails = useSelector(state => state.matchDetails)
    const matchStats = useSelector(state => state.matchStats)

    useEffect(() => {
        dispatch(getMatchDetails(matchIdParam))
        dispatch(getMatchStats(matchIdParam))
        setPhrase(loadPhrase[Math.floor(Math.random() * loadPhrase.length)])
        return(() => {
            dispatch(clearMatchDetails())
            dispatch(clearMatchStats())
            setPhrase("")
        })
    }, [])

    return (
        <div>
            {matchDetails.participantsIds ? <GameDetails details={matchDetails} stats={matchStats}/> : 
            <MainSection>
                <div>
                    <PhraseP>{phrase}</PhraseP>
                </div>
            </MainSection>}
        </div>
    )
}

export default LandGame;