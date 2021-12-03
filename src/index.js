import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import VideoTag from './VideoTag';
import Text from './Text';

ReactDOM.render(
  <React.StrictMode>
    <VideoTag text="" />
    <Text text="Regular text" fontSize="1.5em"/>
    <Text text="Huge header" fontSize="3.5em"/>
    <Text text="Danger notification" color="red" fontSize="1.5rem"/>    
    <Text text="Underlined text" fontSize="2.5rem" underline={true}/>
  </React.StrictMode>,
  document.getElementById('root')
);

