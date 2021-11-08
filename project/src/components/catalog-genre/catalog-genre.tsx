import { Link } from 'react-router-dom';
import { Genre } from '../../types/types';
import { ROUTE_PATH } from '../../constants/constant';

import { Dispatch } from 'redux';
import { ActionType } from '../../types/action';
import { resetDisplayFilmsCount, setActiveGenre } from '../../store/action';
import { connect, ConnectedProps } from 'react-redux';
import { State } from '../../types/state';

const mapStateToProps = ({activeGenre}: State) => ({
  activeGenre,
});

const mapDispatchToProps = (dispatch: Dispatch<ActionType>) => ({
  onGenreClick(genre: string) {
    dispatch(setActiveGenre(genre));
    dispatch(resetDisplayFilmsCount());
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector> & Genre;

function CatalogGenre({name, activeGenre, onGenreClick}: PropsFromRedux): JSX.Element {

  return(
    <li className={`catalog__genres-item ${name === activeGenre ? 'catalog__genres-item--active': ''}`}>
      <Link
        to={ROUTE_PATH.ROOT}
        className="catalog__genres-link"
        onClick = {() => onGenreClick(name)}
      >
        {name}
      </Link>
    </li>
  );

}
export {CatalogGenre};
export default connector(CatalogGenre);
