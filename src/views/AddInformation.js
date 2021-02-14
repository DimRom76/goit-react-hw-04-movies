import routes from '../routes';
import { NavLink, Route } from 'react-router-dom';

import CreditsView from './CreditsViews';
import ReviewsView from './ReviewsViews';
import VideosView from './VideosViews';

export default function AddInformation({
  backPage,
  match,
  credits,
  reviews,
  videos,
}) {
  return (
    <div className="addInformation">
      <p>Дополнительная информация</p>
      <ul>
        <li>
          <NavLink
            to={{
              pathname: `${match.url}${routes.credits}`,
              state: { backPage },
            }}
          >
            В главных ролях
          </NavLink>
        </li>
        <li>
          <NavLink
            to={{
              pathname: `${match.url}${routes.reviews}`,
              state: { backPage },
            }}
          >
            Обзоры
          </NavLink>
        </li>
        <li>
          <NavLink
            to={{
              pathname: `${match.url}${routes.videos}`,
              state: { backPage },
            }}
          >
            Трейлеры
          </NavLink>
        </li>
      </ul>
      <hr />
      <Route
        path={`${match.path}${routes.credits}`}
        render={props => <CreditsView {...props} credits={credits} />}
        //component={CreditsView}
      />
      <Route
        path={`${match.path}${routes.reviews}`}
        render={props => <ReviewsView {...props} data={reviews} />}
        //component={ReviewsView}
      />
      <Route
        path={`${match.path}${routes.videos}`}
        render={props => <VideosView {...props} data={videos} />}
        //component={VideosView}
      />
    </div>
  );
}
