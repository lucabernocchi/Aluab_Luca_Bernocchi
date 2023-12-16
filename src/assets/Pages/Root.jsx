import AppNavbar from '../Components/AppNavbar';
import AppFooter from '../Components/AppFooter';
import { Outlet } from "react-router-dom";

function Root() {
  return (
    <div className="container">
      <AppNavbar />
      <Outlet />
      <AppFooter />  
    </div>
  )
}

export default Root; 