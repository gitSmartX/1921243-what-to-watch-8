import { IMAGE_DATA, RATING_LEVEL } from '../../constants/constant';

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

//Fantastic Beasts: The Crimes of Grindelwald
function getImgName(name: string): string{
  return IMAGE_DATA.imgSource + name.replaceAll(':','').split(' ').join('-').toLowerCase() + IMAGE_DATA.imgType;
}

export {getRatingLevel, getImgName};
