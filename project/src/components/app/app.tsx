import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from '../main/main';
import MoviePageReviews from '../movie-page-reviews/movie-page-reviews';
import MoviePage from '../movie-page/movie-page';
import MyList from '../my-list/my-list';
import Player from '../player/player';
import SignInComponent from '../sign-in/sign-in';
import ErrorNotFound from '../errors/error-not-found';

import {ROUTE_PATH} from '../../constants/constant';
import PrivateRoute from '../../hooks/private-route/private-route';
import { FilmDataList } from '../../types/types';
import AddReview from '../add-review/add-review';
import MoviePageDetails from '../movie-page-details/movie-page-details';
import { REVIEWS } from '../../mocks/reviews';

function App({filmDataList}: FilmDataList): JSX.Element {
  // eslint-disable-next-line prefer-const
  let reviewsList = REVIEWS;
  return (
    <BrowserRouter>
      <Switch>
        <Route path = {ROUTE_PATH.ROOT} exact>
          <Main />
        </Route>
        <Route path = {ROUTE_PATH.LOGIN} exact>
          <SignInComponent/>
        </Route>
        <PrivateRoute path = {ROUTE_PATH.MYLIST} exact isAccess>
          <MyList
            filmDataList = {filmDataList}
          />
        </PrivateRoute>
        <Route path = {ROUTE_PATH.FILM_ID} exact>
          <MoviePage
            filmDataList = {filmDataList}
          />
        </Route>
        <Route path = {ROUTE_PATH.FILM_ID_DETAILS} exact>
          <MoviePageDetails
            filmDataList = {filmDataList}
          />
        </Route>
        <Route path = {ROUTE_PATH.FILM_ID_REVIEW} exact>
          <MoviePageReviews
            filmDataList = {filmDataList}
            reviewsList = {reviewsList}
          />
        </Route>
        <Route path = {ROUTE_PATH.FILM_ID_ADD_REVIEW} exact>
          <AddReview
            filmDataList = {filmDataList}
            reviewsList = {reviewsList}
          />
        </Route>
        <Route path = {ROUTE_PATH.PLAYER_ID} exact>
          <Player
            filmDataList = {filmDataList}
          />
        </Route>
        <Route>
          <ErrorNotFound/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
