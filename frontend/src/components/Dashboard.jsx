import React from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchCompanyData } from '../api/mockApi';
import AdminDashboardHeading from './AdminDashboardHeading';

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
        <div className="text-lg sm:text-xl text-gray-600 animate-pulse">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-red-600 text-lg sm:text-xl font-semibold">{error}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="bg-blue-900 text-white px-4 py-3 sm:py-4 flex flex-col sm:flex-row sm:justify-between sm:items-center shadow-lg">
        <AdminDashboardHeading />
        <button
          onClick={handleLogout}
          className="mt-3 sm:mt-0 bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg font-medium text-sm sm:text-base transition duration-200"
        >
          Logout
        </button>
      </nav>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-6 sm:mb-8">Company Overview</h2>

        {companyData.length > 0 ? (
          <>
            {/* Desktop: Table View */}
            <div className="hidden sm:block bg-white shadow-md rounded-xl overflow-hidden border border-gray-200">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-100 text-gray-700 text-xs sm:text-sm uppercase tracking-wider">
                  <tr>
                    <th className="px-4 sm:px-6 py-3 sm:py-4 text-left font-medium">Company Name</th>
                    <th className="px-4 sm:px-6 py-3 sm:py-4 text-left font-medium">Description</th>
                    <th className="px-4 sm:px-6 py-3 sm:py-4 text-left font-medium">Total Sales</th>
                    <th className="px-4 sm:px-6 py-3 sm:py-4 text-left font-medium">Revenue Last Month</th>
                    <th className="px-4 sm:px-6 py-3 sm:py-4 text-left font-medium">Revenue Last Year</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 bg-white">
                  {companyData.map((company, index) => (
                    <tr key={index} className="hover:bg-blue-50 transition">
                      <td className="px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base font-medium text-gray-900">
                        {company.companyName || 'N/A'}
                      </td>
                      <td className="px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base text-gray-600">
                        {company.description || 'N/A'}
                      </td>
                      <td className="px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base text-gray-600">
                        {typeof company.numberOfSales === 'number' ? company.numberOfSales.toLocaleString() : 'N/A'}
                      </td>
                      <td className="px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base text-green-600 font-semibold">
                        {typeof company.revenueLastMonth === 'number' ? `$${company.revenueLastMonth.toLocaleString()}` : 'N/A'}
                      </td>
                      <td className="px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base text-green-600 font-semibold">
                        {typeof company.revenueLastYear === 'number' ? `$${company.revenueLastYear.toLocaleString()}` : 'N/A'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile: Card View */}
            <div className="block sm:hidden space-y-4">
              {companyData.map((company, index) => (
                <div key={index} className="bg-white shadow-md rounded-lg p-4 border border-gray-200 hover:shadow-lg transition">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{company.companyName || 'N/A'}</h3>
                  <p className="text-sm text-gray-600 mb-2"><span className="font-medium">Description:</span> {company.description || 'N/A'}</p>
                  <p className="text-sm text-gray-600 mb-2">
                    <span className="font-medium">Total Sales:</span> 
                    {typeof company.numberOfSales === 'number' ? company.numberOfSales.toLocaleString() : 'N/A'}
                  </p>
                  <p className="text-sm text-green-600 font-semibold mb-2">
                    <span className="font-medium">Last Month:</span> 
                    {typeof company.revenueLastMonth === 'number' ? `$${company.revenueLastMonth.toLocaleString()}` : 'N/A'}
                  </p>
                  <p className="text-sm text-green-600 font-semibold">
                    <span className="font-medium">Last Year:</span> 
                    {typeof company.revenueLastYear === 'number' ? `$${company.revenueLastYear.toLocaleString()}` : 'N/A'}
                  </p>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow text-gray-500 text-center text-sm sm:text-base">
            No company data available.
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;