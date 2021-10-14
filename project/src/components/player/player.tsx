import { useState } from 'react';
import { PLAYER_STATE } from '../../constants/constant';
import { FilmDataList } from '../../types/types';
import PlayerButton from './player-button';

function Player({filmDataList}: FilmDataList): JSX.Element{
  const[isPlay, setPlay] = useState(true);
  // eslint-disable-next-line no-console
  console.log(isPlay);
  return(
    <div className="player">
      <video src="#" className="player__video" poster="img/player-poster.jpg"></video>
      <PlayerButton type = {PLAYER_STATE.EXIT} onButtonClick = {setPlay}/>
      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value="30" max="100"></progress>
            <div className="player__toggler" style={{left: '30%' }}>Toggler</div>
          </div>
          <div className="player__time-value">1:30:29</div>
        </div>

        <div className="player__controls-row">
          {isPlay ? <PlayerButton type = {PLAYER_STATE.PLAY} onButtonClick = {setPlay}/> : <PlayerButton type = {PLAYER_STATE.PAUSE} onButtonClick = {setPlay}/>}
          <div className="player__name">Transpotting</div>

          <PlayerButton type = {PLAYER_STATE.FULL_SCREEN} onButtonClick = {setPlay}/>
        </div>
      </div>
    </div>
  );
}

export default Player;
