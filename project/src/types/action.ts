import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { AxiosInstance } from 'axios';
import { State } from './state';
import {
  setDisplayFilmsCount,
  getFilmsList,
  getFilmsListByGenre,
  resetDisplayFilmsCount,
  setActiveGenre,
  loadfilmsList,
  requareAuthorization,
  requareLogout,
  setUserData,
  redirectToRoute,
  loadFilmData,
  loadSimilarFilms,
  loadReviewList,
  setActiveNavLink} from '../store/action';

export enum Actions {
  SetActiveGenre = 'app/setActiveGenre',
  GetFilmsList = 'app/getFilmsList',
  LoadFilmData = 'app/loadFilmData',
  SetDisplayFilmsCount = 'app/setDisplayFilmsCount',
  ResetDisplayFilmsCount = 'app/resetDisplayFilmsCount',
  GetFilmsListByGenre = 'app/getFilmsListByGenre',
  LoadfilmsList = 'data/loadfilmsList',
  LoadSimilarFilms = 'data/loadSimilarFilms',
  RequareAuthorization = 'user/requareAuthorization',
  RequareLogout = 'user/requareLogout',
  SetUserData = 'user/setUserData',
  RedirectToRoute = 'app/redirectToRoute',
  LoadReviewList = 'data/loadReviewList',
  SetActiveNavLink = 'app/setActiveNavLink'
}

export type ActionType =
| ReturnType<typeof setDisplayFilmsCount>
| ReturnType<typeof loadFilmData>
| ReturnType<typeof getFilmsList>
| ReturnType<typeof getFilmsListByGenre>
| ReturnType<typeof setActiveGenre>
| ReturnType<typeof resetDisplayFilmsCount>
| ReturnType<typeof loadfilmsList>
| ReturnType<typeof loadSimilarFilms>
| ReturnType<typeof requareAuthorization>
| ReturnType<typeof requareLogout>
| ReturnType<typeof setUserData>
| ReturnType<typeof redirectToRoute>
| ReturnType<typeof loadReviewList>
| ReturnType<typeof setActiveNavLink>

export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, ActionType>;

export type ThunkAppDispatch = ThunkDispatch<State, AxiosInstance, ActionType>;
