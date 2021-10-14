import { NavLink } from 'react-router-dom';
import { BUTTON_NAME, ROUTE_PATH } from '../../constants/constant';
import { FilmData } from '../../types/types';

function FilmCardDesc(filmData: FilmData): JSX.Element{
  const newTo = {
    pathname: ROUTE_PATH.FILM_ID_ADD_REVIEW.replace(':id', filmData.id.toString()),
    state: {...filmData},
  };
  return(
    <div className="film-card__wrap">
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
          <NavLink to={newTo} className="btn film-card__button">{BUTTON_NAME.ADD_REVIEW}</NavLink>
        </div>
      </div>
    </div>
  );
}

export default FilmCardDesc;
