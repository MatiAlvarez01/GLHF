import React from "react";
import styled from "styled-components";
import { champRef } from "../../refs";
import DateText from "../date/DateText";
import ChampImg from "../imgs/ChampImg";

const MainSection = styled.section`
    background-color: #99CEFF;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    border: solid 1px black;
    margin: 2px;
    text-align: center;
`
const Name = styled.p`
`
const Level = styled.p`
`
const PointsNextLevel = styled.p`
`
const LastTimePlayed = styled.p`
`
const Chest = styled.p`
`
const Div1 = styled.div`
    width: 25%;
    border: solid 1px;
    border-style: none solid none none;
`
const Div2 = styled.div`
    width: 25%;
    border: solid 1px;
    border-style: none solid none none;
`
const Div3 = styled.div`
    width: 25%;
    border: solid 1px;
    border-style: none solid none none;
`
const Div4 = styled.div`
    width: 25%;
`
function Champion({details}) {
    const numFormat = new Intl.NumberFormat('de-DE')
    return (
        <MainSection>
            <Div1>
                <ChampImg number={details.championId}/>
            </Div1>
            <Div2>
                <Name>{champRef[details.championId]}</Name>
                <Level>Nivel: {details.championLevel}</Level>
                {details.championPointsUntilNextLevel === 0 ? <PointsNextLevel>Nivel maximo alcanzado</PointsNextLevel> : <PointsNextLevel>Prox nivel en {numFormat.format(details.championPointsUntilNextLevel)} puntos</PointsNextLevel>}
            </Div2>
            <Div3>
                <Chest>{details.chestGranted ? "Cofre no disponible" : "Cofre disponible"}</Chest>
            </Div3>
            <Div4>
                <LastTimePlayed>Ultima vez jugado:</LastTimePlayed>
                <DateText unixTime={details.lastPlayTime}/>
            </Div4>
        </MainSection>
    )
}

export default Champion;
