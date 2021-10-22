import React from "react";
import styled from "styled-components";

const Img = styled.img`
    height: 50px;
    border: solid 1px white;
`

function ItemImg({number}) {
    return (
        <Img src={`/itemicon/${number}.png`} alt={`Item ${number}`}/>
    )
}

export default ItemImg;