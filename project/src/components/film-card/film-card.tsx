import { connect, ConnectedProps } from 'react-redux';
import { State } from '../../types/state';
import FilmCardDesc from './film-card-desc';
import FilmCardHero from './film-card-hero';

const mapStateToProps = ({filmData}:State) => ({
  filmData: filmData,
});

const connector = connect(mapStateToProps);

type ProprsFromRedux = ConnectedProps<typeof connector>;


function FilmCard({filmData}: ProprsFromRedux): JSX.Element {
  return (
    <section className="film-card film-card--full">
      <FilmCardHero/>

      <div className="film-card__wrap film-card__translate-top">
        <div className="film-card__info">
          <div className="film-card__poster film-card__poster--big">
            <img src={filmData.posterImage} alt= {`${filmData.name} poster`} width="218" height="327" />
          </div>
          <FilmCardDesc/>
        </div>
      </div>
    </section>
  );
}

export {FilmCard};
export default connector(FilmCard);
