import React, {useState} from 'react';
import arrayNames from './names.json';
import './index.css'

function Modifying() {
    const [personList, setPersonList] = useState(['Evgenia','Vova', 'Kirill', 'Daria'])

    function addNewPerson() {
        const newPerson = arrayNames[Math.floor(Math.random() * 13)];
        const newArrayNames = [...personList, newPerson]
        setPersonList(newArrayNames)
    }

    const names = personList.map((person, index) => {
        return (
            <div className="names" key={index}>{person}</div>  
        )
    })

    return (
        <>
            {names}
            <button className="new-name" onClick={addNewPerson}>Add name</button>
        </>
    )
}

export default Modifying