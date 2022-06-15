import { connect, ConnectedProps } from 'react-redux';
import { Link } from 'react-router-dom';
import { NAV_LINK_NAME, ROUTE_PATH } from '../../constants/constant';
import { setActiveNavLink } from '../../store/action';
import { ThunkAppDispatch } from '../../types/action';
import { State } from '../../types/state';

const mapStateToProps = ({filmData, activeNavLink}:State) => ({
  filmData: filmData,
  activeNavLink: activeNavLink,
});

const mapDispatchToProps = (dispatch: ThunkAppDispatch) => ({
  onClickNavLink(navLink: NAV_LINK_NAME){
    dispatch(setActiveNavLink(navLink));
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type ProprsFromRedux = ConnectedProps<typeof connector>

type FilmCardNavLinkType = {
  nameNavLink: NAV_LINK_NAME;
} & ProprsFromRedux

function FilmCardNavLink({onClickNavLink,activeNavLink, filmData, nameNavLink}: FilmCardNavLinkType): JSX.Element {
  return (
    <li className={`film-nav__item ${activeNavLink === nameNavLink ? 'film-nav__item--active':''}`}>
      <Link
        to = {ROUTE_PATH.FILM_ID.replace(':id', filmData.id)}
        className="film-nav__link"
        onClick={() => onClickNavLink(nameNavLink)}
      >
        {nameNavLink}
      </Link>
    </li>
  );
}

export {FilmCardNavLink};

export default connector(FilmCardNavLink);
