import { FilmDataList } from '../../types/types';
import Logo from '../logo/logo';
import SmallFilmCardList from '../small-film-card-list/small-film-card-list';
import UserBlock from '../user-block/user-block';

function MyList({filmDataList}: FilmDataList): JSX.Element {
  return(
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />
        <h1 className="page-title user-page__title">My list</h1>
        <UserBlock/>
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <SmallFilmCardList filmDataList = {filmDataList}/>
      </section>

      <footer className="page-footer">
        <div className="logo">
          <a href="main.html" className="logo__link logo__link--light">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </a>
        </div>

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  );
}

export default MyList;
