import { GenresList } from '../../types/types';
import CatalogGenre from '../catalog-genre/catalog-genre';

function CatalogGenresList({genresList}: GenresList): JSX.Element{
  const listItems: JSX.Element[] = genresList.map((item) =>
    <CatalogGenre key = {item.name} name = {item.name} isActive = {item.isActive} />,
  );
  return(
    <ul className="catalog__genres-list">
      {listItems}
    </ul>
  );
}

export default CatalogGenresList;
