import { BUTTON_NAME } from '../../constants/constant';
import { FilmData } from '../../types/types';

function FilmCardMain(filmData: FilmData): JSX.Element{
  return(
    <div className="film-card__wrap">
      <div className="film-card__info">
        <div className="film-card__poster">
          <img src={filmData.posterImage} alt= {`${filmData.name} poster`} width="218" height="327" />
        </div>

        <div className="film-card__desc">
          <h2 className="film-card__title">{filmData.name}</h2>
          <p className="film-card__meta">
            <span className="film-card__genre">{filmData.genre}</span>
            <span className="film-card__year">{filmData.released}</span>
          </p>

          <div className="film-card__buttons">
            <button className="btn btn--play film-card__button" type="button">
              <svg viewBox="0 0 19 19" width="19" height="19">
                <use xlinkHref="#play-s"></use>
              </svg>
              <span>{BUTTON_NAME.PLAY}</span>
            </button>
            <button className="btn btn--list film-card__button" type="button">
              <svg viewBox="0 0 19 20" width="19" height="20">
                <use xlinkHref="#add"></use>
              </svg>
              <span>{BUTTON_NAME.MY_LIST}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilmCardMain;
