import React, { useState } from 'react';

const Dropdown = (props) => {

    //state of dropdown toggle
    const [open, setOpen] = useState(false);

    //toggle the open state to either open or close the dropdown list
    const handleDropdownClick = () => setOpen(!open);

    return (
        <div className="dd-wrapper ">
            <div className="dd-title">{props.title}</div>
                <div className="dd-header" onClick={() => handleDropdownClick()}>
                    <div className="dd-header-title">
                        <p>{props.state.text}</p>
                    </div>
                    <div className="dd-header-arrow">{open
                        ? <i className="arrow up"></i> : <i className="arrow down"></i>
                        }
                    </div>
                </div>
                {open &&
                <div className="dd-list-wrapper">
                    <ul className="dd-list shadow">
                        {props.items.map(item => 
                            <li 
                                className="dd-list-items"
                                key={item.id}
                                onClick={() => {props.handleSelectionClick(item, props.type); handleDropdownClick();}}>
                                {item.text}
                            </li>
                        )}
                    </ul>
                </div>
                }
        </div>
    )
}


export default Dropdown;