import React, { ChangeEvent, useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';
import { MAX_RATE_STARS, MIN_RATE_STARS, ROUTE_PATH } from '../../constants/constant';
import { postComment } from '../../store/api-actions';
import { ThunkAppDispatch } from '../../types/action';
import { State } from '../../types/state';
import AddReviewHeader from '../add-review-header/add-review-header';

const mapStateToProps = ({filmData,reviewList}:State) => ({
  filmData: filmData,
  reviewList: reviewList,
});

const mapDispatchToProps = (dispatch: ThunkAppDispatch) => ({
  onSubmitPost (e: React.MouseEvent<HTMLElement>,filmId: string, reviewRaiting: number, reviewComment: string) {
    if(reviewComment.length < 20) {
      e.preventDefault();
      // eslint-disable-next-line no-alert
      alert('Warning');
      return;
    }
    dispatch(postComment(filmId, {
      'rating': reviewRaiting,
      'comment': reviewComment,
    }));
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type ProprsFromRedux = ConnectedProps<typeof connector>;

function AddReview({filmData,reviewList, onSubmitPost}: ProprsFromRedux): JSX.Element{
  const [reviewRaiting, setReviewRaitng] = useState(MIN_RATE_STARS);
  const [reviewComment, setReviewComment] = useState('');

  const {id} = useParams<{id: string}>(); //маска пути '/films/:id'
  const rateStarsJSX = [];
  for (let i = MAX_RATE_STARS; i > MIN_RATE_STARS; i--){
    const value:string = i.toString();
    rateStarsJSX.push(
      <React.Fragment key = {i}>
        <input className="rating__input" id={`star-${value}`} type="radio" name="rating" defaultValue= {i}/>
        <label className="rating__label" htmlFor={`star-${value}`}>{`Rating ${value}`}</label>
      </React.Fragment>,
    );
  }
  // eslint-disable-next-line no-console
  console.log(filmData, reviewRaiting, reviewList, id);
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
                to = {ROUTE_PATH.FILM_ID_REVIEW.replace(':id', id)}
                className="add-review__btn"
                type="submit"
                onClick = {(e) => onSubmitPost(e, id, reviewRaiting ,reviewComment)}
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

export default connector(AddReview);
