/* eslint-disable camelcase */
import type { RouteProps } from 'react-router-dom';
import { Token } from '../services/token';

type FilmData = {
  id: string,
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
  runTime: number,
  genre: string,
  released: number,
  isFavorite: boolean,
}

export type FilmDataResponse = {
  id: string,
  name: string,
  poster_image: string,
  preview_image: string,
  background_image: string,
  background_color: string,
  video_link: string,
  preview_video_link: string,
  description: string,
  rating: number,
  scores_count: number,
  director: string,
  starring: string[],
  run_time: number,
  genre: string,
  released: number,
  is_favorite: boolean,
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

type CommentPost = {
  rating: number,
  comment: string,
}

type User = {
  email: string,
  password: string
}

type AuthData = {
  email: string,
  password: string,
}

type UserData = {
  id: string,
  email: string,
  name: string,
  avatarUrl: string,
  token: Token,
}

type IdString = {
  id: string
}

type PrivateRouteProps = RouteProps & {isAccess?: boolean};

export type {FilmData, FilmDataList, FilmCardDate, FilmCardProps, FilmCardPropsList, Genre, GenresList, PrivateRouteProps, ReviewType, ReviewsList, CommentPost, User, UserData, AuthData, IdString};
