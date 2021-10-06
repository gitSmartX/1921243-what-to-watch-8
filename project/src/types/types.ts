import type { RouteProps } from 'react-router-dom';

type FilmCardDate = {
  title: string,
  genre: string,
  year: number,
}

type FilmCardProps = {
  filmTitle: string;
}

type FilmTitleList = {
  filmTitleList: string[];
}

type Genre = {
  name: string;
  isActive: boolean;
}

type GenresList = {
  genresList: Genre[];
}

type PrivateRouteProps = RouteProps & {isAccess?: boolean};

export type {FilmCardDate, FilmCardProps, FilmTitleList, Genre, GenresList, PrivateRouteProps};
