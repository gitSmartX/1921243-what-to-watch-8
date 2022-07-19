/* eslint-disable no-console */
import { API_ROUTE, AUTH_STATUS, ROUTE_PATH } from '../constants/constant';
import { mapFilmListResponse, mapFilmDataResponse } from '../services/helpers';
import { dropToken, setToken} from '../services/token';
import { ThunkActionResult } from '../types/action';
import { AuthData, CommentPost, FilmDataResponse, ReviewType, UserData } from '../types/types';
import { loadSimilarFilms, loadfilmsList, redirectToRoute, requareAuthorization, loadFilmData, setUserData, loadReviewList} from './action';

export const fetchFilmsListAction = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const {data} = await api.get<FilmDataResponse[]>(API_ROUTE.FILMS);
    dispatch(loadfilmsList(mapFilmListResponse(data)));
  };

export const fetchFilmsListSimilarAction = (id: string): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const {data} = await api.get<FilmDataResponse[]>(API_ROUTE.FILM_SIMILAR.replace(':id', id));
    dispatch(loadSimilarFilms(mapFilmListResponse(data)));
  };

export const fetchReviewListAction = (id: string): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const {data} = await api.get<ReviewType[]>(API_ROUTE.COMMENTS.replace(':id', id));
    dispatch(loadReviewList(data));
  };

export const fetchFilmByIdAction = (id: string): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    await api.get<FilmDataResponse>(API_ROUTE.FILM.replace(':id', id))
      .then(({data}) => dispatch(loadFilmData(mapFilmDataResponse(data))))
      .catch(()=> dispatch(redirectToRoute(ROUTE_PATH.ERROR)));
  };

export const postComment = (id: string, comment: CommentPost): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    await api.post<ReviewType[]>(API_ROUTE.COMMENTS.replace(':id', id), comment)
      .then(({data}) => console.log(data))
      .catch((error)=> console.log(error));//dispatch(redirectToRoute(ROUTE_PATH.ERROR)));
  };

export const checkAuthAction = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    console.log('start');
    await api.get<UserData>(API_ROUTE.LOGIN)
      .then(({data})=> {
        console.log('response');
        console.log(data);
        dispatch(setUserData(data));
        dispatch(requareAuthorization(AUTH_STATUS.AUTH));
      });
  };

export const loginAction = ({email, password}: AuthData): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const {data} = await api.post<UserData>(API_ROUTE.LOGIN, {email, password});
    setToken(data.token);
    dispatch(requareAuthorization(AUTH_STATUS.AUTH));
    dispatch(setUserData(data));
    dispatch(redirectToRoute(ROUTE_PATH.ROOT));
  };

export const logoutAction = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    api.delete(API_ROUTE.LOGOUT);
    dropToken();
    dispatch(requareAuthorization(AUTH_STATUS.NO_AUTH));
    dispatch(setUserData({id: '', email: '', name: '', avatarUrl: '', token: ''}));
    dispatch(redirectToRoute(ROUTE_PATH.ROOT));
  };

