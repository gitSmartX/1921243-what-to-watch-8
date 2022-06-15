import { AUTH_STATUS, NAV_LINK_NAME, ROUTE_PATH } from '../constants/constant';
import { FILM_DATA_LIST } from '../mocks/films';
import { Actions } from '../types/action';
import { FilmData, ReviewType, UserData} from '../types/types';

export const getFilmsList = () => ({
  type: Actions.GetFilmsList,
  payload: FILM_DATA_LIST,
} as const);

export const setDisplayFilmsCount = () => ({
  type: Actions.SetDisplayFilmsCount,
} as const);

export const resetDisplayFilmsCount = () => ({
  type: Actions.ResetDisplayFilmsCount,
} as const);

export const getFilmsListByGenre = () => ({
  type: Actions.GetFilmsListByGenre,
} as const);

export const setActiveGenre = (genre: string) => ({
  type: Actions.SetActiveGenre,
  payload: genre,
} as const);

export const loadfilmsList = (filmsList: FilmData[]) => ({
  type: Actions.LoadfilmsList,
  payload: filmsList,
} as const);

export const loadFilmData = (filmData: FilmData) => ({
  type: Actions.LoadFilmData,
  payload: filmData,
} as const);

export const loadSimilarFilms = (filmsList: FilmData[]) => ({
  type: Actions.LoadSimilarFilms,
  payload: filmsList,
} as const);

export const requareAuthorization = (authStatus: AUTH_STATUS) => ({
  type: Actions.RequareAuthorization,
  payload: authStatus,
} as const);

export const requareLogout = () => ({
  type: Actions.RequareLogout,
} as const);

export const setUserData = (userData: UserData) => ({
  type: Actions.SetUserData,
  payload: userData,
} as const);

export const redirectToRoute = (url: ROUTE_PATH) => ({
  type: Actions.RedirectToRoute,
  payload: url,
} as const);

export const loadReviewList = (reviewList: ReviewType[]) => ({
  type: Actions.LoadReviewList,
  payload: reviewList,
} as const);

export const setActiveNavLink = (navLink: NAV_LINK_NAME) => ({
  type: Actions.SetActiveNavLink,
  payload: navLink,
} as const);
