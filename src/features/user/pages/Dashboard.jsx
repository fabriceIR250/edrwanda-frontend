import { FaBook, FaChartLine, FaCertificate, FaComments } from 'react-icons/fa';

const Dashboard = () => {
  const stats = [
    { title: "Active Courses", value: 3, icon: <FaBook />, color: "text-blue-500" },
    { title: "Progress", value: "75%", icon: <FaChartLine />, color: "text-green-500" },
    { title: "Certificates", value: 2, icon: <FaCertificate />, color: "text-purple-500" },
    { title: "Discussions", value: 12, icon: <FaComments />, color: "text-yellow-500" },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
            <div className={`${stat.color} mb-2`}>{stat.icon}</div>
            <h3 className="text-lg font-medium">{stat.title}</h3>
            <p className="text-2xl font-bold">{stat.value}</p>
          </div>
        ))}
      </div>
      
      {/* Recent Activity Section */}
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
        {/* Activity items would go here */}
      </div>
    </div>
  );
};

export default Dashboard;