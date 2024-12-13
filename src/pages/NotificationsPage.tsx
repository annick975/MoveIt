import React from "react";

const notifications = [
  {
    id: 1,
    type: "invite",
    user: "Diana Liu",
    action: "invited you to join her team",
    time: "12 minutes ago",
  },
  {
    id: 2,
    type: "mention",
    user: "Nuno Job",
    action: "mentioned you",
    time: "12 minutes ago",
  },
  {
    id: 3,
    type: "follow",
    user: "Linzy Lim",
    action: "followed you",
    time: "12 minutes ago",
  },
  {
    id: 4,
    type: "reminder",
    user: "Matt Chen",
    action: "Some tasks are approaching the deadline",
    time: "12 minutes ago",
  },
];

const NotificationsPage: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-2xl font-semibold text-gray-900 mb-6">
        Notifications
      </h1>
      <p className="text-sm text-gray-500 mb-6">
        You have 12 unread notifications
      </p>

      <div className="space-y-4">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className="bg-white shadow rounded-lg p-4 flex items-center justify-between"
          >
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <img
                  className="h-8 w-8 rounded-full"
                  src={`https://ui-avatars.com/api/?name=${notification.user}&background=random`}
                  alt=""
                />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">
                  {notification.user}
                </p>
                <p className="text-sm text-gray-500">{notification.action}</p>
                <p className="text-xs text-gray-400">{notification.time}</p>
              </div>
            </div>
            <button className="px-3 py-1 bg-emerald-100 text-emerald-800 rounded-md text-sm font-medium">
              {notification.type === "invite"
                ? "Accept"
                : notification.type === "mention"
                ? "View"
                : notification.type === "follow"
                ? "Follow back"
                : "Resume tasks"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotificationsPage;
