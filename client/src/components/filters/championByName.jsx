import React from "react";
import styled from "styled-components";

function ChampionByName() {
    
    function handleInputChange(e) {
        console.log(e.target.value)
    }

    return (
        <form>
            <input 
                placeholder="Nombre de campeón"
                onChange={handleInputChange}
                name="championName"
            />
        </form>
    )
}

export default ChampionByName;