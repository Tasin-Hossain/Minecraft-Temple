// src/pages/admin/appearance/PhrasesPage.jsx
const PhrasesPage = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Phrases</h1>

      <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 mb-6">
        <div className="flex gap-4">
          <input
            type="text"
            placeholder="Search phrases... (e.g. welcome, login)"
            className="flex-1 px-4 py-3 border border-gray-300 rounded-lg"
          />
          <select className="px-4 py-3 border border-gray-300 rounded-lg">
            <option>All Languages</option>
            <option>English</option>
          </select>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
            Search
          </button>
        </div>
      </div>

      <div className="bg-orange-50 border border-orange-200 rounded-xl p-4 mb-6">
        <p className="text-orange-800 font-medium">⚠️ 18 phrases are outdated after recent XenForo update</p>
      </div>

      <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="text-left px-6 py-4">Phrase Key</th>
              <th className="text-left px-6 py-4">Current Text</th>
              <th className="text-left px-6 py-4">Status</th>
              <th className="text-right px-6 py-4">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            <tr className="hover:bg-gray-50">
              <td className="px-6 py-4 font-mono text-sm">welcome_message</td>
              <td className="px-6 py-4">Welcome to NullForums!</td>
              <td className="px-6 py-4"><span className="text-green-600">Up to date</span></td>
              <td className="px-6 py-4 text-right"><button className="text-blue-600 hover:underline">Edit</button></td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="px-6 py-4 font-mono text-sm">login_button</td>
              <td className="px-6 py-4">Log In or Register</td>
              <td className="px-6 py-4"><span className="text-orange-600">Outdated</span></td>
              <td className="px-6 py-4 text-right"><button className="text-blue-600 hover:underline">Edit</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PhrasesPage;