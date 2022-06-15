import { FilmData, FilmDataResponse } from '../types/types';

export const mapFilmListResponse = (data: FilmDataResponse[]): FilmData[] =>
  data.map((obj) => (
    {
      id: obj.id,
      name: obj.name,
      posterImage: obj.poster_image,
      previewImage: obj.preview_image,
      backgroundImage: obj.background_image,
      backgroundColor: obj.background_color,
      videoLink: obj.video_link,
      previewVideoLink: obj.preview_video_link,
      description: obj.description,
      rating: obj.rating,
      scoresCount: obj.scores_count,
      director: obj.director,
      starring: obj.starring,
      runTime: obj.run_time,
      genre: obj.genre,
      released: obj.released,
      isFavorite: obj.is_favorite,
    }));

export const mapFilmDataResponse = (data: FilmDataResponse): FilmData =>  ({
  id: data.id,
  name: data.name,
  posterImage: data.poster_image,
  previewImage: data.preview_image,
  backgroundImage: data.background_image,
  backgroundColor: data.background_color,
  videoLink: data.video_link,
  previewVideoLink: data.preview_video_link,
  description: data.description,
  rating: data.rating,
  scoresCount: data.scores_count,
  director: data.director,
  starring: data.starring,
  runTime: data.run_time,
  genre: data.genre,
  released: data.released,
  isFavorite: data.is_favorite,
});
