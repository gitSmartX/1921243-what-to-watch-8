import { GENRES_LIST } from '../../constants/constant';
import {FilmDataList} from '../../types/types';
import CatalogGenre from '../catalog-genre/catalog-genre';

type CatalogGenresListProps = {
  activeGenre: string;
} & FilmDataList;

function CatalogGenresList({activeGenre, filmDataList}: CatalogGenresListProps): JSX.Element{
  const genreList: string[]  = [GENRES_LIST.ALL];

  filmDataList.forEach((film) => {
    if (genreList.indexOf(film.genre) === -1) {
      genreList.push(film.genre);
    }
  });

  const listItems: JSX.Element[] = genreList.map((genre) =>
    <CatalogGenre key = {genre} name = {genre} isActive = { genre === activeGenre } />,
  );
  return(
    <ul className="catalog__genres-list">
      {listItems}
    </ul>
  );
}

export default CatalogGenresList;
