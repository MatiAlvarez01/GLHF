import React from "react";
import styled from "styled-components";
import { runesRef } from "../../refs";

const Img = styled.img`
    margin-left: 2px;
    height: 20px;
`

function RuneImg({number}) {
    return (
        <Img src={`/runesicon/${runesRef[number]}.png`} alt={runesRef[number]}/>
    )
}

export default RuneImg;