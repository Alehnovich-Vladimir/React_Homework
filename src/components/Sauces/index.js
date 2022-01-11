import React from 'react';
import { useState} from 'react';
import './index.css';

const SAUCES = [
    {
        image: 'https://app.pzzby.com/uploads/photos/jZIGfgJfBy.jpg',
        name: "Пармеджано",
        price: 0.8,
        id: 0,
    },
    {
        image: 'https://app.pzzby.com/uploads/photos/7GvxxQcWms.jpg',
        name: "Терияки",
        price: 0.9,
        id: 1,
    },
    {
        image: 'https://app.pzzby.com/uploads/photos/LNO0Qbtn7F.jpg',
        name: "Чесночный",
        price: 0.75,
        id: 2,
    },{
        image: 'https://app.pzzby.com/uploads/photos/0S2TNZVk5X.jpg',
        name: "Сырный",
        price: 0.85,
        id: 3,
    },


]

const Sauces = () => {

    const [total, setTotal] = useState(0);

    //1
    const onChangeSauceCount = (count) => {
        setTotal (total + count);
    }

    return (
        <div className="page page-sauces">
            <h2>Choose sauces</h2>
            <h2>Итого: {total.toFixed(2)} usd</h2>
            <div className="list">
                {SAUCES.map(sauce => {
                    return (
                        <Sauce
                         key={sauce.id}
                         image={sauce.image}
                         name={sauce.name}
                            price={sauce.price}
                            // peredacha function cherez props
                         onChangeSauceCount={onChangeSauceCount}
                     />
                    )
                })}
            </div>
            <button onClick={() => console.log(total)}>Agree</button>
        </div>
    )
}

export default Sauces;
                                                        // 3 priem function
const Sauce = ({ image, name = "no name", price = 0, onChangeSauceCount }) => {

    const [count, setCount] = useState(0);

    const onPlus = () => {
        const newCount = count + 1;
        setCount(newCount);
        // 4 vyzov function
        onChangeSauceCount(price)
    }

    const onMinus = () => {
        if (!count) { return }
        setCount(count -1 );
        onChangeSauceCount(-price)
    }

    return (
        <div className="sauce">
            <img src={image} alt={name} />
            <h4>Sause {name}</h4>
            <h5>{price} usd</h5>

            <div className="picker">
                <button onClick={onMinus}> - </button>
                <strong>{count}</strong>
                <button onClick={onPlus}> + </button>
            </div>
        </div>
    )
}