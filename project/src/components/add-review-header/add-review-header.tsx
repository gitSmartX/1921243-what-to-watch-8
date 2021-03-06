import { Link } from 'react-router-dom';
import { ROUTE_PATH, SITE_NAME } from '../../constants/constant';
import { FilmData } from '../../types/types';
import Logo from '../logo/logo';
import UserBlock from '../user-block/user-block';

function AddReviewHeader(filmData: FilmData): JSX.Element{
  const id = filmData.id.toString();
  return(
    <div className="film-card__header">
      <div className="film-card__bg">
        <img src={filmData.backgroundImage} alt={filmData.name}/>
      </div>
      <h1 className="visually-hidden">{SITE_NAME}</h1>
      <header className="page-header">
        <Logo />
        <nav className="breadcrumbs">
          <ul className="breadcrumbs__list">
            <li className="breadcrumbs__item">
              <Link to={ROUTE_PATH.FILM_ID.replace(':id', id)} className="breadcrumbs__link">{filmData.name}</Link>
            </li>
            <li className="breadcrumbs__item">
              <Link to={ROUTE_PATH.FILM_ID_ADD_REVIEW.replace(':id', id)} className="breadcrumbs__link">Add review</Link>
            </li>
          </ul>
        </nav>

        <UserBlock />
      </header>

      <div className="film-card__poster film-card__poster--small">
        <img src={filmData.posterImage} alt= {`${filmData.name} poster`} width="218" height="327" />
      </div>
    </div>
  );
}

export default AddReviewHeader;
