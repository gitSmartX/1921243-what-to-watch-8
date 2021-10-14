import type { RouteProps } from 'react-router-dom';

type FilmData = {
  id: number,
  name: string,
  posterImage: string,
  previewImage: string,
  backgroundImage: string,
  backgroundColor: string,
  videoLink: string,
  previewVideoLink: string,
  description: string,
  rating: number,
  scoresCount: number,
  director: string,
  starring: string[],
  runTime: number
  genre: string,
  released: number
  isFavorite: boolean,
}
type FilmDataList = {
  filmDataList: FilmData[];
}

type FilmCardDate = {
  title: string,
  genre: string,
  year: number,
}

type FilmCardProps = {
  filmTitle: string;
}

type FilmCardPropsList = {
  filmCardPropsList: FilmCardProps[];
}

type Genre = {
  name: string;
  isActive: boolean;
}

type GenresList = {
  genresList: Genre[];
}

type PrivateRouteProps = RouteProps & {isAccess?: boolean};

export type {FilmData, FilmDataList, FilmCardDate, FilmCardProps, FilmCardPropsList, Genre, GenresList, PrivateRouteProps};
