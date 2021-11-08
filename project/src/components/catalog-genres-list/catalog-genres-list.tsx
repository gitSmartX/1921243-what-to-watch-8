import { GENRES_LIST } from '../../constants/constant';
import {FilmDataList} from '../../types/types';
import CatalogGenre from '../catalog-genre/catalog-genre';

function CatalogGenresList({filmDataList}: FilmDataList): JSX.Element{
  const genreList: string[]  = [GENRES_LIST.ALL];

  filmDataList.forEach((film) => {
    if (genreList.indexOf(film.genre) === -1) {
      genreList.push(film.genre);
    }
  });

  const listItems: JSX.Element[] = genreList.map((genre) =>
    <CatalogGenre key = {genre} name = {genre}/>,
  );
  return(
    <ul className="catalog__genres-list">
      {listItems}
    </ul>
  );
}

export default CatalogGenresList;
