import { connect, ConnectedProps } from 'react-redux';
import { getRatingLevel } from '../../hooks/helpers/helpers';
import { State } from '../../types/state';

const mapStateToProps = ({filmData}:State) => ({
  filmData: filmData,
});

const connector = connect(mapStateToProps);

type ProprsFromRedux = ConnectedProps<typeof connector>;

function FilmCardDescOverview({filmData}: ProprsFromRedux): JSX.Element {
  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{filmData.rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{getRatingLevel(filmData.rating)}</span>
          <span className="film-rating__count">{`${filmData.scoresCount} ratings`}</span>
        </p>
      </div>
      <div className="film-card__text">
        <p>{filmData.description}</p>

        <p className="film-card__director"><strong>{`Director: ${filmData.director}`}</strong></p>

        <p className="film-card__starring"><strong>{`Starring: ${filmData.starring.join(', ')}`}</strong></p>
      </div>
    </>
  );
}

export {FilmCardDescOverview};

export default connector(FilmCardDescOverview);
