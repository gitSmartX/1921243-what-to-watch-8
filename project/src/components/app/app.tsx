import {Router as BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from '../main/main';
import MoviePage from '../movie-page/movie-page';
import MyList from '../my-list/my-list';
import Player from '../player/player';
import SignInComponent from '../sign-in/sign-in';
import ErrorNotFound from '../errors/error-not-found';
import PrivateRoute from '../../hooks/private-route/private-route';
import AddReview from '../add-review/add-review';
import { State } from '../../types/state';
import { connect, ConnectedProps } from 'react-redux';
import Loading from '../loading/loading';
import browserHistory from '../../browser-history';
import { NAV_LINK_NAME, ROUTE_PATH } from '../../constants/constant';

const mapStateToProps = ({authorizationStatus, isDataLoaded, filmsList}:State) => ({
  authorizationStatus,
  isDataLoaded,
  filmDataList: filmsList,
});

const connector = connect(mapStateToProps);

type ProprsFromRedux = ConnectedProps<typeof connector>;

function App({authorizationStatus, isDataLoaded, filmDataList}: ProprsFromRedux): JSX.Element {
  if (!isDataLoaded){
    return (
      <Loading/>
    );
  }
  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route path = {ROUTE_PATH.ROOT} exact>
          <Main />
        </Route>
        <Route path = {ROUTE_PATH.LOGIN} exact>
          <SignInComponent/>
        </Route>
        <PrivateRoute path = {ROUTE_PATH.MYLIST} exact>
          <MyList
            filmDataList = {filmDataList.filter((obj) => obj.isFavorite)}
          />
        </PrivateRoute>
        <Route path = {ROUTE_PATH.FILM_ID} exact>
          <MoviePage navLink = {NAV_LINK_NAME.OVERVIEW}/>
        </Route>
        <Route path = {ROUTE_PATH.FILM_ID_DETAILS} exact>
          <MoviePage navLink = {NAV_LINK_NAME.DETAILS}/>
        </Route>
        <Route path = {ROUTE_PATH.FILM_ID_REVIEW} exact>
          <MoviePage navLink = {NAV_LINK_NAME.REVIEWS}/>
        </Route>
        <Route path = {ROUTE_PATH.FILM_ID_ADD_REVIEW} exact>
          <AddReview/>
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

export {App};

export default connector(App);
