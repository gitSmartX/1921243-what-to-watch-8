import { FilmCardProps } from '../../types/types';
import { IMAGE_DATA } from '../../constants/constant';


function SmallFilmCard({filmTitle}: FilmCardProps): JSX.Element{
  return(
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img src={getImgName(filmTitle)} alt={filmTitle} width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <a className="small-film-card__link" href="film-page.html">{filmTitle}</a>
      </h3>
    </article>
  );
}

//Fantastic Beasts: The Crimes of Grindelwald
function getImgName(name: string): string{
  return IMAGE_DATA.imgSource + name.replaceAll(':','').split(' ').join('-').toLowerCase() + IMAGE_DATA.imgType;
}

export default SmallFilmCard;
