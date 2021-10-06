import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from '../main/main';
import MoviePageReviews from '../movie-page-reviews/movie-page-reviews';
import MoviePage from '../movie-page/movie-page';
import MyList from '../my-list/my-list';
import Player from '../player/player';
import SignInComponent from '../sign-in/sign-in';
import ErrorNotFound from '../errors/error-not-found';

import {FILM_CARD_DATA, ROUTE_PATH} from '../../constants/constant';
import PrivateRoute from '../../hooks/private-route/private-route';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route path = {ROUTE_PATH.ROOT} exact>
          <Main
            filmCardDate = {FILM_CARD_DATA}
          />
        </Route>
        <Route path = {ROUTE_PATH.LOGIN} exact>
          <SignInComponent/>
        </Route>
        <PrivateRoute path = {ROUTE_PATH.MYLIST} exact isAccess = {false}>
          <MyList/>
        </PrivateRoute>
        <Route path = {ROUTE_PATH.FILM_ID} exact>
          <MoviePage/>
        </Route>
        <Route path = {ROUTE_PATH.FILM_ID_REVIEW} exact>
          <MoviePageReviews/>
        </Route>
        <Route path = {ROUTE_PATH.PLAYER_ID} exact>
          <Player/>
        </Route>
        <Route>
          <ErrorNotFound/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
