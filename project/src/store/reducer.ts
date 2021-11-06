import { GENRES_LIST } from '../constants/constant';
import { FILM_DATA_LIST } from '../mocks/films';
import { Actions, ActionType } from '../types/action';
import { State } from '../types/state';

const initialState = {
  activeGenre:  GENRES_LIST.ALL,
  filmsList: FILM_DATA_LIST,
};

export const reducer = (state: State = initialState, action: ActionType): State => {
  switch(action.type) {
    case Actions.GetFilmsList:
      return {...state};
    case Actions.GetFilmsListByGenre:
      return {...state, filmsList: action.payload};
    case Actions.SetActiveGenre:
      return {...state, activeGenre: action.payload};
    default:
      return state;
  }
};
