import { getFilmsList, getFilmsListByGenre, setActiveGenre } from '../store/action';

export enum Actions {
  SetActiveGenre = 'main/setActiveGenre',
  GetFilmsList = 'main/getFilmsList',
  GetFilmsListByGenre = 'main/getFilmsListByGenre'
}

export type ActionType =
| ReturnType<typeof getFilmsList>
| ReturnType<typeof getFilmsListByGenre>
| ReturnType<typeof setActiveGenre>
