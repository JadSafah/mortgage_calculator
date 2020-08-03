import React from 'react';
import { MdError } from 'react-icons/md';

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
            {props.error && 
            <div className="error-icon"><MdError /></div>}
        </div>
    );
}

export default InputForm;