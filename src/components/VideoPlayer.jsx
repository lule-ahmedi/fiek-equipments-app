import React from 'react';
import ReactPlayer from 'react-player';

const VideoPlayer = ({ section }) => (
  <div className="section-video">
    <ReactPlayer
      url={section.video}
      controls
      config={{ youtube: { playerVars: { showinfo: 1 } } }} />
  </div>
);

export default VideoPlayer;

