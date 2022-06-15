import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { State } from '../../types/state';

const mapStateToProps = ({filmData}:State) => ({
  filmData: filmData,
});

const connector = connect(mapStateToProps);

type ProprsFromRedux = ConnectedProps<typeof connector>;

function FilmCardDescDetails({filmData}: ProprsFromRedux): JSX.Element {
  return (
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
  );
}

export {FilmCardDescDetails};

export default connector(FilmCardDescDetails);
