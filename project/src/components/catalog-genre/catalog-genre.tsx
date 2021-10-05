import { Link } from 'react-router-dom';
import { Genre } from '../../types/types';
import { ROUTE_PATH } from '../app/constant';

function CatalogGenre(props: any): JSX.Element {
  const genreItem: Genre = props.data;
  if(genreItem.isActive) {
    return(
      <li className="catalog__genres-item catalog__genres-item--active">
        <Link to={ROUTE_PATH.ROOT} className="catalog__genres-link">{genreItem.name}</Link>
      </li>
    );
  }
  else {
    return(
      <li className="catalog__genres-item">
        <Link to={ROUTE_PATH.ROOT} className="catalog__genres-link">{genreItem.name}</Link>
      </li>
    );
  }
}

export default CatalogGenre;
