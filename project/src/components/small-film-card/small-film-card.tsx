import { FilmData } from '../../types/types';
import { IMAGE_DATA, ROUTE_PATH } from '../../constants/constant';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function SmallFilmCard(filmData: FilmData): JSX.Element{
  const[filmId, setFilmId] = useState(filmData.id.toString());
  const newTo = {
    pathname: ROUTE_PATH.FILM_ID.replace(':id', filmId),
    state: {...filmData},
  };

  return(
    <article
      className="small-film-card catalog__films-card"
      onMouseEnter = {() => setFilmId(filmId)}
      onMouseLeave ={() => setFilmId(filmId)}
    >
      <div className="small-film-card__image">
        <img src={getImgName(filmData.name)} alt={filmData.name} width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <Link to={newTo}
          className="small-film-card__link"
          // eslint-disable-next-line no-console
          onClick={() => setFilmId(filmId)}
        >
          {filmData.name}
        </Link>
      </h3>
    </article>
  );
}

//Fantastic Beasts: The Crimes of Grindelwald
function getImgName(name: string): string{
  return IMAGE_DATA.imgSource + name.replaceAll(':','').split(' ').join('-').toLowerCase() + IMAGE_DATA.imgType;
}

export default SmallFilmCard;
