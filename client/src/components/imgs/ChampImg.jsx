import React from "react";
import styled from "styled-components";
import { champRef } from "../../refs";

const Img = styled.img`
`

function ChampImg({number}) {
    return (
        <Img src={`/championicon/${champRef[number].replace(/ /g,'')}.png`}/>
    )
}

export default ChampImg;