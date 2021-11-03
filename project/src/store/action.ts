import { FILM_DATA_LIST } from '../mocks/films';
import { Actions } from '../types/action';

export const getFilmsList = () => ({
  type: Actions.GetFilmsList,
  payload: FILM_DATA_LIST,
} as const);

export const getFilmsListByGenre = (genre: string) => ({
  type: Actions.GetFilmsListByGenre,
  payload: FILM_DATA_LIST.filter((film) => film.genre === genre),
} as const);

export const setActiveGenre = (genre: string) => ({
  type: Actions.SetActiveGenre,
  payload: genre,
} as const);
