import { Outlet } from "react-router-dom";
import AppSideBar from '../Components/AppSidebar';

function AppLayout() {
  return (
    <div style={{
      display: 'flex', 
      marginTop: '20px', 
      width: '100%', 
    }}>
      <AppSideBar />
      <Outlet />
    </div>
  )
}

export default AppLayout;