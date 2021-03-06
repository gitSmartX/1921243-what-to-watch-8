import React, { useRef } from 'react';
import { FILM_CARD_IMAGE } from '../../constants/constant';
import { FilmData } from '../../types/types';

type VideoPlayerPreviewProps = Pick<FilmData, 'posterImage' | 'previewVideoLink'> & {
  isPlaying: boolean
};


function VideoPlayerPreview({posterImage, previewVideoLink, isPlaying}: VideoPlayerPreviewProps ): JSX.Element{
  const videoRef = useRef<HTMLVideoElement | null>(null);
  if(isPlaying) {
    videoRef.current?.play();
  }
  if(!isPlaying){
    videoRef.current?.load();
  }

  return(
    <video
      width= {FILM_CARD_IMAGE.WIDTH}
      height= {FILM_CARD_IMAGE.HEIGHT}
      muted
      poster = {posterImage}
      src = {previewVideoLink}
      ref = {videoRef}
    />
  );
}

export default VideoPlayerPreview;
