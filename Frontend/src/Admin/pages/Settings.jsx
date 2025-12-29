export default function Settings() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Options</h1>

      <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
        <h2 className="text-xl font-semibold mb-6">Basic Board Information</h2>
        <div className="space-y-4 max-w-2xl">
          <div>
            <label className="block text-sm text-gray-400 mb-1">Board Title</label>
            <input type="text" value="NullForums" className="w-full bg-gray-850 border border-gray-700 rounded-lg px-4 py-3" />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1">Board URL</label>
            <input type="text" value="https://nullforums.net" className="w-full bg-gray-850 border border-gray-700 rounded-lg px-4 py-3" />
          </div>
          <button className="mt-6 bg-purple-600 hover:bg-purple-700 px-8 py-3 rounded-lg font-medium">Save Changes</button>
        </div>
      </div>
    </div>
  );
}