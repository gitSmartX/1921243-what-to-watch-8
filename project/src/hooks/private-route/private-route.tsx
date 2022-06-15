import { Route, Redirect, RouteProps} from 'react-router-dom';
import { AUTH_STATUS, ROUTE_PATH } from '../../constants/constant';
import { connect, ConnectedProps } from 'react-redux';
import { State } from '../../types/state';

const mapStateToProps = ({authorizationStatus, userData}:State) => ({
  authorizationStatus,
  userData,
});

const connector = connect(mapStateToProps);

type ProprsFromRedux = ConnectedProps<typeof connector>;

type PrivateRouteProps = RouteProps & ProprsFromRedux;

function PrivateRoute({authorizationStatus,userData, ...rest}: PrivateRouteProps): JSX.Element {
  // eslint-disable-next-line no-console
  console.log(rest);
  return (
    <Route {...rest}>
      {authorizationStatus === AUTH_STATUS.AUTH && userData.id !== '' ? rest.children : <Redirect to={ROUTE_PATH.ERROR} />}
    </Route>
  );
}

export {PrivateRoute};

export default connector(PrivateRoute);
