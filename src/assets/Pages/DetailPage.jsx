import {useParams} from 'react-router-dom';
import  useFetch  from "../Hooks/useFetch";

function DetailPage() {
    const {id} = useParams();
    const { data: game, error, loading } = useFetch(`${import.meta.env.VITE_BASE_URL}games/${id}?key=${import.meta.env.VITE_API_KEY}`, true);
    const desc = game.description
    return (
        <div>
          <h2>{game.name}</h2>
          <img src={game.background_image} alt={game.name} className="DetailPage"/>
          <p>desc</p>
        </div>
      );
    }
export default DetailPage