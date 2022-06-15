import React from 'react';
import Logo from '../logo/logo';
import SmallFilmCardList from '../small-film-card-list/small-film-card-list';
import {GENRES_LIST, SITE_NAME} from '../../constants/constant';
import UserBlock from '../user-block/user-block';
import CatalogGenresList from '../catalog-genres-list/catalog-genres-list';
import Footer from '../footer/footer';
import FilmCardMain from '../film-card/film-card-main';
import { Dispatch } from 'redux';

import { State } from '../../types/state';
import { connect, ConnectedProps } from 'react-redux';
import { ActionType } from '../../types/action';
import { setDisplayFilmsCount } from '../../store/action';
import { ShowMore } from '../show-more/show-more';

const mapStateToProps = ({activeGenre, filmsList, filmsDisplayCount}: State) => ({
  activeGenre,
  filmsList,
  filmsDisplayCount,
});

const mapDispatchToProps = (dispatch: Dispatch<ActionType>) => ({
  onShowMore() {
    dispatch(setDisplayFilmsCount());
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>

function Main(props: PropsFromRedux): JSX.Element{
  const {activeGenre, filmsList,filmsDisplayCount, onShowMore} = props;
  const filmData = filmsList[0];
  const filmsListByGenre = activeGenre === GENRES_LIST.ALL ? filmsList : filmsList.filter((film) => film.genre === activeGenre);
  const filmsDisplayList = filmsListByGenre.slice(0, filmsDisplayCount);
  return (
    <React.Fragment>
      <section className="film-card">
        <div className="film-card__bg">
          <img src={filmData.backgroundImage} alt={filmData.name} />
        </div>
        <h1 className="visually-hidden">{SITE_NAME}</h1>
        <header className="page-header film-card__head">
          <Logo />
          <UserBlock />
        </header>
        <FilmCardMain {...filmData}/>
      </section>
      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <CatalogGenresList filmDataList = {filmsList} />

          <SmallFilmCardList filmDataList = {filmsDisplayList} />
          {filmsListByGenre.length > filmsDisplayCount ? <ShowMore onShowMore = {onShowMore}/> : null}
        </section>

        <Footer/>
      </div>
    </React.Fragment>
  );
}

export {Main};
export default connector(Main);
