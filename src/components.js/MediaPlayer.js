import React, { useState } from 'react';

const Player = ({ episode }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = React.createRef();

  const handlePlay = () => {
    audioRef.current.play();
    setIsPlaying(true);
  };

  const handlePause = () => {
    audioRef.current.pause();
    setIsPlaying(false);
  };

  return (
    <div>
      <audio ref={audioRef} src={episode.audioUrl} />
      <button onClick={isPlaying ? handlePause : handlePlay}>{isPlaying ? 'Pause' : 'Play'}</button>
    </div>
  );
};

export default Player;
