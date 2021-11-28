import './App.css';

const VideoTag = ({ type, id }) => {
    return (
        <span className="video-tag" id={id}>
            {type}
        </span>  
    );
}


export default VideoTag;
