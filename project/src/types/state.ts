import { FilmData } from './types';

export type State = {
  activeGenre: string,
  filmsList: FilmData[],
  filmsDisplayCount: number,
};
