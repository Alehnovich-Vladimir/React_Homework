import './index.css'

const Square = ({ label, cssClass }) => {
    return (
        <div className={cssClass}>
           {label}
        </div> 
    )
}

export default Square