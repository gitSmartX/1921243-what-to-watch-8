import { AUTH_STATUS, NAV_LINK_NAME } from '../constants/constant';
import { UserData, FilmData, ReviewType } from './types';

export type State = {
  activeGenre: string,
  filmData: FilmData,
  filmsList: FilmData[],
  filmsListSimilar: FilmData[],
  reviewList: ReviewType[],
  filmsDisplayCount: number,
  authorizationStatus: AUTH_STATUS,
  userData: UserData,
  isDataLoaded: boolean,
  activeNavLink: NAV_LINK_NAME,
};
