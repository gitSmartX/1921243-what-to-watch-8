import type { FilmCardPropsList } from '../../types/types';
import SmallFilmCard from '../small-film-card/small-film-card';

function SmallFilmCardList({filmCardPropsList}: FilmCardPropsList): JSX.Element{
  const listItems = filmCardPropsList.map((item) =>
    <SmallFilmCard key={item.filmTitle} filmTitle={item.filmTitle} />,
  );
  return (
    <div className="catalog__films-list">
      {listItems}
    </div>
  );
}

export default SmallFilmCardList;
