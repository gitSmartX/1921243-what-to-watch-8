import { Link } from 'react-router-dom';
import { Genre } from '../../types/types';
import { ROUTE_PATH } from '../app/constant';

function CatalogGenre({name, isActive}: Genre): JSX.Element {
  if(isActive) {
    return(
      <li className="catalog__genres-item catalog__genres-item--active">
        <Link to={ROUTE_PATH.ROOT} className="catalog__genres-link">{name}</Link>
      </li>
    );
  }
  else {
    return(
      <li className="catalog__genres-item">
        <Link to={ROUTE_PATH.ROOT} className="catalog__genres-link">{name}</Link>
      </li>
    );
  }
}

export default CatalogGenre;
