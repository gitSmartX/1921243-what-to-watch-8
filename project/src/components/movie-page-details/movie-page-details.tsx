/* eslint-disable no-console */
import React from 'react';
import { useParams } from 'react-router-dom';
import { NAV_LINK_NAME } from '../../constants/constant';
import { FilmDataList } from '../../types/types';
import FilmCardNavigation from '../film-card-navigation/film-card-navigation';
import FilmCardHero from '../film-card/film-card-hero';
import Footer from '../footer/footer';
import SmallFilmCardList from '../small-film-card-list/small-film-card-list';

function MoviePageDetails({filmDataList}: FilmDataList): JSX.Element{
  const {id} = useParams<{id: string}>();
  const filmData  = filmDataList.filter((data) => data.id.toString() === id)[0];
  return(
    <React.Fragment>
      <section className="film-card film-card--full">
        <FilmCardHero {...filmData}/>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={filmData.posterImage} alt= {`${filmData.name} poster`} width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <FilmCardNavigation id = {id} activeNavLink = {NAV_LINK_NAME.DETAILS}/>

              <div className="film-card__text film-card__row">
                <div className="film-card__text-col">
                  <p className="film-card__details-item">
                    <strong className="film-card__details-name">Director</strong>
                    <span className="film-card__details-value">{filmData.director}</span>
                  </p>
                  <p className="film-card__details-item">
                    <strong className="film-card__details-name">Starring</strong>
                    <span className="film-card__details-value">
                      {filmData.starring.map((starring) => (<React.Fragment  key = {filmData.name+starring}>{starring}<br /></React.Fragment>))}
                    </span>
                  </p>
                </div>

                <div className="film-card__text-col">
                  <p className="film-card__details-item">
                    <strong className="film-card__details-name">Run Time</strong>
                    <span className="film-card__details-value">{`${Math.floor(filmData.runTime/60)}h ${filmData.runTime%60}m`}</span>
                  </p>
                  <p className="film-card__details-item">
                    <strong className="film-card__details-name">Genre</strong>
                    <span className="film-card__details-value">{filmData.genre}</span>
                  </p>
                  <p className="film-card__details-item">
                    <strong className="film-card__details-name">Released</strong>
                    <span className="film-card__details-value">{filmData.released}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <SmallFilmCardList filmDataList = {filmDataList}/>
        </section>
        <Footer/>
      </div>
    </React.Fragment>
  );
}

export default MoviePageDetails;
