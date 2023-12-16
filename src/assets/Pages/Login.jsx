
import { useNavigate } from 'react-router-dom';
import { FaGoogle, FaDiscord } from 'react-icons/fa';
import { CiLogin } from 'react-icons/ci';


import supabase from '../supabase/client';



function Login() {

  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    const loginForm = event.currentTarget;
    const { email, password } = Object.fromEntries(new FormData(loginForm));
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) {
        alert(error.error_description || error.message);
      } else {
        loginForm.reset();
        navigate('/settings');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleLoginWithDiscord = async () => {
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'discord',
        options: {
          redirectTo: 'http://localhost:5173/settings',
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <div>
        <div id="LoginEmail">
          <h1>Log In</h1>
          <form onSubmit={handleLogin}>
            <label htmlFor="email">
              Email address
              <input
                type="email"
                id="email"
                name="email"
                placeholder="test@gmail.com"
              />
            </label>
            <label htmlFor="password">
              Password
              <input
                type="password"
                id="password"
                name="password"
                placeholder="supersecret"
              />
            </label>
            <button type="submit">
              Fai sign In
              <CiLogin/>
            </button>
          </form>
        </div>
        <div id="LoginOAuth">
          <h1>Puoi fare login con Social auth</h1>
          <button type="button" className="secondary">
            Login con Google
            <FaGoogle/>
          </button>
          <button
            type="button"
            className="contrast"
            onClick={handleLoginWithDiscord}
          >
            Login con Discord
            <FaDiscord/>
          </button>
        </div>
      </div>
    </div>
  );
}
export default Login;