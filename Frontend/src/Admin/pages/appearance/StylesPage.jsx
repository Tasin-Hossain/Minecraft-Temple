// src/pages/admin/appearance/StylesPage.jsx
const StylesPage = () => {
  const styles = [
    { id: 1, name: "Default Style", type: "Parent", users: "80%", edited: false },
    { id: 2, name: "Dark Mode", type: "Child of Default", users: "15%", edited: true },
    { id: 3, name: "Christmas Theme", type: "Child of Default", users: "5%", edited: true },
  ];

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Styles</h1>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
          + Create New Style
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="text-left px-6 py-4 font-medium text-gray-700">Style Name</th>
              <th className="text-left px-6 py-4 font-medium text-gray-700">Type</th>
              <th className="text-left px-6 py-4 font-medium text-gray-700">Users Using</th>
              <th className="text-left px-6 py-4 font-medium text-gray-700">Status</th>
              <th className="text-right px-6 py-4 font-medium text-gray-700">Actions</th>
            </tr>
          </thead>
          <tbody>
            {styles.map((style) => (
              <tr key={style.id} className="border-b border-gray-100 hover:bg-gray-50">
                <td className="px-6 py-4 font-medium">{style.name}</td>
                <td className="px-6 py-4 text-gray-600">{style.type}</td>
                <td className="px-6 py-4">{style.users}</td>
                <td className="px-6 py-4">
                  {style.edited ? (
                    <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm">Modified</span>
                  ) : (
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">Default</span>
                  )}
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="text-blue-600 hover:underline mr-4">Edit</button>
                  <button className="text-gray-600 hover:underline">Export</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StylesPage;