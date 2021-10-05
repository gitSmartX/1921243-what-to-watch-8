import { Route, Redirect} from 'react-router-dom';
import { PrivateRouteProps } from '../../types/types';
import { ROUTE_PATH } from '../app/constant';

function PrivateRoute({ ...rest }: PrivateRouteProps) {
  return (
    <Route {...rest}>
      {rest.isAccess ? rest.children : <Redirect to={ROUTE_PATH.ERROR} />}
    </Route>
  );
}

export default PrivateRoute;
