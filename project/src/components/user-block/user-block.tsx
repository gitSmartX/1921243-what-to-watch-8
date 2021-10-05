import { Link } from 'react-router-dom';
import { ROUTE_PATH } from '../app/constant';

function UserBlock(): JSX.Element {
  return(
    <ul className="user-block">
      <li className="user-block__item">
        <div className="user-block__avatar">
          <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
        </div>
      </li>
      <li className="user-block__item">
        <Link className="user-block__link" to = {ROUTE_PATH.LOGIN}>Sign out</Link>
      </li>
    </ul>
  );
}

export default UserBlock;
