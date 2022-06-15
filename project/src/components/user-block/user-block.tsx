import { Link } from 'react-router-dom';
import { AUTH_STATUS, ROUTE_PATH } from '../../constants/constant';
import { connect, ConnectedProps } from 'react-redux';
import { State } from '../../types/state';
import { logoutAction } from '../../store/api-actions';
import { ThunkAppDispatch } from '../../types/action';

const mapStateToProps = ({authorizationStatus, userData}: State) => ({
  authorizationStatus,
  userData,
});

const mapDispatchToProps = (dispatch: ThunkAppDispatch) => ({
  onLogout(){dispatch(logoutAction());},
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type ProprsFromRedux = ConnectedProps<typeof connector>;

function UserBlock({authorizationStatus, userData, onLogout}: ProprsFromRedux): JSX.Element {
  return(
    <ul className="user-block">
      <li className="user-block__item">
        <div className="user-block__avatar">
          {authorizationStatus === AUTH_STATUS.AUTH && userData.id !== '' ? <img src={userData.avatarUrl} alt="User avatar" width="63" height="63" /> : null }
        </div>
      </li>
      <li className="user-block__item">
        {authorizationStatus === AUTH_STATUS.AUTH && userData.id !== '' ?
          <Link className="user-block__link" onClick={(evt) => {evt.preventDefault(); onLogout();}} to={''}>Sign out</Link> :
          <Link className="user-block__link" to = {ROUTE_PATH.LOGIN}>Sign in</Link>}
      </li>
    </ul>
  );
}

export {UserBlock};

export default connector(UserBlock);

