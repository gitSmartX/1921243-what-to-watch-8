import { RATING_LEVEL } from '../../constants/constant';

function getRatingLevel(rating: number): string {
  if(rating < 3){
    return RATING_LEVEL.BAD;
  }
  else if (rating < 5) {
    return RATING_LEVEL.NORMAL;
  }
  else if (rating < 8) {
    return RATING_LEVEL.GOOD;
  }
  else if (rating < 10) {
    return RATING_LEVEL.VERY_GOOD;
  }
  return RATING_LEVEL.AWESOME;
}

export default getRatingLevel;
