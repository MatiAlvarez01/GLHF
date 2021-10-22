import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import PlayerLeft from "./playerLeft";
import PlayerRight from "./playerRigth";

const modeRef = {0: "Partida Personalizada", 420: "Clasificatoria Solo/Dúo", 430: "Normal", 440: "Clasificatoria Flexible", 450: "ARAM", 700: "Clash", 900: "URF", 
1020: "Uno para Todos", 2000: "Tutorial 1", 2010: "Tutorial 2", 2020: "Tutorial 3"}

var MainSection = styled.section`
    display: flex;
    flex-direction: row;
`
const Team100Section = styled.section`
    width: 25%;
`
const DetailsSection = styled.section`
    width: 50%;
`
const Team200Section = styled.section`
    width: 25%;
`
const VolverButton = styled.button`
    position: absolute;
    top: 15px;
    left: 15px;
`
const WinLooseP = styled.p`
    font-family: 'Secular One', sans-serif;
    font-size: 25px;
    text-align: center;
`
const MatchDetails = styled.div`
    text-align: center;
    font-family: 'Secular One', sans-serif;
`
const StatsDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
`
const Team100StatsDiv = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    font-family: 'Secular One', sans-serif;
`
const Team200StatsDiv = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    font-family: 'Secular One', sans-serif;
`
const VsDiv = styled.div`
    display: flex;
    flex-direction: column;
    font-family: 'Secular One', sans-serif;
`
const VsP = styled.p`
    text-align: center;
`

function GameDetails({details, stats}) {
    const history = useHistory();
    const [team100, setTeam100] = useState(details.participantsStats.slice(0, 5))
    const [team200, setTeam200] = useState(details.participantsStats.slice(5, 10))
    const [select, setSelect] = useState(false)
    if (select === false) {
        MainSection = styled.section`
        background-image: url("/backgroundGameDetails2.png");
        background-position-x: center;
        background-size: contain;
        height: 100vh;
        display: flex;
        flex-direction: row;
        align-items: center;
        color: white;
        `
    }

    var a = new Date(details.gameDate);
    var months = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours() < 10 ? `0${a.getHours()}` : a.getHours();
    var min = a.getMinutes() < 10 ? `0${a.getMinutes()}` : a.getMinutes();
    var time = `${date} ${month} ${year} - ${hour}:${min}hrs`

    console.log("MATCH DETAILS: ", details)

    return (
        <MainSection>
            <VolverButton onClick={() => history.goBack()}>Volver</VolverButton>
            <Team100Section>
                <WinLooseP>{details.participantsStats[0].win ? "Victoria" : "Derrota"}</WinLooseP>
                {team100 ? team100.map(player => <PlayerLeft details={player} select={select} setSelect={setSelect}/>) : null}
            </Team100Section>
            <DetailsSection>
                <MatchDetails>
                    <p>{modeRef[details.gameMode]}</p>
                    <p>{time}</p>
                    <p>{Math.floor(details.gameDuration / 60)} minutos</p>
                    <p>Version: {details.gameVersion}</p>
                </MatchDetails>
                <StatsDiv>
                    <Team100StatsDiv>
                        <p>{stats.scoreBlue}</p>
                        <p>{stats.goldBlue}</p>
                        <p>{stats.baronBlue}</p>
                        <p>{stats.dragonBlue}</p>
                        <p>{stats.objStolenBlue}</p>
                        <p>{stats.totalDamageBlue}</p>
                        <p>{stats.totalCCBlue}</p>
                        <p>{stats.visionScoreBlue}</p>
                        <p>{stats.wardsBlue}</p>
                        <p>{stats.torresBlue}</p>
                        <p>{stats.inhiBlue}</p>
                    </Team100StatsDiv>
                    <VsDiv>
                        <VsP>K / D / A</VsP>
                        <VsP>Oro</VsP>
                        <VsP>Barons</VsP>
                        <VsP>Dragones</VsP>
                        <VsP>Objetivos robados</VsP>
                        <VsP>Daño total</VsP>
                        <VsP>CC total</VsP>
                        <VsP>Puntaje de Vision</VsP>
                        <VsP>Wards</VsP>
                        <VsP>Torres destruidas</VsP>
                        <VsP>Inhibidores destruidos</VsP>
                    </VsDiv>
                    <Team200StatsDiv>
                        <p>{stats.scoreRed}</p>
                        <p>{stats.goldRed}</p>
                        <p>{stats.baronRed}</p>
                        <p>{stats.dragonRed}</p>
                        <p>{stats.objStolenRed}</p>
                        <p>{stats.totalDamageRed}</p>
                        <p>{stats.totalCCRed}</p>
                        <p>{stats.visionScoreRed}</p>
                        <p>{stats.wardsRed}</p>
                        <p>{stats.torresRed}</p>
                        <p>{stats.inhiRed}</p>
                    </Team200StatsDiv>
                </StatsDiv>
            </DetailsSection>
            <Team200Section>
                <WinLooseP>{details.participantsStats[9].win ? "Victoria" : "Derrota"}</WinLooseP>
                {team200 ? team200.map(player => <PlayerRight details={player} select={select} setSelect={setSelect}/>) : null}
            </Team200Section>
        </MainSection>
    )
}

export default GameDetails;