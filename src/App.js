/* eslint-disable */
import React from 'react';
import MyHeader from './containers/header';
import PictureOfTheDay from './containers/pod';
import Input from './containers/inputDiv';
import { useState, useEffect } from 'react';






function App() {

    const [myurl, setUrl] = useState("");
    const [mytitle, settitle] = useState("");

    const todayDate = new Date().toLocaleDateString('fr-ca');
    const [mydate, setdate] = useState(todayDate);
    
    const [doesButtonClicked, setClick] = useState(false);
    
    document.onKeyDown = (event) => {
        if(event.key === "Enter")
            buttonClickHandeler();
    }
    async function GetDataFromAPI(inputDate)
    {
        const url = "https://api.nasa.gov/planetary/apod?api_key=f1H5xf6kUU4s8kQAXnPonTtPQ5v93S3SWHYdXvyS&&date=" + inputDate;
        const response = await fetch(url);

        // if current request is bad request sometimes picture is not available show the picture of previus day
        if(response.status === 400)
        {
            const prevDate = new Date(inputDate);
            prevDate.setDate(prevDate.getDate() - 1);
            const formattedDate = prevDate.toLocaleDateString('fr-ca');
            return GetDataFromAPI(formattedDate);
        }
        const data = await response.json();
        return data;
    }
    useEffect(() =>{
        GetDataFromAPI(mydate).then(data => {setUrl(data.url); settitle(data.title);});
    }, [doesButtonClicked])
    
    
    
    function dateChangeHandeler(event)
    {
        setdate(event.target.value);
    }

    function buttonClickHandeler()
    {
        setClick((prevValue) => !prevValue);
    }
    return (<div>
        <MyHeader />
        <PictureOfTheDay
            title = {mytitle}
            url = {myurl}
         />
        <Input
            value = {mydate}
            onChange = {dateChangeHandeler}
            onClick = {buttonClickHandeler}
        />
        
    </div>);
}

export default App;

