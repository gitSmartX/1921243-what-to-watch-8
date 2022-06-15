import React, { useEffect } from 'react';
import Footer from '../footer/footer';
import SmallFilmCardList from '../small-film-card-list/small-film-card-list';

import { useParams} from 'react-router-dom';
import { ThunkAppDispatch } from '../../types/action';
import { fetchFilmByIdAction, fetchFilmsListSimilarAction, fetchReviewListAction } from '../../store/api-actions';
import { connect, ConnectedProps } from 'react-redux';
import { State } from '../../types/state';
import { setActiveNavLink } from '../../store/action';
import { NAV_LINK_NAME } from '../../constants/constant';
import FilmCard from '../film-card/film-card';

const mapStateToProps = ({filmData, filmsListSimilar}:State) => ({
  filmData: filmData,
  filmsListSimilar: filmsListSimilar,
});

const mapDispatchToProps = (dispatch: ThunkAppDispatch) => ({
  getFilmDataById (id: string){
    dispatch(fetchFilmByIdAction(id));
    dispatch(fetchFilmsListSimilarAction(id));
    dispatch(fetchReviewListAction(id));
  },
  onChangeNavLink (navLink: NAV_LINK_NAME) {
    dispatch(setActiveNavLink(navLink));
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type ProprsFromRedux = ConnectedProps<typeof connector> & {navLink: NAV_LINK_NAME};

function MoviePage({filmsListSimilar, getFilmDataById,onChangeNavLink, filmData, navLink}: ProprsFromRedux): JSX.Element{
  const {id} = useParams<{id: string}>();
  useEffect( () => {
    onChangeNavLink(navLink);
  }, [navLink]);

  useEffect( () => {
    getFilmDataById(id);
  }, [id]);

  return(
    <React.Fragment>
      <FilmCard/>

      {filmsListSimilar &&
        <div className="page-content">
          <section className="catalog catalog--like-this">
            <h2 className="catalog__title">More like this</h2>
            <SmallFilmCardList filmDataList = {filmsListSimilar}/>
          </section>
          <Footer/>
        </div>};
    </React.Fragment>
  );
}

export {MoviePage};
export default connector(MoviePage);
