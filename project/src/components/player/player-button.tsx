import { Dispatch, SetStateAction } from 'react';
import { PLAYER_STATE } from '../../constants/constant';

type PlayerButtonProps = {
  type: string,
  onButtonClick: Dispatch<SetStateAction<boolean>>;
}

function PlayerButton({type, onButtonClick}: PlayerButtonProps): JSX.Element{
  switch(type){
    case PLAYER_STATE.PLAY:
      return (
        <button type="button" className="player__play"
          onClick = {() => {
            onButtonClick(false);
          }}
        >
          <svg viewBox="0 0 19 19" width="19" height="19">
            <use xlinkHref="#play-s"></use>
          </svg>
          <span>{PLAYER_STATE.PLAY}</span>
        </button>
      );
    case PLAYER_STATE.PAUSE:
      return (
        <button
          type="button"
          className="player__play"
          onClick = {() => {
            onButtonClick(true);
          }}
        >
          <svg viewBox="0 0 14 21" width="14" height="21">
            <use xlinkHref="#pause"></use>
          </svg>
          <span>{PLAYER_STATE.PAUSE}</span>
        </button>
      );
    case PLAYER_STATE.FULL_SCREEN:
      return (
        <button type="button" className="player__full-screen">
          <svg viewBox="0 0 27 27" width="27" height="27">
            <use xlinkHref="#full-screen"></use>
          </svg>
          <span>{PLAYER_STATE.FULL_SCREEN}</span>
        </button>
      );
    case PLAYER_STATE.EXIT:
      return (
        <button type="button" className="player__exit">{PLAYER_STATE.EXIT}</button>
      );
    default:
      return(
        <PlayerButton type = {PLAYER_STATE.PLAY} onButtonClick = {onButtonClick}/>
      );
  }
}

export default PlayerButton;
