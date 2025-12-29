// src/pages/admin/appearance/AdvertisingPage.jsx
const AdvertisingPage = () => {
  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Advertising</h1>
        <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700">
          + Add Position
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-lg border border-gray-200">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="text-left px-6 py-4">Position ID</th>
              <th className="text-left px-6 py-4">Display Location</th>
              <th className="text-left px-6 py-4">Ad Code</th>
              <th className="text-left px-6 py-4">Status</th>
              <th className="text-right px-6 py-4">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            <tr>
              <td className="px-6 py-4">ad_above_content</td>
              <td className="px-6 py-4">Above thread content</td>
              <td className="px-6 py-4 text-sm">Google AdSense 728x90</td>
              <td className="px-6 py-4"><span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">Active</span></td>
              <td className="px-6 py-4 text-right"><button className="text-blue-600 hover:underline">Edit</button></td>
            </tr>
            <tr>
              <td className="px-6 py-4">ad_below_header</td>
              <td className="px-6 py-4">Below navigation</td>
              <td className="px-6 py-4 text-sm">Custom banner</td>
              <td className="px-6 py-4"><span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">Inactive</span></td>
              <td className="px-6 py-4 text-right"><button className="text-blue-600 hover:underline">Edit</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdvertisingPage;