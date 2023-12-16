import { Link } from 'react-router-dom';

export default function AppNavbar() {
  return (
    <nav>
      <ul>
        <li><strong>AulabGamerHub</strong></li>
      </ul>
      <ul>
        <li>
        <Link to={`/`}>
          Home
        </Link>
        </li>
        <li>
        <Link to={`/login`}>
          Login
        </Link>
        </li>
        <li>
          <a href="/Register">Register</a>
        </li>
      </ul>
    </nav>
  )
}

/*<Link to={`/login`}></Link>
</Link>*/