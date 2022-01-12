import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './index.css';


const figures = ['square', 'circle'];
const colors = ['red', 'blue', 'green', 'yellow', 'orange'];

const Navbar = () => {

    const [type, setType] = useState('square');
    const [color, setColor] = useState('red');

    const history = useHistory();

    const handleClickType = (type) => {
        setType(type);
        history.push(`/figure/${type}/${color}`);
    };

    const handleClickColor = (color) => {
        setColor(color);
        history.push(`/figure/${type}/${color}`);
    };

    return (
        <div className="navbar">
            <div className="figures">
                {figures.map((element) => {
                    return (
                        <button
                            key={element}
                            onClick={() => { handleClickType(element) }}>
                            {element}
                        </button>
                    )
                })}
            </div>
            <div className="colors">
                {colors.map((element) => {
                    return (
                        <button
                            key={element}
                            onClick={() => { handleClickColor(element) }}
                            style={{ backgroundColor: element }}>
                            {element}
                        </button>
                    )
                })}
            </div>
        </div>
    )
};

export default Navbar