import { ReviewType } from '../../types/types';

function Review(reviewData: ReviewType): JSX.Element{
  return(
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{reviewData.comment}</p>

        <footer className="review__details">
          <cite className="review__author">{reviewData.user.name}</cite>
          <time className="review__date" >{new Date(reviewData.date).toLocaleDateString()}</time>
        </footer>
      </blockquote>

      <div className="review__rating">{reviewData.rating}</div>
    </div>
  );
}

export default Review;
