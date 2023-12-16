import { useLoaderData } from 'react-router-dom';
import Genres from './Genres';
import Stores from './Stores';

export default function AppSideBar() {
 const {
  genres, 
  stores
} = useLoaderData();

  return (
    <div style={{
      width: '20%', 
    }}>
      <Genres genres={genres} />
      <Stores stores={stores} />
    </div>
  )
}