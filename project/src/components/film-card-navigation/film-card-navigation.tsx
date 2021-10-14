import { Link } from 'react-router-dom';
import { NAV_LINK_NAME, ROUTE_PATH } from '../../constants/constant';

type FilmCardNavigationProps = {
  id: string;
}

function FilmCardNavigation({id}: FilmCardNavigationProps): JSX.Element{
  return(
    <nav className="film-nav film-card__nav">
      <ul className="film-nav__list">
        <li className="film-nav__item film-nav__item--active">
          <Link to = {ROUTE_PATH.FILM_ID.replace(':id', id)} className="film-nav__link">{NAV_LINK_NAME.OVERVIEW}</Link>
        </li>
        <li className="film-nav__item">
          <Link to = {ROUTE_PATH.FILM_ID_DETAILS.replace(':id', id)} className="film-nav__link">{NAV_LINK_NAME.DETAILS}</Link>
        </li>
        <li className="film-nav__item">
          <Link to = {ROUTE_PATH.FILM_ID_REVIEW.replace(':id', id)} className="film-nav__link">{NAV_LINK_NAME.REVIEWS}</Link>
        </li>
      </ul>
    </nav>
  );
}

export default FilmCardNavigation;
