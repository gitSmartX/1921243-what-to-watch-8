import React from 'react';
import Footer from '../footer/footer';
import SmallFilmCardList from '../small-film-card-list/small-film-card-list';

import { useParams} from 'react-router-dom';
import { FilmDataList } from '../../types/types';
import FilmCardHero from '../film-card/film-card-hero';
import { NAV_LINK_NAME} from '../../constants/constant';
import FilmCardNavigation from '../film-card-navigation/film-card-navigation';
import getRatingLevel from '../../hooks/helpers/helpers';

function MoviePage({filmDataList}: FilmDataList): JSX.Element{
  const {id} = useParams<{id: string}>();
  const filmData  = filmDataList.filter((data) => data.id.toString() === id)[0];
  // eslint-disable-next-line no-console
  console.log(filmData);
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
              <FilmCardNavigation id = {id} activeNavLink = {NAV_LINK_NAME.OVERVIEW}/>

              <div className="film-rating">
                <div className="film-rating__score">{filmData.rating}</div>
                <p className="film-rating__meta">
                  <span className="film-rating__level">{getRatingLevel(filmData.rating)}</span>
                  <span className="film-rating__count">{`${filmData.scoresCount} ratings`}</span>
                </p>
              </div>

              <div className="film-card__text">
                <p>{filmData.description}</p>

                <p className="film-card__director"><strong>Director: {filmData.director}</strong></p>

                <p className="film-card__starring"><strong>Starring: {filmData.starring.join(', ')}</strong></p>
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

export default MoviePage;
