// src/admin/components/StatCard.jsx
import PropTypes from 'prop-types';

const StatCard = ({ icon, title, value }) => (
  <div className="bg-white rounded-lg shadow p-6 flex items-center">
    <div className="mr-4 p-3 bg-gray-100 rounded-full">
      {icon}
    </div>
    <div>
      <p className="text-gray-500 text-sm">{title}</p>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  </div>
);

// Add prop type validation
StatCard.propTypes = {
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]).isRequired
};

// Export as default
export default StatCard;