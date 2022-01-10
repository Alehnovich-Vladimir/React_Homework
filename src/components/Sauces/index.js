import React from 'react';
import { useState} from 'react';
import './index.css';

const Sauces = () => {
    const [total, setTotal] = useState(0);

    return (
        <div>
            <div>Choose sauces</div>

            <div className="list">
                <Sauce
                    image={"https://app.pzzby.com/uploads/photos/jZIGfgJfBy.jpg"}
                    name={"Пармеджано"}
                    price={0.8}
                />
                  <Sauce
                    image={"https://app.pzzby.com/uploads/photos/jZIGfgJfBy.jpg"}
                    name={"Пармеджано"}
                    price={0.8}
                />
            </div>
            <button onClick={() => console.log(total)}>Agree</button>
        </div>
    )
}

export default Sauces;

const Sauce = ({ image, name = "no name", price = 0 }) => {
    return (
        <div className="sauce">
            <img src={image} alt={name} />
            <h4>Sause {name}</h4>
            <h5>{price} usd</h5>
        </div>
    )
}