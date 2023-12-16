import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../Hooks/useFetch';
import { useNavigate  } from 'react-router-dom';

export default function GenrePage() {
  const navigate = useNavigate();
  const handleClick = (id) => {
    navigate(`/${id}`);
  }
  
  const { genre } = useParams(); 
  const { data: genreGames, error, loading } = useFetch(`${import.meta.env.VITE_BASE_URL}games?key=${import.meta.env.VITE_API_KEY}&genres=${genre}`);
  
  return (
    <div style={{
      width: '80%'
    }}>
      <h1 style={{
        margin: '0', 
        padding: '0'
      }}> {genre} Games</h1>
      <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '10px',
          gridAutoRows: 'minmax(100px, auto)'
      }}>
        {genreGames && genreGames.map((game) => (
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