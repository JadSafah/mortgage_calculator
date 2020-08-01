import React from 'react';

function InputForm(props) {

    return (
        <form>
            <label>
                {props.title}
                <input type="text" onChange={(e) => props.handleChange(props.type, e)} />
            </label>
        </form>
    );
}

export default InputForm;