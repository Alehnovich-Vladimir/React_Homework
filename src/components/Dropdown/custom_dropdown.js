import React, { useState } from 'react';
import './index.css'

function Dropdown () {
    const [isActive, setIsActive] = useState(false)
    const options = ['English', 'Spanish', 'Russian', 'Portuguese', 'German'];
    return (
        <div className="dropdown">
            <div className="dropdown-btn" onClick={() =>
                setIsActive(!isActive)}>
                 Choose language
                <span className="caret">🔽</span>
            </div>
            {isActive && (
                <div className="dropdown-content">
                    {options.map(option => (
                        <div onClick={() => {setIsActive(false)}} className="dropdown-item">
                            {option}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
export default Dropdown

