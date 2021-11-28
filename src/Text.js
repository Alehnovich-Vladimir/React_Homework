import './App.css'

const Text = ({ text, fontSize, color, underline }) => {
    return (
        <div className="text" style={{ fontSize: fontSize, color: color, textDecoration: underline ? "underline" : "none" }}>
            {text}
        </div> 
    )
}

export default Text