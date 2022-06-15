import type {FilmCardDate, FilmCardProps} from '../types/types';

export const SITE_NAME = 'WTW';

export const FILM_CARD_DATA: FilmCardDate = {
  title: 'The Grand Budapest Hotel',
  genre: 'Drama',
  year: 2014,
};

export const ALL_FILMS: FilmCardProps[] = [
  {filmTitle: 'Fantastic Beasts: The Crimes of Grindelwald'},
  {filmTitle: 'Bohemian Rhapsody'},
  {filmTitle: 'Macbeth'},
  {filmTitle: 'Aviator'},
  {filmTitle: 'We need to talk about Kevin'},
  {filmTitle: 'What We Do in the Shadows'},
  {filmTitle: 'Revenant'},
  {filmTitle: 'Johnny English'},
  {filmTitle: 'Shutter Island'},
  {filmTitle: 'Pulp Fiction'},
  {filmTitle: 'No Country for Old Men'},
  {filmTitle: 'Snatch'},
  {filmTitle: 'Moonrise Kingdom'},
  {filmTitle: 'Seven Years in Tibet'},
  {filmTitle: 'Midnight Special'},
  {filmTitle: 'War of the Worlds'},
  {filmTitle: 'Dardjeeling Limited'},
  {filmTitle: 'Orlando'},
  {filmTitle: 'Mindhunter'},
  {filmTitle: 'Midnight Special'},
];

export const FILM_TITLES: FilmCardProps[] = [
  {filmTitle: 'Fantastic Beasts: The Crimes of Grindelwald'},
  {filmTitle: 'Bohemian Rhapsody'},
  {filmTitle: 'Macbeth'},
  {filmTitle: 'Aviator'},
];

export const MY_FILMS: FilmCardProps[] = [
  {filmTitle: 'Fantastic Beasts: The Crimes of Grindelwald'},
  {filmTitle: 'Bohemian Rhapsody'},
  {filmTitle: 'Macbeth'},
  {filmTitle: 'Aviator'},
  {filmTitle: 'We need to talk about Kevin'},
  {filmTitle: 'What We Do in the Shadows'},
  {filmTitle: 'Revenant'},
  {filmTitle: 'Johnny English'},
  {filmTitle: 'Shutter Island'},
];

export const MIN_RATE_STARS = 0;
export const MAX_RATE_STARS = 10;
export const DISPLAY_FILMS_NUM = 8;

export enum GENRES_LIST {
  ALL = 'All genres',
  COMEDY = 'Comedies',
  CRIME = 'Crime',
  DOC = 'Documentary',
  DRAMA = 'Dramas',
  HORROR = 'Horror',
  KIDS_FAMILY = 'Kids & Family',
  ROMANCE = 'Romance',
  SCI_FI = 'Sci-Fi',
  THRILLERS = 'Thrillers',
}

export enum ROUTE_PATH {
  ROOT = '/',
  LOGIN = '/login',
  MYLIST = '/mylist',
  FILM_ID = '/films/:id',
  FILM_ID_DETAILS = '/films/:id/details',
  FILM_ID_REVIEW = '/films/:id/review',
  FILM_ID_ADD_REVIEW = '/films/:id/addReview',
  PLAYER_ID = '/player/:id',
  ERROR = '/error404'
}

export enum IMAGE_DATA {
  imgSource = 'img/',
  imgType = '.jpg',
}

export enum BUTTON_NAME {
  ADD_REVIEW = 'Add review',
  SHOW_MORE = 'Show more',
  PLAY = 'Play',
  MY_LIST = 'My list',
}

export enum NAV_LINK_NAME {
  OVERVIEW = 'Overview',
  DETAILS = 'Details',
  REVIEWS = 'Reviews',
}

export enum PLAYER_BUTTON_TYPE {
  PLAY = 'Play',
  PAUSE = 'Pause',
  FULL_SCREEN = 'Full screen',
  EXIT = 'Exit'
}

export enum RATING_LEVEL {
  BAD = 'Bad',
  NORMAL = 'Normal',
  GOOD = 'Good',
  VERY_GOOD = 'Very good',
  AWESOME = 'Awesome'
}

export enum FILM_CARD_IMAGE {
  WIDTH = 280,
  HEIGHT = 175
}

export enum AUTH_STATUS {
  AUTH = 'Auth',
  NO_AUTH = 'No Auth',
  UNKNOWN = 'Unknown',
}

export enum API_ROUTE {
  FILMS = '/films',
  FILM = '/films/:id',
  FILM_SIMILAR = '/films/:id/similar',
  LOGIN = '/login',
  LOGOUT = '/logout',
  PROMO = '/promo',
  FAVORITE = '/favorite',
  COMMENTS = '/comments/:id'
}
