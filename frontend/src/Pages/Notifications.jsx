import React, { useState } from "react";

export default function Notifications() {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      user: "alex",
      action: "liked your vlog",
      time: "2m ago",
    },
    {
      id: 2,
      user: "jordan",
      action: "commented: 'Great consistency!🔥'",
      time: "15m ago",
    },
    {
      id: 3,
      user: "mia",
      action: "started following you",
      time: "1h ago",
    },
  ]);

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <h1 className="text-3xl font-bold text-center text-indigo-700 mb-6">
        🔔 Notifications
      </h1>

      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-6">
        {notifications.length === 0 ? (
          <p className="text-center text-gray-500">No notifications yet.</p>
        ) : (
          notifications.map((note) => (
            <div
              key={note.id}
              className="flex justify-between items-center p-4 border-b hover:bg-gray-50 transition"
            >
              <div>
                <p className="text-gray-800">
                  <span className="font-semibold text-indigo-700">
                    @{note.user}
                  </span>{" "}
                  {note.action}
                </p>
                <p className="text-xs text-gray-500">{note.time}</p>
              </div>
              <button className="text-sm text-indigo-600 hover:text-indigo-800">
                View
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
