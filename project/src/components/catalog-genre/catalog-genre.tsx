import { Link } from 'react-router-dom';
import { Genre } from '../../types/types';
import { ROUTE_PATH } from '../../constants/constant';

import { Dispatch } from 'redux';
import { ActionType } from '../../types/action';
import { setActiveGenre } from '../../store/action';
import { connect, ConnectedProps } from 'react-redux';

const mapDispatchToProps = (dispatch: Dispatch<ActionType>) => ({
  onGenreClick(genre: string) {
    dispatch(setActiveGenre(genre));
  },
});

const connector = connect(null, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector> & Genre

function CatalogGenre({name, isActive, onGenreClick}: PropsFromRedux): JSX.Element {

  return(
    <li className={`catalog__genres-item ${isActive ? 'catalog__genres-item--active': ''}`}>
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
