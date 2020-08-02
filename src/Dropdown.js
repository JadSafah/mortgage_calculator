import React, { useState } from 'react';

const Dropdown = (props) => {

    //state of dropdown toggle and value selected from list
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState("");

    //handle button click to dropdown the list and to extract clicked value from list
    const handleDropdownClick = () => setOpen(!open);

    return (
        <div className="dd-wrapper">
            <div className="dd-header" onClick={() => handleDropdownClick()}>
                <div className="dd-header-title">{selected}</div>
            </div> 
            {open &&
                <ul className="dd-list">
                    {props.items.map(item => 
                        <li 
                            className="dd-list-items"
                            key={item.id}
                            onClick={() => {props.handleSelectionClick(item, props.type); handleDropdownClick(); setSelected(item.text);}}>
                            {item.text}
                        </li>
                    )}
                </ul>
            }
        </div>
    )
}


export default Dropdown;