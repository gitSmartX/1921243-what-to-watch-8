import React, { ChangeEvent, useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { MAX_RATE_STARS, MIN_RATE_STARS, ROUTE_PATH } from '../../constants/constant';
import { FilmData, ReviewType } from '../../types/types';
import AddReviewHeader from '../add-review-header/add-review-header';

type AddReviewsProps = {
  filmDataList: FilmData[];
  reviewsList: ReviewType[];
}

function AddReview({filmDataList, reviewsList}: AddReviewsProps): JSX.Element{
  const [reviewRaiting, setReviewRaitng] = useState(MIN_RATE_STARS);
  const [reviewComment, setReviewComment] = useState('');

  const history = useHistory();
  const filmId = history.location.pathname.split('/')[2]; //маска пути '/films/:id'
  const filmData  = filmDataList.filter((data) => data.id.toString() === filmId)[0];
  const rateStarsJSX = [];
  for (let i = MAX_RATE_STARS; i > MIN_RATE_STARS; i--){
    const value:string = i.toString();
    rateStarsJSX.push(
      <React.Fragment key = {i}>
        <input className="rating__input" id={`star-${value}`} type="radio" name="rating" value= {i}/>
        <label className="rating__label" htmlFor={`star-${value}`}>{`Rating ${value}`}</label>
      </React.Fragment>,
    );
  }
  // eslint-disable-next-line no-console
  console.log(filmData, reviewRaiting, reviewsList);
  return(
    <section className="film-card film-card--full">
      <AddReviewHeader {...filmData}/>

      <div className="add-review">
        <form action="#" className="add-review__form">
          <div className="rating">
            <div className="rating__stars"
              onChange={({target}: ChangeEvent<HTMLInputElement>) => {
                setReviewRaitng(Number(target.value));
              }}
            >
              {rateStarsJSX}
            </div>
          </div>

          <div className="add-review__text">
            <textarea
              className="add-review__textarea"
              name="review-text" id="review-text"
              placeholder="Review text"
              onChange={({target}: ChangeEvent<HTMLTextAreaElement>) => {
                setReviewComment(target.value);
              }}
            >
              {reviewComment}
            </textarea>
            <div className="add-review__submit">
              <NavLink
                to = {ROUTE_PATH.FILM_ID_REVIEW.replace(':id', filmId)}
                className="add-review__btn"
                type="submit"
                onClick = {() => {
                  const review: ReviewType = {
                    id: reviewsList.length + 1,
                    'user': {
                      'id': 1,
                      'name': 'Kate Muir',
                    },
                    'rating': reviewRaiting,
                    'comment': reviewComment,
                    'date': new Date(),
                  };
                  reviewsList.push(review);
                }}
              >
                Post
              </NavLink>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default AddReview;
