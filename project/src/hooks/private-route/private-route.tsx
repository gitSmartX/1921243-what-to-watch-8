import { Route, Redirect} from 'react-router-dom';
import { PrivateRouteProps } from '../../types/types';
import { ROUTE_PATH } from '../../constants/constant';

function PrivateRoute({ ...rest }: PrivateRouteProps): JSX.Element {
  // eslint-disable-next-line no-console
  console.log(rest);
  return (
    <Route {...rest}>
      {rest.isAccess ? rest.children : <Redirect to={ROUTE_PATH.ERROR} />}
    </Route>
  );
}

export default PrivateRoute;
