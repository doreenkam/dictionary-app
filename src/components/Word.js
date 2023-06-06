import React from 'react';
import PlayCircleFilledOutlinedIcon from '@mui/icons-material/PlayCircleFilledOutlined';
import { useRef } from 'react';

export default function Word({ word, phonetic, audio }) {
  const ref = useRef();

  const playAudio = () => {
    ref.current.play();
  };

  return (
    <div className="word-container">
      <div>
        <h1 className="word-header">{word}</h1>
        <h3 className="word-phonetic">{phonetic}</h3>
      </div>
      <button onClick={playAudio} className="play-btn">
        <PlayCircleFilledOutlinedIcon style={{ fontSize: '50px' }} />
      </button>
      <audio ref={ref} src={audio} />
    </div>
  );
}
