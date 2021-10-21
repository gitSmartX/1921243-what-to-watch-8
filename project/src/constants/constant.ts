import type {FilmCardDate, FilmCardProps, Genre} from '../types/types';

const SITE_NAME = 'WTW';

const FILM_CARD_DATA: FilmCardDate = {
  title: 'The Grand Budapest Hotel',
  genre: 'Drama',
  year: 2014,
};

const ALL_FILMS: FilmCardProps[] = [
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

const FILM_TITLES: FilmCardProps[] = [
  {filmTitle: 'Fantastic Beasts: The Crimes of Grindelwald'},
  {filmTitle: 'Bohemian Rhapsody'},
  {filmTitle: 'Macbeth'},
  {filmTitle: 'Aviator'},
];

const MY_FILMS: FilmCardProps[] = [
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

const MIN_RATE_STARS = 0;
const MAX_RATE_STARS = 10;

const CATALOG_GENRES_LIST: Genre[] = [
  {
    name: 'All genres',
    isActive: false,
  },
  {
    name: 'Comedies',
    isActive: true,
  },
  {
    name: 'Crime',
    isActive: false,
  },
  {
    name: 'Documentary',
    isActive: false,
  },
  {
    name: 'Dramas',
    isActive: false,
  },
  {
    name: 'Horror',
    isActive: false,
  },
  {
    name: 'Kids & Family',
    isActive: false,
  },
  {
    name: 'Romance',
    isActive: false,
  },
  {
    name: 'Sci-Fi',
    isActive: false,
  },
  {
    name: 'Thrillers',
    isActive: false,
  },
];

enum ROUTE_PATH {
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

enum IMAGE_DATA {
  imgSource = 'img/',
  imgType = '.jpg',
}

enum BUTTON_NAME {
  ADD_REVIEW = 'Add review',
  SHOW_MORE = 'Show more',
  PLAY = 'Play',
  MY_LIST = 'My list',
}

enum NAV_LINK_NAME {
  OVERVIEW = 'Overview',
  DETAILS = 'Details',
  REVIEWS = 'Reviews',
}

enum PLAYER_BUTTON_TYPE {
  PLAY = 'Play',
  PAUSE = 'Pause',
  FULL_SCREEN = 'Full screen',
  EXIT = 'Exit'
}

enum RATING_LEVEL {
  BAD = 'Bad',
  NORMAL = 'Normal',
  GOOD = 'Good',
  VERY_GOOD = 'Very good',
  AWESOME = 'Awesome'
}

enum FILM_CARD_IMAGE {
  WIDTH = 280,
  HEIGHT = 175
}

export {SITE_NAME, FILM_CARD_DATA, ALL_FILMS, MAX_RATE_STARS, MIN_RATE_STARS, CATALOG_GENRES_LIST, FILM_TITLES, MY_FILMS, ROUTE_PATH, IMAGE_DATA,BUTTON_NAME,NAV_LINK_NAME,PLAYER_BUTTON_TYPE, RATING_LEVEL, FILM_CARD_IMAGE};
