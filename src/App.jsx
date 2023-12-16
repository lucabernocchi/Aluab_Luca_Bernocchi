import { RouterProvider } from 'react-router-dom';
import { AppRouter } from './assets/Routes/router';

function App() {
  return <RouterProvider router={AppRouter} />
}

export default App