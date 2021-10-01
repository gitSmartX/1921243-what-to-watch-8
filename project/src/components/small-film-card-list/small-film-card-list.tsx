import SmallFilmCard from '../small-film-card/small-film-card';

type FilmTitleList = {
  filmTitleList: string[];
}

function SmallFilmCardList({filmTitleList}: FilmTitleList): JSX.Element{
  const listItems = filmTitleList.map((title) =>
    <SmallFilmCard key={title} filmTitle={title} />,
  );
  return (
    <div className="catalog__films-list">
      {listItems}
    </div>
  );
}

export default SmallFilmCardList;
