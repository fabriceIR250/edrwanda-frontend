import { useAuth } from '../../../context/AuthContext';

const UserCourses = () => {
  const { user } = useAuth();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">My Courses</h1>
      <div className="bg-white p-6 rounded-lg shadow">
        <p>Welcome {user?.name}, here are your enrolled courses:</p>
        {/* Add your course listing logic here */}
      </div>
    </div>
  );
};

export default UserCourses;