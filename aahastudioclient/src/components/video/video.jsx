import React from 'react';

const Video = () => {
  return (
    <div className="video-container">
      <video className="video-player" autoPlay muted loop>
        <source src='/Users/sachinoo/Desktop/codebase/AahaStudio/aahastudioclient/aahastudioclient/src/VdieoFile/AAHA RECAP-2022.mp4' type="video/mp4" />
      </video>
    </div>
  );
};

export default Video;
