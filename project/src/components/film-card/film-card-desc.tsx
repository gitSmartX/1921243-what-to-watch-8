import { connect, ConnectedProps } from 'react-redux';
import { NAV_LINK_NAME } from '../../constants/constant';
import { State } from '../../types/state';
import FilmCardNavigation from '../film-card-navigation/film-card-navigation';
import FilmCardDescDeatils from './film-card-desc-deatils';
import FilmCardDescOverview from './film-card-desc-overview';
import FilmCardDescReview from './film-card-desc-review';

const mapStateToProps = ({filmData, activeNavLink}:State) => ({
  filmData: filmData,
  activeNavLink: activeNavLink,
});

const connector = connect(mapStateToProps);

type ProprsFromRedux = ConnectedProps<typeof connector>;

const getFilmCardDescComp = (navLink: NAV_LINK_NAME) => {
  switch(navLink){
    case NAV_LINK_NAME.OVERVIEW:
      return <FilmCardDescOverview/>;
    case NAV_LINK_NAME.DETAILS:
      return <FilmCardDescDeatils/>;
    case NAV_LINK_NAME.REVIEWS:
      return <FilmCardDescReview/>;
  }
};

function FilmCardDesc({filmData, activeNavLink}: ProprsFromRedux): JSX.Element {
  return (
    <div className="film-card__desc">
      <FilmCardNavigation id = {filmData.id} activeNavLink = {activeNavLink}/>
      {getFilmCardDescComp(activeNavLink)}
    </div>
  );
}

export {FilmCardDesc};
export default connector(FilmCardDesc);
