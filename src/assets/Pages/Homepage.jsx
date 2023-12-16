import { useEffect, useState } from "react"
import useDebouceSearch from '../hooks/useDebouceSearch';
import  useFetch  from "../Hooks/useFetch";
import { useNavigate  } from 'react-router-dom';

export async function getGeners() {
  const response = await fetch(`${import.meta.env.VITE_BASE_URL}genres?key=${import.meta.env.VITE_API_KEY}`);
  const json = await response.json(); 
  return json.results; 
}

export async function getStores() {
  const response = await fetch(`${import.meta.env.VITE_BASE_URL}stores?key=${import.meta.env.VITE_API_KEY}`);
  const json = await response.json(); 
  return json.results; 
}
export async function preLoadFilters() {
  const genres = await getGeners(); 
  const stores = await getStores();

  return {
    genres, 
    stores
  }; 
}

export default function Home() {
  const [pagination, setPagination] = useState(1);
  const [search, setSearch] = useState('');

  const debouncedSearch = useDebouceSearch(search);

  const handleSearch = (event) => {
    setSearch(event.currentTarget.value);
  }
  const navigate = useNavigate();
  
  const handleClick = (id) => {
    navigate(`/game/${id}`);
  }
  
      
  const { data: games, error, loading } = useFetch(`${import.meta.env.VITE_BASE_URL}games?key=${import.meta.env.VITE_API_KEY}&page=${pagination}&page_size=21&search=${search}`, false);

  return (
    <div style={{
      width: '80%'
    }}>
      <h1 style={{
        margin: '0', 
        padding: '0', 
        fontSize: '3rem'
      }}>Nuovi e di tendenza</h1>
      <p>Dati basati su giocatori e data di pubblicazione.</p>    

      <input type="text" placeholder="cerca il tuo gioco..." onChange={handleSearch}/>

      {error && <p style={{
        color: 'red'
      }}>{error}</p>}

      {loading && <progress></progress>}

      <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '10px',
          gridAutoRows: 'minmax(100px, auto)'
      }}>
        {games && games.map((game) => (
          <article key={game.id}>
            <h4>{game.name}</h4>
            <img src={game.background_image} alt={'game image'} />
            <p>{game.genres.map(genre => genre.name).join(', ')}</p>
            <button onClick={() => handleClick(game.id)}>Dettagli</button>
          </article>
        ))}
      </div>
    </div>
  )
}

//<Link to={`/${game.id}`}></Link>