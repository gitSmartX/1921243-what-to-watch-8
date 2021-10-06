import type {FilmCardDate, FilmCardProps, Genre} from '../../types/types';

const FILM_CARD_DATA: FilmCardDate = {
  title: 'The Grand Budapest Hotel',
  genre: 'Drama',
  year: 2014,
};

const FILM_TITLES: FilmCardProps[] = [
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

const MIN_RATE_STARS = 1;
const MAX_RATE_STARS = 10;

const CATALOG_GENRES_LIST: Genre[] = [
  {
    name: 'All genres',
    isActive: true,
  },
  {
    name: 'Comedies',
    isActive: false,
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
  FILM_ID_REVIEW = '/films/:id/review',
  PLAYER_ID = '/player/:id',
  ERROR = '/error404',
}

enum IMAGE_DATA {
  imgSource = 'img/',
  imgType = '.jpg',
}

export {FILM_CARD_DATA, FILM_TITLES, MAX_RATE_STARS, MIN_RATE_STARS, CATALOG_GENRES_LIST, ROUTE_PATH, IMAGE_DATA};
