import { Outlet } from 'react-router-dom';
import UserNavbar from '../pages/components/UserNavbar';
import UserSidebar from '../pages/components/UserSidebar';

const UserLayout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <UserNavbar />
      
      <div className="flex flex-1">
        <UserSidebar />
        
        <main className="flex-1 p-6 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default UserLayout;