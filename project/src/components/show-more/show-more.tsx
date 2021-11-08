import { BUTTON_NAME } from '../../constants/constant';

type ShowMoreType = {
  onShowMore: () => void;
}

function ShowMore({onShowMore}: ShowMoreType ): JSX.Element{
  return(
    <div className="catalog__more">
      <button className="catalog__button" type="button"  onClick = {() => onShowMore()}>{BUTTON_NAME.SHOW_MORE}</button>
    </div>
  );
}

export {ShowMore};
