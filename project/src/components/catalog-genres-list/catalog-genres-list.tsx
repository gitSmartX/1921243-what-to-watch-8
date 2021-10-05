import { GenresList } from '../../types/types';
import CatalogGenre from '../catalog-genre/catalog-genre';

function CatalogGenresList(props: any): JSX.Element{
  const genresList: GenresList = props.catalogGenresList;
  const listItems: JSX.Element[] = genresList.map((item) =>
    <CatalogGenre key = {item.name} data = {item} />,
  );
  return(
    <ul className="catalog__genres-list">
      {listItems}
    </ul>
  );
}

export default CatalogGenresList;
