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
}

type GenresList = {
  genresList: Genre[];
}

type ReviewType = {
  id: number,
  user: {
    id: number,
    name: string,
  },
  rating: number,
  comment: string,
  date: Date,
}

type ReviewsList = {
  reviewsList: ReviewType[];
};

type ReviewPost = {
  rating: number,
  comment: string,
}

type User = {
  email: string,
  password: string
}

type AuthInfo = {
  id: number,
  email: string,
  name: string,
  'avatar_url': string,
  token: string
}

type PrivateRouteProps = RouteProps & {isAccess?: boolean};

export type {FilmData, FilmDataList, FilmCardDate, FilmCardProps, FilmCardPropsList, Genre, GenresList, PrivateRouteProps, ReviewType, ReviewsList, ReviewPost, User, AuthInfo};
