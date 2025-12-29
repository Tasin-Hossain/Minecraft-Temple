import { MdAttachMoney, MdCode, MdPalette, MdTranslate } from "react-icons/md";

// src/pages/admin/appearance/AppearanceOverview.jsx
const AppearanceOverview = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Appearance</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Styles Card */}
        <a href="/admin/appearance/styles" className="block bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition border border-gray-200">
          <div className="flex items-center gap-5">
            <div className="bg-blue-100 p-5 rounded-full">
              <MdPalette className="text-4xl text-blue-600" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Styles</h3>
              <p className="text-gray-600 mt-1">Manage themes, colors, and child styles</p>
              <p className="text-sm text-blue-600 mt-3">3 active styles →</p>
            </div>
          </div>
        </a>

        {/* Templates Card */}
        <a href="/admin/appearance/templates" className="block bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition border border-gray-200">
          <div className="flex items-center gap-5">
            <div className="bg-purple-100 p-5 rounded-full">
              <MdCode className="text-4xl text-purple-600" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Templates</h3>
              <p className="text-gray-600 mt-1">Edit HTML/CSS templates</p>
              <p className="text-sm text-purple-600 mt-3">142 modified templates →</p>
            </div>
          </div>
        </a>

        {/* Phrases Card */}
        <a href="/admin/appearance/phrases" className="block bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition border border-gray-200">
          <div className="flex items-center gap-5">
            <div className="bg-green-100 p-5 rounded-full">
              <MdTranslate className="text-4xl text-green-600" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Phrases</h3>
              <p className="text-gray-600 mt-1">Translate and customize text</p>
              <p className="text-sm text-green-600 mt-3">18 outdated phrases →</p>
            </div>
          </div>
        </a>

        {/* Advertising Card */}
        <a href="/admin/appearance/advertising" className="block bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition border border-gray-200">
          <div className="flex items-center gap-5">
            <div className="bg-yellow-100 p-5 rounded-full">
              <MdAttachMoney className="text-4xl text-yellow-600" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Advertising</h3>
              <p className="text-gray-600 mt-1">Manage ad positions and codes</p>
              <p className="text-sm text-yellow-600 mt-3">7 active positions →</p>
            </div>
          </div>
        </a>
      </div>

      <div className="mt-12 bg-white rounded-xl shadow-lg p-8 border border-gray-200">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Quick Tips</h2>
        <ul className="space-y-3 text-gray-700">
          <li className="flex items-start gap-3">
            <span className="text-blue-600">•</span>
            Child styles inherit from parent – perfect for dark/light modes
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-600">•</span>
            Always test template changes in a child style first
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-600">•</span>
            Use phrase search to quickly fix typos across the site
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AppearanceOverview;