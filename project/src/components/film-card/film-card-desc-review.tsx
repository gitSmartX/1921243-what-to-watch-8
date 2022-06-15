import { connect, ConnectedProps } from 'react-redux';
import { State } from '../../types/state';
import Review from '../review/review';

const mapStateToProps = ({reviewList}:State) => ({
  reviewList: reviewList,
});

const connector = connect(mapStateToProps);

type ProprsFromRedux = ConnectedProps<typeof connector>;

function FilmCardDescOverview({reviewList}: ProprsFromRedux): JSX.Element {
  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {reviewList.map((reviewData, i) =>  i % 2 === 0 ? <Review key = {reviewData.id} {...reviewData} /> : '')}
      </div>
      <div className="film-card__reviews-col">
        {reviewList.map((reviewData, i) =>  i % 2 === 1 ? <Review key = {reviewData.id} {...reviewData}/> : '')}
      </div>
    </div>
  );
}

export {FilmCardDescOverview};

export default connector(FilmCardDescOverview);
