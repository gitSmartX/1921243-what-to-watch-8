import React from 'react';
import Logo from '../logo/logo';
import SmallFilmCardList from '../small-film-card-list/small-film-card-list';
import type {FilmDataList} from '../../types/types';
import { BUTTON_NAME, CATALOG_GENRES_LIST, SITE_NAME} from '../../constants/constant';
import UserBlock from '../user-block/user-block';
import CatalogGenresList from '../catalog-genres-list/catalog-genres-list';
import Footer from '../footer/footer';
import FilmCard from '../film-card/film-card';

function Main({filmDataList}: FilmDataList): JSX.Element{
  const filmData = filmDataList[0];

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
        <FilmCard {...filmData}/>
      </section>
      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <CatalogGenresList genresList = {CATALOG_GENRES_LIST} />

          <SmallFilmCardList filmDataList = {filmDataList} />

          <div className="catalog__more">
            <button className="catalog__button" type="button">{BUTTON_NAME.SHOW_MORE}</button>
          </div>
        </section>

        <Footer/>
      </div>
    </React.Fragment>
  );
}

export default Main;
