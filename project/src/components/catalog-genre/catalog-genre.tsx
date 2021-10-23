import { Link } from 'react-router-dom';
import { Genre } from '../../types/types';
import { ROUTE_PATH } from '../../constants/constant';

function CatalogGenre({name, isActive}: Genre): JSX.Element {

  return(
    <li className={`catalog__genres-item ${isActive ? 'catalog__genres-item--active': ''}`}>
      <Link to={ROUTE_PATH.ROOT} className="catalog__genres-link">{name}</Link>
    </li>
  );

}

export default CatalogGenre;
