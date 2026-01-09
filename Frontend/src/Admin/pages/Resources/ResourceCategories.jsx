import React, { useMemo, useState } from 'react';
import products from '../../../Api/Product'; // তোমার প্রোডাক্ট ডেটা এখান থেকে আসবে

const ResourceCategories = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All Status');

  // ক্যাটাগরিগুলো এক্সট্রাক্ট করা + স্ট্যাটিস্টিক্স
  const categoriesData = useMemo(() => {
    const categoryMap = new Map();

    products.forEach((product) => {
      // শুধুমাত্র approved এবং published/unlisted/draft থেকে ফিল্টার (তোমার লজিক অনুযায়ী)
      if (product.status === 'unlisted' || product.approvedStatus === 'pending') {
        return; // optional: hide unlisted or pending
      }

      const catName = product.category || 'Uncategorized';

      if (!categoryMap.has(catName)) {
        categoryMap.set(catName, {
          name: catName,
          description: `All resources related to ${catName}`, // ডায়নামিক বা ম্যানুয়ালি সেট করতে পারো
          productCount: 0,
          createdAt: product.createdAt, // প্রথম প্রোডাক্টের তারিখ নিলাম
          status: 'active', // তুমি চাইলে ডাটাবেস থেকে active/inactive নিতে পারো
          icon: getCategoryIcon(catName), // নিচে ফাংশন দেওয়া আছে
        });
      }

      categoryMap.get(catName).productCount += 1;
    });

    return Array.from(categoryMap.values());
  }, []);

  // আইকন ম্যাপিং (তোমার ইমেজের মতো গ্রেডিয়েন্ট আইকন)
  function getCategoryIcon(categoryName) {
    const icons = {
      Minecraft: '🎮',
      Clothing: '👕',
      Electronics: '📱',
      Accessories: '⌚',
      default: '📦',
    };
    return icons[categoryName] || icons.default;
  }

  // ফিল্টারিং
  const filteredCategories = useMemo(() => {
    return categoriesData.filter((cat) => {
      const matchesSearch = cat.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesStatus =
        statusFilter === 'All Status' ||
        (statusFilter === 'active' && cat.status === 'active') ||
        (statusFilter === 'inactive' && cat.status === 'inactive');
      return matchesSearch && matchesStatus;
    });
  }, [categoriesData, searchTerm, statusFilter]);

  // স্ট্যাটিস্টিক্স
  const totalCategories = categoriesData.length;
  const activeCategories = categoriesData.filter((c) => c.status === 'active').length;
  const totalProducts = products.filter(
    (p) => p.status !== 'unlisted' && p.approvedStatus !== 'pending'
  ).length;

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Categories</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">{totalCategories}</p>
                <p className="text-xs text-gray-500 mt-1">{activeCategories} active</p>
              </div>
              <div className="text-blue-600 text-3xl">📂</div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Active Categories</p>
                <p className="text-3xl font-bold text-green-600 mt-2">{activeCategories}</p>
                <p className="text-xs text-gray-500 mt-1">
                  {totalCategories > 0
                    ? Math.round((activeCategories / totalCategories) * 100)
                    : 0}% of total
                </p>
              </div>
              <div className="text-green-600 text-3xl">✅</div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Products</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">{totalProducts}</p>
                <p className="text-xs text-gray-500 mt-1">Across all categories</p>
              </div>
              <div className="text-purple-600 text-3xl">🧩</div>
            </div>
          </div>
        </div>

        {/* Categories Section */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <h2 className="text-2xl font-bold text-gray-900">Categories</h2>

            <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search categories..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full md:w-64"
                />
                <span className="absolute left-3 top-3.5 text-gray-400">🔍</span>
              </div>

              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option>All Status</option>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>

              <button className="bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-900 transition flex items-center gap-2">
                <span>+</span> Add Category
              </button>
            </div>
          </div>

          {/* Category Cards Grid */}
          {filteredCategories.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No categories found.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCategories.map((category) => (
                <div
                  key={category.name}
                  className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:shadow-md transition-shadow"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className="text-4xl bg-gradient-to-br from-purple-500 to-pink-500 text-white w-14 h-14 rounded-xl flex items-center justify-center shadow-lg">
                      {category.icon}
                    </div>
                    <button className="text-gray-400 hover:text-gray-600">⋮</button>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900">{category.name}</h3>
                  <p className="text-sm text-gray-600 mt-1">{category.description}</p>

                  <div className="mt-4 flex items-center justify-between">
                    <p className="text-sm text-gray-700">
                      Products: <span className="font-semibold">{category.productCount}</span>
                    </p>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        category.status === 'active'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-gray-100 text-gray-800'
                      }`}
                    >
                      {category.status}
                    </span>
                  </div>

                  <p className="text-xs text-gray-500 mt-4">
                    Created: {new Date(category.createdAt).toLocaleDateString('en-US', {
                      month: 'numeric',
                      day: 'numeric',
                      year: 'numeric',
                    })}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResourceCategories;