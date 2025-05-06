import React from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchCompanyData } from '../api/mockApi';

const Dashboard = () => {
  const navigate = useNavigate();
  const [companyData, setCompanyData] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState('');

  React.useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (!currentUser || currentUser.role !== 'admin') {
      navigate('/login');
      return;
    }

    fetchCompanyData()
      .then(data => {
        setCompanyData(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    navigate('/login');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-xl text-gray-600">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-red-500 text-xl">{error}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-blue-700 text-white p-4 flex justify-between items-center shadow-md">
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        <button
          onClick={handleLogout}
          className="bg-red-600 px-4 py-2 rounded-lg hover:bg-red-700 transition duration-200"
        >
          Logout
        </button>
      </nav>
      <div className="container mx-auto p-6">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">Company Overview</h2>
        {companyData && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-4 text-gray-700">Company Information</h3>
              <p className="text-gray-600"><strong>Name:</strong> {companyData.companyName}</p>
              <p className="text-gray-600"><strong>Description:</strong> {companyData.description}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-4 text-gray-700">Sales Metrics</h3>
              <p className="text-gray-600"><strong>Total Sales:</strong> {companyData.numberOfSales.toLocaleString()}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-4 text-gray-700">Revenue Metrics</h3>
              <p className="text-gray-600"><strong>Last Month:</strong> ${companyData.revenueLastMonth.toLocaleString()}</p>
              <p className="text-gray-600"><strong>Last Year:</strong> ${companyData.revenueLastYear.toLocaleString()}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;