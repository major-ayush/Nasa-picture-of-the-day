import React, { useEffect, useState } from 'react'

function PictureOfTheDay(props)
{
    
    return (<div className = "pod">
        <div >
        <h2 className='podTitle'>{props.title}</h2>
        <img src = {props.url} alt = "Picture of the day" className = "image"/>
        </div>
        
    </div>);
}

export default PictureOfTheDay;