import Main from '../main/main';

type FilmCardDate = {
  title: string,
  genre: string,
  year: number,
}

const FILM_CARD_DATA: FilmCardDate = {
  title: 'The Grand Budapest Hotel',
  genre: 'Drama',
  year: 2014,
};

function App(): JSX.Element {
  return (
    <Main
      filmCardDate = {FILM_CARD_DATA}
    />
  );
}

export default App;
