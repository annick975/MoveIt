import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Home,
  CheckSquare,
  TrendingUp,
  Bell,
  Calendar,
  Users,
  Plus,
  Settings,
  HelpCircle,
  MessageSquare,
} from "lucide-react";

const Sidebar: React.FC = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="bg-white w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">
      <Link
        to="/app"
        className="text-2xl font-semibold text-emerald-600 flex items-center space-x-2 px-4"
      >
        <span>MoveIt</span>
      </Link>
      <nav className="space-y-1">
        <Link
          to="/app"
          className={`flex items-center space-x-2 py-2.5 px-4 rounded transition duration-200 ${
            isActive("/app")
              ? "bg-emerald-100 text-emerald-700"
              : "hover:bg-gray-100"
          }`}
        >
          <Home size={20} />
          <span>Home</span>
        </Link>
        <Link
          to="/app/progress"
          className={`flex items-center space-x-2 py-2.5 px-4 rounded transition duration-200 ${
            isActive("/app/progress")
              ? "bg-emerald-100 text-emerald-700"
              : "hover:bg-gray-100"
          }`}
        >
          <TrendingUp size={20} />
          <span>Progress</span>
        </Link>
        <Link
          to="/app/notifications"
          className={`flex items-center space-x-2 py-2.5 px-4 rounded transition duration-200 ${
            isActive("/app/notifications")
              ? "bg-emerald-100 text-emerald-700"
              : "hover:bg-gray-100"
          }`}
        >
          <Bell size={20} />
          <span>Notifications</span>
        </Link>
        <Link
          to="/app/teams"
          className={`flex items-center space-x-2 py-2.5 px-4 rounded transition duration-200 ${
            isActive("/app/teams")
              ? "bg-emerald-100 text-emerald-700"
              : "hover:bg-gray-100"
          }`}
        >
          <Users size={20} />
          <span>Teams</span>
        </Link>
      </nav>
      <div className="px-4 mt-auto">
        <Link
          to="/app/add-task"
          className="bg-emerald-500 text-white py-2 px-4 rounded-lg flex items-center justify-center hover:bg-emerald-600 transition duration-200"
        >
          <Plus size={20} className="mr-2" />
          New Task
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
