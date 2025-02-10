import React, { useState } from 'react';
import './dropdown.css';

const Dropdown = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="dropdown" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
            <button className="dropbtn">{title}</button>
            {isOpen && <div className="dropdown-content">{children}</div>}
        </div>
    );
};

export default Dropdown;
