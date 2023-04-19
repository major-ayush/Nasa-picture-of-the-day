import React from 'react';

function Input(props) {
    const todayDate = new Date().toLocaleDateString('fr-ca');
    return (<div className="date">
        <h2 className='datePickerHeading'>Pick your date</h2>
        <input type = "date" min = "2000-01-01" max = {todayDate}
            value = {props.value}
            onChange = {(event) => props.onChange(event)}
            className='datePicker'
        />
        <br/>
        <button onClick = {() => props.onClick()} className='button'>See Picture</button>
    </div>);
}

export default Input;