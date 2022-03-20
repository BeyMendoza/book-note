import { useParams, useLocation, useMatch, useNavigate } from 'react-router-dom';

export const withRouter = Component => props => {
  const params = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  return <Component {...props} params={params} location={location} navigate={navigate} />;
};
