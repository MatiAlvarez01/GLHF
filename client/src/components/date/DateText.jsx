import React from "react";
import styled from "styled-components";

const DateP = styled.p`
`

function DateText({unixTime}){
    var a = new Date(unixTime);
    var months = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours() < 10 ? `0${a.getHours()}` : a.getHours();
    var min = a.getMinutes() < 10 ? `0${a.getMinutes()}` : a.getMinutes();
    var time = `${date} ${month} ${year} - ${hour}:${min}hrs`

    return (
        <DateP>{time}</DateP>
    )
}

export default DateText;