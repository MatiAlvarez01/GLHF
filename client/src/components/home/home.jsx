import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom";
import styled from "styled-components"
import { searchSummonerName } from "../../action";

const HomeSection = styled.section`
    background-color: #000000;
    height: 100vh;
`
const TitleDiv = styled.div`
    padding-top: 5%;
    text-align: center;
    background-color: #bfe870;
`
const Title = styled.p`
    margin: 0;
    font-family: 'Fredoka One', cursive;
    font-size: 10rem;
    color: #293845;
`
const FormDiv = styled.div`
    background-color: #bfe870;
    border-radius: 0 0 0 200px;
`
const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 5%;
`
// const Label = styled.label`
// `
const Input = styled.input`
    margin: 1%;
    text-align: center;
    font-size: 1.5rem;
    border-radius: 25px;
    border: none;
    padding: 4px 25px;
    color: #293845;
`
const Button = styled.button`
    padding: 10px 25px;
    font-size: 1rem;
    border-radius: 25px;
    border: solid 1px #293845;
    background-color: #bfe870;
    color: #293845;
    :hover {
        border: solid 1px #293845;
        background-color: #293845;
        color: white;
    }
`
const StatsDiv = styled.div`
    background-color: #293845;
    height: 58vh;
    border-radius: 0 200px 0 0;
`
const BackgroundColor1 = styled.div`
    background-color: #293845;
`
const BackgroundColor2 = styled.div`
    background-color: #bfe870;
`

function Home() {
    const dispatch = useDispatch();
    const [summonerName, setSummonerName] = useState("");
    
    function handleChangeInput(e) {
        setSummonerName(e.target.value)
    }

    function handleSubmitForm(e) { //No esta entrando por el Link
        console.log("handleSubmitForm")
        e.preventDefault();
        dispatch(searchSummonerName(summonerName))
        setSummonerName("")
    }
    return (
        <HomeSection>
            <TitleDiv>
                <Title>GLHF</Title>
            </TitleDiv>
            <BackgroundColor1>
                <FormDiv>
                    <Form onSubmit={handleSubmitForm}>
                        {/* <Label>Summoner Name</Label> */}
                        <Input 
                            name="summonerName"
                            onChange={handleChangeInput}
                            value={summonerName}
                            placeholder="Nombre de Invocador"
                        />
                        <Link to={`/summoner/${summonerName}`}>
                            <Button type="submit">GLHF</Button>
                        </Link>
                    </Form>
                </FormDiv>
            </BackgroundColor1>
            <BackgroundColor2>
                <StatsDiv>

                </StatsDiv>
            </BackgroundColor2>
        </HomeSection>
    )
}

export default Home;