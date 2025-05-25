import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Courses from './pages/Courses'
import CourseDetails from './pages/CourseDetails'
import Resources from './pages/Resources'
import About from './pages/About'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Register from './pages/Register'
import NotFound from './pages/NotFound';

// user routes
import UserLayout from './features/user/layout/UserLayout';
import Dashboard from './features/user/pages/Dashboard';
import Profile from './features/user/pages/Profile';
// import Courses from './features/user/pages/Courses';
import Certificates from './features/user/pages/Certificates';
import Settings from './features/user/pages/Settings';
import Payments from './features/user/pages/Payments';

/// admin routes
import AdminLayout from './admin/components/AdminLayout';
import Dashboarda from './admin/pages/Dashboard';
import CourseList from './admin/pages/Courses';
import CourseForm from './admin/pages/Courses/CreateEdit';
import UserList from './admin/pages/Users';
import UserForm from './admin/pages/Users/CreateEdit';
import Analytics from './admin/pages/Analytics';
import Setting from './admin/pages/Settings';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* <Navbar /> */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:id" element={<CourseDetails />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<NotFound />} />

          {/* User Routes */}
             <Route path="/user" element={<UserLayout />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="courses" element={<Courses />} />
        <Route path="certificates" element={<Certificates />} />
        <Route path="profile" element={<Profile />} />
        <Route path="payments" element={<Payments />} />
        <Route path="settings" element={<Setting />} />
        <Route index element={<Dashboard />} />
      </Route>

          {/* Admin Routes */}
           <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboarda />} />
          <Route path="courses" element={<CourseList />} />
          <Route path="courses/new" element={<CourseForm />} />
          <Route path="courses/edit/:id" element={<CourseForm />} />
          <Route path="users" element={<UserList />} />
          <Route path="users/new" element={<UserForm />} />
          <Route path="users/edit/:id" element={<UserForm />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="settings" element={<Settings />} />
        </Route>
        </Routes>
      </main>
      {/* <Footer /> */}
    </div>
  )
}

export default App