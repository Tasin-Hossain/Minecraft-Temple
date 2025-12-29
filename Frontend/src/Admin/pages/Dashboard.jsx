// src/pages/admin/DashboardPage.jsx
import {
  MdPeople,
  MdDownload,
  MdForum,
  MdFlag,
  MdTrendingUp,
  MdAccessTime,
  MdCheckCircle,
  MdWarning,
  MdPayment,
} from "react-icons/md";

const DashboardPage = () => {
  // Dummy data – পরে API থেকে আনতে পারবে
  const stats = {
    totalUsers: 18452,
    newUsersToday: 128,
    totalResources: 12567,
    pendingResources: 127,
    totalThreads: 45678,
    newThreadsToday: 89,
    reports: 63,
    onlineUsers: 342,
  };

  const recentActivity = [
    { user: "ProLeaker", action: "uploaded a new resource", time: "2 minutes ago", type: "resource" },
    { user: "Admin", action: "approved resource #5421", time: "15 minutes ago", type: "approve" },
    { user: "User123", action: "created a new thread", time: "28 minutes ago", type: "thread" },
    { user: "ModeratorX", action: "banned user Spammer99", time: "1 hour ago", type: "ban" },
    { user: "PremiumUser", action: "purchased Premium membership", time: "2 hours ago", type: "payment" },
  ];

  return (
    <div className="p-8">
      {/* Page Title */}
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Admin Dashboard</h1>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {/* Total Users */}
        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Total Users</p>
              <p className="text-3xl font-bold text-gray-800 mt-2">{stats.totalUsers.toLocaleString()}</p>
              <p className="text-green-600 text-sm mt-2 flex items-center gap-1">
                <MdTrendingUp /> +{stats.newUsersToday} today
              </p>
            </div>
            <div className="bg-blue-100 p-4 rounded-full">
              <MdPeople className="text-3xl text-blue-600" />
            </div>
          </div>
        </div>

        {/* Resources */}
        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Total Resources</p>
              <p className="text-3xl font-bold text-gray-800 mt-2">{stats.totalResources.toLocaleString()}</p>
              <p className="text-orange-600 text-sm mt-2 flex items-center gap-1">
                <MdAccessTime /> {stats.pendingResources} pending
              </p>
            </div>
            <div className="bg-orange-100 p-4 rounded-full">
              <MdDownload className="text-3xl text-orange-600" />
            </div>
          </div>
        </div>

        {/* Threads & Posts */}
        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Total Threads</p>
              <p className="text-3xl font-bold text-gray-800 mt-2">{stats.totalThreads.toLocaleString()}</p>
              <p className="text-green-600 text-sm mt-2 flex items-center gap-1">
                <MdTrendingUp /> +{stats.newThreadsToday} today
              </p>
            </div>
            <div className="bg-purple-100 p-4 rounded-full">
              <MdForum className="text-3xl text-purple-600" />
            </div>
          </div>
        </div>

        {/* Reports */}
        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Open Reports</p>
              <p className="text-3xl font-bold text-red-600 mt-2">{stats.reports}</p>
              <p className="text-gray-600 text-sm mt-2">Requires attention</p>
            </div>
            <div className="bg-red-100 p-4 rounded-full">
              <MdFlag className="text-3xl text-red-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section: Recent Activity + Online Users */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Activity */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-lg p-6 border border-gray-200">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Recent Activity</h2>
          <div className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
                <div className="flex items-center gap-4">
                  {activity.type === "resource" && <MdDownload className="text-orange-500" />}
                  {activity.type === "approve" && <MdCheckCircle className="text-green-500" />}
                  {activity.type === "thread" && <MdForum className="text-purple-500" />}
                  {activity.type === "ban" && <MdWarning className="text-red-500" />}
                  {activity.type === "payment" && <MdPayment className="text-blue-500" />}

                  <div>
                    <p className="text-gray-800 font-medium">{activity.user}</p>
                    <p className="text-sm text-gray-600">{activity.action}</p>
                  </div>
                </div>
                <p className="text-xs text-gray-500">{activity.time}</p>
              </div>
            ))}
          </div>
          <button className="mt-4 text-blue-600 hover:underline text-sm">View all activity →</button>
        </div>

        {/* Online Users */}
        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Users Online Now</h2>
          <div className="flex items-center justify-center flex-col">
            <p className="text-5xl font-bold text-green-600">{stats.onlineUsers}</p>
            <p className="text-gray-600 mt-2">Active in last 15 minutes</p>
            <div className="flex mt-6 gap-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="w-10 h-10 bg-gray-300 rounded-full border-2 border-white -ml-2 first:ml-0"
                  style={{ backgroundColor: `hsl(${i * 60}, 70%, 50%)` }}
                />
              ))}
              <div className="w-10 h-10 bg-gray-200 rounded-full border-2 border-white flex items-center justify-center text-xs font-bold text-gray-600 -ml-2">
                +{stats.onlineUsers - 5}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions (Optional) */}
      <div className="mt-10 text-center">
        <p className="text-gray-600">Welcome back, Admin! 👋 Manage your forum efficiently.</p>
      </div>
    </div>
  );
};

export default DashboardPage;