import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import styled from "styled-components"
import Champion from "./champion"
import Game from "./game";
import ChampionByName from "../filters/championByName"
import ChampionByLevel from "../filters/championByLevel"
import ChampionByChest from "../filters/championByChest"
import ChampionByLastTimePlayed from "../filters/championByLastTimePlayed"
import { actSummonerName } from "../../action"

const MainSection = styled.section`
`
const ProfileDiv = styled.div`
    background-color: #150050    
`
const Name = styled.p`
    text-align: left;
    padding-left: 250px;
    padding-top: 70px;
    padding-bottom: 110px;
    font-size: 4rem;
    margin: 0;
    color: white;
    font-family: 'Fredoka One', cursive;
`
const Level = styled.p`
    position: absolute;
    top: 166px;
    left: 109px;
    color: white;
`
const Icon = styled.img`
    height: 150px;
    border-radius: 100px;
    position: absolute;
    top: 45px;
    left: 45px;
`
const Border = styled.img`
    height: 242px;
    position: absolute;
    top: 0;
    left: 0
`
const ProfileDataDiv = styled.div`
`
const ProfileImgsDiv = styled.div`
`
const DataSection = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
`
const ChampionsDiv = styled.div`
`
const MatchesDiv = styled.div`
    display: flex;
    flex-direction: column;
`
const FiltersDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    text-align: center;
    margin: 10px 0 10px 0;
`
const ButtonAct = styled.button`
    text-align: left;
    font-family: 'Fredoka One', cursive;
    margin: 0 0 15px 60px;
`
const MatchesTopDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`
const ButtonHistory = styled.button`
`
const HistoryP = styled.p`
`

function Profile({details}) {
    const dispatch = useDispatch();
    const { summonerNameParam } = useParams();
    var champions = useSelector(state => state.champions)
    const [loading, setLoading] = useState(false);
    const [check, setCheck] = useState(false);
    var games = []
    
    if (champions.length === 0) {
        champions = details.champions
    }
    if (details.games.length > 0) {
        games = details.games.slice(0, 10)
        games.sort(function(a, b) {
            if(a.gameDate > b.gameDate) {
                return -1
            }
            if(a.gameDate < b.gameDate) {
                return 1
            }
            return 0;
        })
    }
    
    let borderLevel;
    if (details.summonerLevel < 30) {
        borderLevel = 1;
    } else if (details.summonerLevel >= 30 && details.summonerLevel < 50) {
        borderLevel = 30;
    } else if (details.summonerLevel >= 50 && details.summonerLevel < 75) {
        borderLevel = 50;
    } else if (details.summonerLevel >= 75 && details.summonerLevel < 100) {
        borderLevel = 75;
    } else if (details.summonerLevel >= 100) {
        borderLevel = details.summonerLevel.toString()[0] * 100;
    }

    async function handleButtonActClick() {
        setLoading(true)
        console.log("Actualizando champ...")
        await dispatch(actSummonerName(summonerNameParam))
        setLoading(false)
        console.log("Champ actualizado!");
    }
    return (
        <MainSection>
            <ProfileDiv>
                <ProfileImgsDiv>
                    <Icon src={`/profileicon/${details.profileIconId}.png`}/>
                    <Border src={`/profileborder/Level_${borderLevel}.png`}/>
                </ProfileImgsDiv>
                <ProfileDataDiv>
                    <Level>{details.summonerLevel}</Level>
                    <Name>{details.name}</Name>
                    {loading ? <ButtonAct>Actualizando...</ButtonAct> : <ButtonAct onClick={handleButtonActClick}>Actualizar perfil</ButtonAct>}
                </ProfileDataDiv>
            </ProfileDiv>
            <DataSection>
                <ChampionsDiv>
                    <FiltersDiv>
                        <div style={{width: "25%"}}>
                            <ChampionByName />
                        </div>
                        <div style={{width: "25%"}}>
                            <ChampionByLevel />
                        </div>
                        <div style={{width: "25%"}}>
                            <ChampionByChest check={check} setCheck={setCheck}/>
                        </div>
                        <div style={{width: "25%"}}>
                            <ChampionByLastTimePlayed />
                        </div>
                    </FiltersDiv>
                    {champions.map((champion) => <Champion details={champion}/>)}
                </ChampionsDiv>
                <MatchesDiv>
                    <MatchesTopDiv>
                        <HistoryP>Ultimas 10 partidas:</HistoryP>
                        <ButtonHistory>Ver todo el historial</ButtonHistory>
                    </MatchesTopDiv>
                    {games.map((game) => <Game game={game} me={game.participantsStats.find((stats) => stats.summonerName === summonerNameParam)}/>)}
                </MatchesDiv>
            </DataSection>
        </MainSection>
    )
}

export default Profile;