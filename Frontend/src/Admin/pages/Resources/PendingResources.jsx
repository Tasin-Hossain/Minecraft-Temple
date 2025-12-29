// src/pages/admin/resources/PendingResources.jsx
const PendingResources = () => {
  const pendingResources = [
    { id: 5421, title: "Advanced AntiCheat Plugin", author: "ProCoder", submitted: "2 hours ago", version: "1.0", downloads: 0 },
    { id: 5419, title: "Custom 3D Models Pack", author: "BuilderX", submitted: "5 hours ago", version: "2.4", downloads: 245 },
    // আরও ডাটা...
  ];

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Pending Resources ({pendingResources.length})</h1>
        <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700">
          Bulk Approve Selected
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="text-left px-6 py-4"><input type="checkbox" /></th>
              <th className="text-left px-6 py-4 font-medium text-gray-700">Resource Title</th>
              <th className="text-left px-6 py-4 font-medium text-gray-700">Author</th>
              <th className="text-left px-6 py-4 font-medium text-gray-700">Submitted</th>
              <th className="text-left px-6 py-4 font-medium text-gray-700">Version</th>
              <th className="text-right px-6 py-4 font-medium text-gray-700">Actions</th>
            </tr>
          </thead>
          <tbody>
            {pendingResources.map((resource) => (
              <tr key={resource.id} className="border-b border-gray-100 hover:bg-gray-50">
                <td className="px-6 py-4"><input type="checkbox" /></td>
                <td className="px-6 py-4 font-medium text-blue-600 hover:underline cursor-pointer">
                  {resource.title}
                </td>
                <td className="px-6 py-4 text-gray-700">{resource.author}</td>
                <td className="px-6 py-4 text-gray-600">{resource.submitted}</td>
                <td className="px-6 py-4">{resource.version}</td>
                <td className="px-6 py-4 text-right space-x-3">
                  <button className="text-green-600 hover:underline font-medium">Approve</button>
                  <button className="text-red-600 hover:underline font-medium">Reject</button>
                  <button className="text-blue-600 hover:underline font-medium">View</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PendingResources;