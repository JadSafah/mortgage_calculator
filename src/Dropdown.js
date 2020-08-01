import React, { useState } from 'react';

function Dropdown({items}) {
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState("Select an item...");
    const handleDropdownClick = () => setOpen(!open);
    const handleSelectionClick = (item) => setSelected(item.item.value);

    return (
        <div className="dd-wrapper">    
            <button className="dd-header" onClick={() => handleDropdownClick()}>
                <div className="dd-header-title">{selected}</div>
            </button>
            {open &&
                <ul className="dd-list">
                    {items.map(item => 
                    <li 
                        className="dd-list-items" 
                        key={item.id}
                            onClick={() => {
                                handleSelectionClick({item});
                                handleDropdownClick();
                            }}>
                                {item.value}
                        
                    </li>)}
                </ul>
            }
        </div>
    )
}

export default Dropdown;