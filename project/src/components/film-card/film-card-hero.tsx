import { Link} from 'react-router-dom';
import { BUTTON_NAME, ROUTE_PATH, SITE_NAME } from '../../constants/constant';
import { FilmData } from '../../types/types';
import Logo from '../logo/logo';
import UserBlock from '../user-block/user-block';

function FilmCardHero(filmData: FilmData): JSX.Element{
  const id = filmData.id.toString();
  return(
    <div className="film-card__hero">
      <div className="film-card__bg">
        <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
      </div>

      <h1 className="visually-hidden">{SITE_NAME}</h1>

      <header className="page-header film-card__head">
        <Logo />
        <UserBlock />
      </header>
      <div className="film-card__wrap">
        <div className="film-card__desc">
          <h2 className="film-card__title">{filmData.name}</h2>
          <p className="film-card__meta">
            <span className="film-card__genre">{filmData.genre}</span>
            <span className="film-card__year">{filmData.released}</span>
          </p>

          <div className="film-card__buttons">
            <Link to = {ROUTE_PATH.PLAYER_ID.replace(':id', id)} className="btn film-card__button">
              <svg viewBox="0 0 19 19" width="19" height="19">
                <use xlinkHref="#play-s"></use>
              </svg>
              <span>{BUTTON_NAME.PLAY}</span>
            </Link>
            <Link to = {ROUTE_PATH.MYLIST} className="btn film-card__button">
              <svg viewBox="0 0 19 20" width="19" height="20">
                <use xlinkHref="#add"></use>
              </svg>
              <span>{BUTTON_NAME.MY_LIST}</span>
            </Link>
            <Link to={ROUTE_PATH.FILM_ID_ADD_REVIEW.replace(':id', id)} className="btn film-card__button">{BUTTON_NAME.ADD_REVIEW}</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilmCardHero;
