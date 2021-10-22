import React from "react";
import styled from "styled-components";
import { champRef, summonerSpellRef, positionRef } from "../../refs";

var MainSection = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    border-width: 3px;
    border-style: solid;
    border-image: 
    linear-gradient(
      to right, 
      red, 
      rgba(0, 0, 0, 0)
    ) 100 1;
    margin: 5px 0;
    color: white;
`
const SpellsDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 5px;
`
const ChampImgDiv = styled.div`
    margin-right: 30px;
    padding-left: 10px;
`
const InfoDiv = styled.div`
    width: 30%;
    text-align: left;
    margin-right: 10px;
`
const LaneDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 20%;
    text-align: center;
`
const ImgChamp = styled.img`
    border-radius: 70px;
    height: 100px;
    margin: 10px;
    border: solid 1px white;
`
const ImgSpell = styled.img`
    height: 35px;
`
const SummonerName = styled.p`
    font-family: 'Secular One', sans-serif;
    font-size: 25px;
    margin-bottom: 0;
`
const SummonerScore = styled.p`
    font-family: 'Secular One', sans-serif;
    font-size: 20px;
    margin-top: 0;
`
const SummonerLane = styled.p`
    font-family: 'Secular One', sans-serif;
    font-size: 20px;
`

function PlayerLeft({details, select, setSelect}) {

    function handleClickSummoner() {
        setSelect(!select)
    }

    return (
        <MainSection onClick={handleClickSummoner}>
            <SpellsDiv>
                <ImgSpell src={`/summonerspells/${summonerSpellRef[details.summoner1Id]}.png`} alt={`${summonerSpellRef[details.summoner1Id]}`}/>
                <ImgSpell src={`/summonerspells/${summonerSpellRef[details.summoner2Id]}.png`} alt={`${summonerSpellRef[details.summoner2Id]}`}/>
            </SpellsDiv>
            <ChampImgDiv>
                <ImgChamp src={`/championicon/${champRef[details.championId].replace(/ /g,'')}.png`}/>
            </ChampImgDiv>
            <InfoDiv>
                <SummonerName>{details.summonerName}</SummonerName>
                <SummonerScore>{`${details.kills} / ${details.deaths} / ${details.assists}`}</SummonerScore>
            </InfoDiv>
            <LaneDiv>
                <SummonerLane>{positionRef[details.teamPosition]}</SummonerLane>
            </LaneDiv>
        </MainSection>
    )
}

export default PlayerLeft;