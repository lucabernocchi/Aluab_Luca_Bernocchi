export default function AppFooter() {

    return (
      <footer>
        <p>@copyright 2023 Masterclass React 8</p>
        <nav aria-label="breadcrumb" className="grid">
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
      </footer>
    )
  }