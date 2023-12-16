import { useParams } from 'react-router-dom';
import useFetch from '../Hooks/useFetch';
import { useNavigate  } from 'react-router-dom';


export default function StorePage() {

  const navigate = useNavigate();
  const handleClick = (id) => {
    navigate(`/${id}`);
  }

  const { store } = useParams(); 
  const { data: storeGames, error, loading } = useFetch(`${import.meta.env.VITE_BASE_URL}games?key=${import.meta.env.VITE_API_KEY}&store=${store}`);
  console.log(store);
  return (
    <div style={{
      width: '80%'
    }}>
      <h1 style={{
        margin: '0', 
        padding: '0'
      }}> {store} Games</h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio atque rem vel minus nisi distinctio vitae, delectus magnam amet ad a ipsam id alias tempora nulla dolorum, iusto sed corrupti.</p>
      <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '10px',
          gridAutoRows: 'minmax(100px, auto)'
      }}>
        {storeGames && storeGames.map((game) => (
          <article key={game.id}>
            <h4>{game.name}</h4>
            <img src={game.background_image} alt={'game image'} />
            <p>{game.stores.map(stores => stores.name).join(', ')}</p>
            <button onClick={() => handleClick(game.id)}>Dettagli</button>
          </article>
        ))}
      </div>
    </div>
  )
}