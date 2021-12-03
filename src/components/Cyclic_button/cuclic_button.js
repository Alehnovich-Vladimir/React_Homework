import { useState } from 'react';
import './index.css'

const arrayIcons = ['❎', '🔁', '🔂']
const ButtonRepeat = ({ className }) => {

    const [index, setIndex] = useState(0)

    const onButtonClick = () => {
        setIndex(index === 2 ? 0 : index +1)
    }

    return (
		<button className={className} onClick={onButtonClick}>
			{arrayIcons[index]}
		</button>
	);
}

export default ButtonRepeat