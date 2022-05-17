import { DISPLAY_FILMS_NUM, GENRES_LIST } from '../constants/constant';
import { FILM_DATA_LIST } from '../mocks/films';
import { Actions, ActionType } from '../types/action';
import { State } from '../types/state';

const initialState = {
  activeGenre:  GENRES_LIST.ALL,
  filmsList: FILM_DATA_LIST,
  filmsDisplayCount: (DISPLAY_FILMS_NUM),
};

export const reducer = (state: State = initialState, action: ActionType): State => {
  switch(action.type) {
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
    case Actions.LoadFilmList: {
      const filmsList = action.payload;
      return {...state, filmsList};
    }
    default:
      return state;
  }
};
