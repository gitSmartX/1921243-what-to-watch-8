import { FILM_DATA_LIST } from '../mocks/films';
import { Actions } from '../types/action';

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
