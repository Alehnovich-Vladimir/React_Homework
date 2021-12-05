import { useState } from 'react';
import './index.css'

const Counter = () => {

    let [index, setIndex] = useState(0)

    const onSubtractClick = () => {
        index <= 0 ? setIndex(0) : setIndex(index - 1)
    }

    const onAddClick = () => {
        setIndex(index + 1);
    }

    return (
        <div className="counter">
            <button onClick={onSubtractClick}>-</button>
            <span>{index}</span>
            <button onClick={onAddClick}>+</button>
        </div>
    );
}

export default Counter