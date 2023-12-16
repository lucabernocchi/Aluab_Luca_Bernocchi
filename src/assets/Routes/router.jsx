import { createBrowserRouter } from 'react-router-dom';
import Root from '../Pages/Root';
import Layer from '../Pages/Layer';
import Home from '../Pages/Homepage';
import { preLoadFilters } from '../Pages/Homepage';
import GenrePage from '../Pages/GenrePage';
import StorePage from '../Pages/StorePage';
import DetailPage from '../Pages/DetailPage';
import NotFoundPage from '../Pages/NotFoundPage';
import Login from '../Pages/Login';
import Register from '../Pages/Register';

export const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Layer />,
        loader: preLoadFilters,
        children: [
          {
            path: "/",
            element: <Home />,
          },
          {
            path: "/game/:id",
            element: <DetailPage />,
          },
          {
            path: "/games/:genre",
            element: <GenrePage />,
          },
          {
            path: "/stores/:store",
            element: <StorePage />,
          },
        ],
      },
      {
        path: "/*",
        element: <NotFoundPage />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/Register',
        element: <Register />,
      },
    ],
  },
  
]);