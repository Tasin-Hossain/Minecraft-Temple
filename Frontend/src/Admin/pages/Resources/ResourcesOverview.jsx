// src/pages/admin/resources/ResourcesOverview.jsx
const ResourcesOverview = () => {
  const stats = {
    total: 12567,
    pending: 127,
    updatesPending: 34,
    reviewsPending: 18,
    categories: 42,
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Resources Manager</h1>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Total Resources</p>
              <p className="text-3xl font-bold text-gray-800 mt-2">{stats.total.toLocaleString()}</p>
            </div>
            <div className="bg-blue-100 p-4 rounded-full">
              <MdDownload className="text-3xl text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Pending Approval</p>
              <p className="text-3xl font-bold text-orange-600 mt-2">{stats.pending}</p>
            </div>
            <div className="bg-orange-100 p-4 rounded-full">
              <MdHourglassEmpty className="text-3xl text-orange-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Pending Updates</p>
              <p className="text-3xl font-bold text-purple-600 mt-2">{stats.updatesPending}</p>
            </div>
            <div className="bg-purple-100 p-4 rounded-full">
              <MdUpdate className="text-3xl text-purple-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Pending Reviews</p>
              <p className="text-3xl font-bold text-red-600 mt-2">{stats.reviewsPending}</p>
            </div>
            <div className="bg-red-100 p-4 rounded-full">
              <MdRateReview className="text-3xl text-red-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <a href="/admin/resources/pending" className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition border border-gray-200 text-center">
          <MdHourglassEmpty className="text-5xl text-orange-500 mx-auto mb-4" />
          <h3 className="text-xl font-semibold">Pending Resources</h3>
          <p className="text-3xl font-bold text-orange-600 mt-3">{stats.pending}</p>
          <p className="text-gray-600 mt-2">Review & approve new submissions</p>
        </a>

        <a href="/admin/resources/updates" className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition border border-gray-200 text-center">
          <MdUpdate className="text-5xl text-purple-500 mx-auto mb-4" />
          <h3 className="text-xl font-semibold">Pending Updates</h3>
          <p className="text-3xl font-bold text-purple-600 mt-3">{stats.updatesPending}</p>
          <p className="text-gray-600 mt-2">Review version updates</p>
        </a>

        <a href="/admin/resources/categories" className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition border border-gray-200 text-center">
          <MdCategory className="text-5xl text-green-500 mx-auto mb-4" />
          <h3 className="text-xl font-semibold">Manage Categories</h3>
          <p className="text-3xl font-bold text-green-600 mt-3">{stats.categories}</p>
          <p className="text-gray-600 mt-2">Add, edit or reorder categories</p>
        </a>
      </div>
    </div>
  );
};

export default ResourcesOverview;