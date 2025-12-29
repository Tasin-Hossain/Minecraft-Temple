export default function Reports() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Reports & Warnings (12 Unresolved)</h1>

      <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-850">
            <tr>
              <th className="text-left p-4">Content</th>
              <th className="text-left p-4">Reported By</th>
              <th className="text-left p-4">Reason</th>
              <th className="text-left p-4">Date</th>
              <th className="text-left p-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t border-gray-800 hover:bg-gray-850">
              <td className="p-4">Resource #8542 - Fake leak</td>
              <td className="p-4 text-purple-400">User123</td>
              <td className="p-4">Malware / Virus</td>
              <td className="p-4 text-gray-400">1 hour ago</td>
              <td className="p-4">
                <button className="bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded text-sm mr-2">View</button>
                <button className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded text-sm">Dismiss</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}