import { setDisplayFilmsCount, getFilmsList, getFilmsListByGenre, resetDisplayFilmsCount, setActiveGenre } from '../store/action';

export enum Actions {
  SetActiveGenre = 'main/setActiveGenre',
  GetFilmsList = 'main/getFilmsList',
  SetDisplayFilmsCount = 'main/setDisplayFilmsCount',
  ResetDisplayFilmsCount = 'main/resetDisplayFilmsCount',
  GetFilmsListByGenre = 'main/getFilmsListByGenre'
}

export type ActionType =
| ReturnType<typeof setDisplayFilmsCount>
| ReturnType<typeof getFilmsList>
| ReturnType<typeof getFilmsListByGenre>
| ReturnType<typeof setActiveGenre>
| ReturnType<typeof resetDisplayFilmsCount>
