import type {FilmDataList} from '../../types/types';
import SmallFilmCard from '../small-film-card/small-film-card';

function SmallFilmCardList({filmDataList}: FilmDataList): JSX.Element{
  const filmDataListJSX = filmDataList.map((filmData) =>
    <SmallFilmCard key={filmData.id} {...filmData} />,
  );
  return (
    <div className="catalog__films-list">
      {filmDataListJSX}
    </div>
  );
}

export default SmallFilmCardList;
