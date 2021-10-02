type ReviewData = {
  text: string;
  author: string;
  date: string;
  datetime: string;
  rating: number;
}

function Review(props:any): JSX.Element{
  const reviewData:ReviewData = props.reviewData;
  return(
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{reviewData.text}</p>

        <footer className="review__details">
          <cite className="review__author">{reviewData.author}</cite>
          <time className="review__date" dateTime={reviewData.datetime}>{reviewData.date}</time>
        </footer>
      </blockquote>

      <div className="review__rating">{reviewData.rating}</div>
    </div>
  );
}

export default Review;
