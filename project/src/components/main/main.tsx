import React from 'react';
import Logo from '../logo/logo';
import SmallFilmCardList from '../small-film-card-list/small-film-card-list';
import type {FilmCardDate} from '../../types/types';
import { CATALOG_GENRES_LIST, ALL_FILMS } from '../../constants/constant';
import UserBlock from '../user-block/user-block';
import CatalogGenresList from '../catalog-genres-list/catalog-genres-list';
import Footer from '../footer/footer';

function Main(props:any): JSX.Element{
  // eslint-disable-next-line no-console
  const filmCardDateConst:FilmCardDate = props.filmCardDate;
  return (
    <React.Fragment>
      <section className="film-card">
        <div className="film-card__bg">
          <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header film-card__head">
          <Logo />
          <UserBlock />
        </header>

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{filmCardDateConst.title}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{filmCardDateConst.genre}</span>
                <span className="film-card__year">{filmCardDateConst.year}</span>
              </p>

              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <CatalogGenresList genresList = {CATALOG_GENRES_LIST} />

          <SmallFilmCardList filmCardPropsList = {ALL_FILMS}/>

          <div className="catalog__more">
            <button className="catalog__button" type="button">Show more</button>
          </div>
        </section>

        <Footer/>
      </div>
    </React.Fragment>
  );
}

export default Main;
