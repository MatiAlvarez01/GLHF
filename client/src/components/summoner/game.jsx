import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom"
import { modeRef } from "../../refs";
import ItemImg from "../imgs/ItemImg";
import SpellImg from "../imgs/SpellImg";
import RuneImg from "../imgs/RuneImg";
import MiniomImg from "../imgs/MiniomImg";
import GoldImg from "../imgs/GoldImg";
import DateText from "../date/DateText";

const MainSection = styled.section`
    display: flex;
    flex-direction: row;
    align-content: center;
    align-items: center;
    justify-content: space-evenly;
    background-color: #99CEFF;
    border: solid 1px black;
    margin: 2px;

    &:hover {
        border: solid 2px #bfe870;
    }
`
const ChampImgDiv = styled.div`
    margin-left: 10px;
    width: 17%
`
const ChampImg = styled.img`
    border-radius: 65px;
    border: solid 2px #bfe870;
`
const ChampLvl = styled.span`
    position: relative;
    left: -40px;
    top: -6px;
    color: white;
    background-color: black;
    width: 15%;
    border-radius: 35px;
    padding: 2px;
    border: solid 2px #bfe870;
`
const ResultDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 10px;
    width: 15%;
`
const StatsDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px;
    text-align: center;
    padding: 10px;
    width: 40%;
`
const StatsDiv2 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 20px;
    width: 21%
`
const InnerStatDiv1 = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    text-align: center
`
const InnerStatDiv2 = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`
const ImgsDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: flex-start;
`
const GameResult = styled.span`
    font-size: 1.5rem;
`
const GameMode = styled.p`
 margin: 2px 0 18px 0;
`
const Kills = styled.p`
`
const Minioms = styled.p`
    margin-right: 1px;
`
const Gold = styled.p`
    margin-right: 1px
`
const ItemsDiv = styled.div`
`
const StyledLink = styled(Link)`
    color: black;
    text-decoration: none;
    &:focus, &:visited, &:link, &:active {
        text-decoration: none;
    };
`;


function Game({game, me}) {
    //const [me, setMe] = useState(game.participantsStats.find((stats) => stats.summonerName === summonerName))
    return(
        <StyledLink to={`/match/${game.matchId}`}>
            <MainSection>
                <ChampImgDiv>
                    <ChampImg src={`/championicon/${me.championName}.png`}/>
                    <ChampLvl>{me.champLevel}</ChampLvl>
                </ChampImgDiv>
                <ResultDiv>
                    <div>
                        {me.win ? <GameResult>VICTORIA</GameResult> : <GameResult>DERROTA</GameResult>}
                        <GameMode>{modeRef[game.gameMode]}</GameMode>
                    </div>
                    <ImgsDiv>
                        <div>
                            <SpellImg number={me.summoner1Id}/>
                            <SpellImg number={me.summoner2Id}/>
                        </div>
                        <div>
                            <RuneImg number={me.perks.styles[0].style}/>
                            <RuneImg number={me.perks.styles[1].style}/>
                        </div>
                    </ImgsDiv>
                </ResultDiv>
                <StatsDiv>
                        <ItemsDiv>
                            {me.item0 ? <ItemImg number={me.item0}/> : null}
                            {me.item1 ? <ItemImg number={me.item1}/> : null}
                            {me.item2 ? <ItemImg number={me.item2}/> : null}
                            {me.item3 ? <ItemImg number={me.item3}/> : null}
                            {me.item4 ? <ItemImg number={me.item4}/> : null}
                            {me.item5 ? <ItemImg number={me.item5}/> : null}
                            {me.item6 ? <ItemImg number={me.item6}/> : null}
                        </ItemsDiv>
                        <InnerStatDiv1>
                            <Kills>{`${me.kills} / ${me.deaths} / ${me.assists}`}</Kills>
                            <InnerStatDiv2>
                                <Minioms>{me.totalMinionsKilled + me.neutralMinionsKilled}</Minioms>
                                <div>
                                    <MiniomImg />
                                </div>
                            </InnerStatDiv2>
                            <InnerStatDiv2>
                                <Gold>{me.goldEarned}</Gold>
                                <div>
                                    <GoldImg />
                                </div>
                            </InnerStatDiv2>
                        </InnerStatDiv1>
                </StatsDiv>
                <StatsDiv2>
                    <p>{Math.floor(game.gameDuration / 60)} minutos</p>
                    <DateText unixTime={game.gameDate} />
                </StatsDiv2>
            </MainSection>
        </StyledLink>
    )
}

export default Game;