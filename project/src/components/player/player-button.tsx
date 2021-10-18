import { Dispatch, SetStateAction } from 'react';
import { Link, useParams } from 'react-router-dom';
import { PLAYER_BUTTON_TYPE, ROUTE_PATH } from '../../constants/constant';

type PlayerButtonProps = {
  type: string,
  onButtonClick: Dispatch<SetStateAction<boolean>>;
}

function PlayerButton({type, onButtonClick}: PlayerButtonProps): JSX.Element{
  const {id} = useParams<{id: string}>();
  switch(type){
    case PLAYER_BUTTON_TYPE.PLAY:
      return (
        <button type="button" className="player__play"
          onClick = {() => {
            onButtonClick(false);
          }}
        >
          <svg viewBox="0 0 19 19" width="19" height="19">
            <use xlinkHref="#play-s"></use>
          </svg>
          <span>{PLAYER_BUTTON_TYPE.PLAY}</span>
        </button>
      );
    case PLAYER_BUTTON_TYPE.PAUSE:
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
          <span>{PLAYER_BUTTON_TYPE.PAUSE}</span>
        </button>
      );
    case PLAYER_BUTTON_TYPE.FULL_SCREEN:
      return (
        <button type="button" className="player__full-screen">
          <svg viewBox="0 0 27 27" width="27" height="27">
            <use xlinkHref="#full-screen"></use>
          </svg>
          <span>{PLAYER_BUTTON_TYPE.FULL_SCREEN}</span>
        </button>
      );
    case PLAYER_BUTTON_TYPE.EXIT:
      return (
        <Link to={ROUTE_PATH.FILM_ID.replace(':id', id)} className="player__exit" >
          {PLAYER_BUTTON_TYPE.EXIT}
        </Link>
      );
    default:
      return(
        <PlayerButton type = {PLAYER_BUTTON_TYPE.PLAY} onButtonClick = {onButtonClick}/>
      );
  }
}

export default PlayerButton;
