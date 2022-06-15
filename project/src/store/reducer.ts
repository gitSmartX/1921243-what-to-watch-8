import { AUTH_STATUS, DISPLAY_FILMS_NUM, GENRES_LIST, NAV_LINK_NAME } from '../constants/constant';
//import { FILM_DATA_LIST } from '../mocks/films';
import { Actions, ActionType } from '../types/action';
import { State } from '../types/state';

const initialState = {
  activeGenre:  GENRES_LIST.ALL,
  filmData: {  id: '',
    name: '',
    posterImage: '',
    previewImage: '',
    backgroundImage: '',
    backgroundColor: '',
    videoLink: '',
    previewVideoLink: '',
    description: '',
    rating: 0,
    scoresCount: 0,
    director: '',
    starring: [''],
    runTime: 0,
    genre: '',
    released: 0,
    isFavorite: false},
  filmsList: [],
  filmsListSimilar: [],
  reviewList: [],
  filmsDisplayCount: (DISPLAY_FILMS_NUM),
  authorizationStatus: AUTH_STATUS.UNKNOWN,
  userData: {id: '', email: '', name: '', avatarUrl: '', token: ''},
  isDataLoaded: false,
  activeNavLink: NAV_LINK_NAME.OVERVIEW,
};

export const reducer = (state: State = initialState, action: ActionType): State => {
  switch(action.type) {
    case Actions.LoadFilmData:
      return{...state, filmData: action.payload};
    case Actions.GetFilmsList:
      return {...state};
    case Actions.SetDisplayFilmsCount:
      return {
        ...state,
        filmsDisplayCount: state.filmsDisplayCount + DISPLAY_FILMS_NUM};
    case Actions.ResetDisplayFilmsCount:
      return {
        ...state,
        filmsDisplayCount: DISPLAY_FILMS_NUM,
      };
    case Actions.GetFilmsListByGenre:
      return {
        ...state,
        filmsList: state.activeGenre === GENRES_LIST.ALL ? state.filmsList : state.filmsList.filter((film) => film.genre === state.activeGenre),
      };
    case Actions.SetActiveGenre:
      return {...state, activeGenre: action.payload};
    case Actions.LoadfilmsList: {
      const filmsList = action.payload;
      return {...state, filmsList, isDataLoaded: true};
    }
    case Actions.LoadSimilarFilms: {
      return {...state, filmsListSimilar: action.payload};
    }
    case Actions.RequareAuthorization: {
      return {...state, authorizationStatus: action.payload};
    }
    case Actions.RequareLogout: {
      return {...state, authorizationStatus: AUTH_STATUS.NO_AUTH};
    }
    case Actions.SetUserData: {
      return {...state, userData: action.payload};
    }
    case Actions.LoadReviewList: {
      return {...state, reviewList: action.payload};
    }
    case Actions.SetActiveNavLink: {
      return {...state, activeNavLink: action.payload};
    }
    default:
      return state;
  }
};
