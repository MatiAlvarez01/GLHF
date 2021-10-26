import React, { useEffect, useState, } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import styled from "styled-components";
import { loadPhrase } from "../../refs";
import { getAllGames, clearGames } from "../../action";
import AllGames from "./allGames";

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

function LandHistory() {
    const dispatch = useDispatch();
    const { summonerNameParam } = useParams();
    const [phrase, setPhrase] = useState();
    const games = useSelector(state => state.games)

    useEffect(() => {
        setPhrase(loadPhrase[Math.floor(Math.random() * loadPhrase.length)])
        dispatch(getAllGames(summonerNameParam))
        return (() => {
            setPhrase("")
            dispatch(clearGames())
        })
    }, [summonerNameParam])

    return (
        <div>
            {games.length > 0 ? <AllGames games={games}/> : 
            <MainSection>
                <div>
                    <PhraseP>{phrase}</PhraseP>
                </div>
            </MainSection>}
        </div>
    )
}

export default LandHistory;