// src/pages/admin/appearance/TemplatesPage.jsx
const TemplatesPage = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Templates</h1>

      <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 mb-6">
        <div className="flex gap-4">
          <input
            type="text"
            placeholder="Search templates..."
            className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          />
          <select className="px-4 py-3 border border-gray-300 rounded-lg">
            <option>All Styles</option>
            <option>Default Style</option>
            <option>Dark Mode</option>
          </select>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
            Search
          </button>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <p className="text-gray-700">Showing modified templates in <strong>Dark Mode</strong></p>
        </div>
        <div className="divide-y divide-gray-200">
          {["forum_view", "thread_view", "header", "footer", "sidebar"].map((template) => (
            <div key={template} className="px-6 py-4 flex justify-between items-center hover:bg-gray-50">
              <div>
                <p className="font-medium text-gray-800">{template}.xml</p>
                <p className="text-sm text-gray-600">Last modified: 2 days ago</p>
              </div>
              <button className="text-blue-600 hover:underline font-medium">Edit →</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TemplatesPage;