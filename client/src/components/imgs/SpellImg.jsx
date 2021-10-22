import React from "react";
import styled from "styled-components";
import { summonerSpellRef } from "../../refs";

const Img = styled.img`
    margin: 1px;
    height: 40px;
`

function SpellImg({number}) {
    return (
        <Img src={`/summonerspells/${summonerSpellRef[number]}.png`} alt={`${summonerSpellRef[number]}`}/>
    )
}

export default SpellImg;