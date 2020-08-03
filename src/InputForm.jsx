import React from 'react';

function InputForm(props) {

    return (
        <div className="form-wrapper">
            <div className="input-title">{props.title}</div>
            {props.error ? 
            <input 
                className="input-header error"
                type="text" 
                value={props.state}
                onChange={(e) => props.handleChange(props.type, e)} /> :
            <input 
                className="input-header" 
                type="text" 
                value={props.state}
                onChange={(e) => props.handleChange(props.type, e)} />
            }
        </div>
    );
}

export default InputForm;