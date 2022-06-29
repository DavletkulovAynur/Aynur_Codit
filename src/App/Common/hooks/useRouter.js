import { useMemo } from "react";
import {
  useParams,
  useLocation,
  useNavigate,
} from "react-router-dom";
// import queryString from 'query-string'

export function useRouter() {
  const params = useParams();
  const location = useLocation();
  const history = useNavigate();
  // const match = useMatch();

  return useMemo(() => {
    return {
      push: history.push,
      replace: history.replace,
      pathname: location.pathname,
      location,
      history,
    };
  }, [params, location, history]);
}
