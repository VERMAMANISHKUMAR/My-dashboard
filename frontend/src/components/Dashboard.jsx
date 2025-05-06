import React from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchCompanyData } from '../api/mockApi';

const Dashboard = () => {
  const navigate = useNavigate();
  const [companyData, setCompanyData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState('');

  React.useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (!currentUser || currentUser.role !== 'admin') {
      navigate('/login');
      return;
    }

    fetchCompanyData()
      .then((data) => {
        setCompanyData(data);
        setLoading(false);
      })
      .catch((err) => {
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
        <div className="text-xl text-gray-600 animate-pulse">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-red-600 text-xl font-semibold">{error}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="bg-blue-800 text-white p-4 flex justify-between items-center shadow-lg">
        <h1 className="text-xl font-bold">Admin Dashboard</h1>
        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg font-medium transition duration-200"
        >
          Logout
        </button>
      </nav>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">Company Overview</h2>

        {companyData.length > 0 ? (
          <div className="bg-white shadow-md rounded-xl overflow-hidden border border-gray-200">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-100 text-gray-700 text-sm uppercase">
                <tr>
                  <th className="px-6 py-4 text-left">Company Name</th>
                  <th className="px-6 py-4 text-left">Description</th>
                  <th className="px-6 py-4 text-left">Total Sales</th>
                  <th className="px-6 py-4 text-left">Revenue Last Month</th>
                  <th className="px-6 py-4 text-left">Revenue Last Year</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 bg-white">
                {companyData.map((company, index) => (
                  <tr key={index} className="hover:bg-blue-50 transition">
                    <td className="px-6 py-4 font-medium text-gray-900">{company.companyName || 'N/A'}</td>
                    <td className="px-6 py-4 text-gray-600">{company.description || 'N/A'}</td>
                    <td className="px-6 py-4 text-gray-600">
                      {typeof company.numberOfSales === 'number'
                        ? company.numberOfSales.toLocaleString()
                        : 'N/A'}
                    </td>
                    <td className="px-6 py-4 text-green-600 font-semibold">
                      {typeof company.revenueLastMonth === 'number'
                        ? `$${company.revenueLastMonth.toLocaleString()}`
                        : 'N/A'}
                    </td>
                    <td className="px-6 py-4 text-green-600 font-semibold">
                      {typeof company.revenueLastYear === 'number'
                        ? `$${company.revenueLastYear.toLocaleString()}`
                        : 'N/A'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="bg-white p-6 rounded-lg shadow text-gray-500 text-center">
            No company data available.
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
