type ButtonType = {
  type: string
}

enum STATE {
  Play = 'Play',
  Pause = 'Pause'
}

function PlayerButton({type}: ButtonType): JSX.Element{
  switch(type){
    case STATE.Play:
      return (
        <button type="button" className="player__play">
          <svg viewBox="0 0 19 19" width="19" height="19">
            <use xlinkHref="#play-s"></use>
          </svg>
          <span>Play</span>
        </button>
      );
    case STATE.Pause:
      return (
        <button type="button" className="player__play">
          <svg viewBox="0 0 14 21" width="14" height="21">
            <use xlinkHref="#pause"></use>
          </svg>
          <span>Pause</span>
        </button>
      );
    default:
      return(
        <button type="button" className="player__play">
          <svg viewBox="0 0 19 19" width="19" height="19">
            <use xlinkHref="#play-s"></use>
          </svg>
          <span>Play</span>
        </button>
      );
  }
}

export default PlayerButton;
