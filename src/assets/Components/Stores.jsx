import { Link } from 'react-router-dom';

export default function Stores({ stores }) {
    return (
      <aside>
        <p>Lista degli store</p>
        <nav>
        <ul>
        {stores.map((store) => (
          <li key={store.id}>
            <Link to={`/stores/${store.slug}`}>
              {store.name}
            </Link>
            </li>
          ))}
        </ul>
        </nav>
      </aside>
    )
  }


