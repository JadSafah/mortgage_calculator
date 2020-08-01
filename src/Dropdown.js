import React, { useState } from 'react';

const Dropdown = (props) => {

    //state of dropdown toggle and value selected from list
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState("Select value...");

    //handle button click to dropdown the list and to extract clicked value from list
    const handleDropdownClick = () => setOpen(!open);
    const handleSelectionClick = (item) => setSelected(item.value);

    return (
        <div className="dd-wrapper">  
                <button className="dd-header" onClick={() => handleDropdownClick()}>
                    <div className="dd-header-title">{selected}</div>
                </button>
                {open &&
                    <ul className="dd-list">
                        {props.items.map(item => 
                            <li 
                                className="dd-list-items"
                                key={item.id}
                                onClick={() => {handleSelectionClick(item); handleDropdownClick();}}>
                                {item.value}
                            </li>
                        )}
                    </ul>
                }
            </div>
    )
}


export default Dropdown;