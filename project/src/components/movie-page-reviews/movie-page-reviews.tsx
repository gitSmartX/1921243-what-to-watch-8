import React from 'react';
import Footer from '../footer/footer';
import Review from '../review/review';
import SmallFilmCardList from '../small-film-card-list/small-film-card-list';

import { FILM_DATA_LIST } from '../../mocks/films';
import { NAV_LINK_NAME } from '../../constants/constant';
import { useParams } from 'react-router-dom';
import { FilmData, ReviewType } from '../../types/types';
import FilmCardHero from '../film-card/film-card-hero';
import FilmCardNavigation from '../film-card-navigation/film-card-navigation';

type MoviePageReviewsProps = {
  filmDataList: FilmData[];
  reviewsList: ReviewType[];
}

function MoviePageReviews({filmDataList, reviewsList}: MoviePageReviewsProps): JSX.Element{
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
              <FilmCardNavigation id = {id} activeNavLink = {NAV_LINK_NAME.REVIEWS}/>

              <div className="film-card__reviews film-card__row">
                <div className="film-card__reviews-col">
                  {reviewsList.map((reviewData) =>  <Review key = {reviewData.id} {...reviewData}/>)}
                </div>
                <div className="film-card__reviews-col">
                  {reviewsList.map((reviewData) =>  <Review key = {reviewData.id} {...reviewData}/>)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <SmallFilmCardList filmDataList = {FILM_DATA_LIST}/>
        </section>
        <Footer/>
      </div>
    </React.Fragment>
  );
}

export default MoviePageReviews;
