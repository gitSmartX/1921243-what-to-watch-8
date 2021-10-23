import { FilmData } from '../../types/types';
import { ROUTE_PATH } from '../../constants/constant';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import VideoPlayerPreview from '../video-player-preview/video-player-preview';

function SmallFilmCard(filmData: FilmData): JSX.Element{
  //const[filmId, setFilmId] = useState(filmData.id.toString());
  const [isMouseEnter, setMouseEnter] = useState<boolean>(false);
  const [isPlaying, setPlaying] = useState<boolean>(false);

  const [timer, setTimer] = useState<boolean | number | ReturnType<typeof setTimeout>>(false);

  useEffect(() => {
    if(isMouseEnter) {
      const timeout = setTimeout(()=> setPlaying(true), 1000);
      // eslint-disable-next-line no-console
      console.log('setTimer');
      setTimer(timeout);
    }
    setPlaying(false);
    // eslint-disable-next-line no-console
    console.log('clearTimer');
    timer && clearTimeout(timer as number);
  }, [isMouseEnter]);

  function playVideo() {
    setMouseEnter(true);
  }

  function stopVideo() {
    setMouseEnter(false);
  }

  return(
    <article
      className="small-film-card catalog__films-card"
      onMouseEnter = {playVideo}
      onMouseLeave = {stopVideo}
    >
      <div className="small-film-card__image">
        <VideoPlayerPreview
          posterImage = {filmData.posterImage}
          previewVideoLink = {filmData.previewVideoLink}
          isPlaying = {isPlaying}
        />
      </div>
      <h3 className="small-film-card__title">
        <Link to={ROUTE_PATH.FILM_ID.replace(':id', filmData.id.toString())}
          className="small-film-card__link"
        >
          {filmData.name}
        </Link>
      </h3>
    </article>
  );
}

export default SmallFilmCard;
