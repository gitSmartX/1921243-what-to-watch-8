import type { RouteProps } from 'react-router-dom';

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

export type {FilmCardDate, FilmCardProps, FilmCardPropsList, Genre, GenresList, PrivateRouteProps};
