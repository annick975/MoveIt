import React from "react";

const tasks = [
  {
    id: 1,
    title: "Task 1",
    description: "Description of Task 1",
    priority: "High",
    status: "To Do",
  },
  {
    id: 2,
    title: "Task 2",
    description: "Description of Task 2",
    priority: "Medium",
    status: "To Do",
  },
  {
    id: 3,
    title: "Task 3",
    description: "Description of Task 3",
    priority: "Low",
    status: "In Progress",
  },
  {
    id: 4,
    title: "Task 4",
    description: "Description of Task 4",
    priority: "High",
    status: "Completed",
  },
];

const ProgressPage: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-2xl font-semibold text-gray-900 mb-6">Progress</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">To Do</h2>
          {tasks
            .filter((task) => task.status === "To Do")
            .map((task) => (
              <div
                key={task.id}
                className="bg-white border rounded-lg p-4 mb-4 last:mb-0"
              >
                <h3 className="text-sm font-medium text-gray-900">
                  {task.title}
                </h3>
                <p className="text-sm text-gray-500 mt-1">{task.description}</p>
                <div className="mt-2 flex justify-between items-center">
                  <span
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      task.priority === "High"
                        ? "bg-red-100 text-red-800"
                        : task.priority === "Medium"
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-green-100 text-green-800"
                    }`}
                  >
                    {task.priority}
                  </span>
                </div>
              </div>
            ))}
        </div>
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">
            In Progress
          </h2>
          {tasks
            .filter((task) => task.status === "In Progress")
            .map((task) => (
              <div
                key={task.id}
                className="bg-white border rounded-lg p-4 mb-4 last:mb-0"
              >
                <h3 className="text-sm font-medium text-gray-900">
                  {task.title}
                </h3>
                <p className="text-sm text-gray-500 mt-1">{task.description}</p>
                <div className="mt-2 flex justify-between items-center">
                  <span
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      task.priority === "High"
                        ? "bg-red-100 text-red-800"
                        : task.priority === "Medium"
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-green-100 text-green-800"
                    }`}
                  >
                    {task.priority}
                  </span>
                </div>
              </div>
            ))}
        </div>
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Completed</h2>
          {tasks
            .filter((task) => task.status === "Completed")
            .map((task) => (
              <div
                key={task.id}
                className="bg-white border rounded-lg p-4 mb-4 last:mb-0"
              >
                <h3 className="text-sm font-medium text-gray-900">
                  {task.title}
                </h3>
                <p className="text-sm text-gray-500 mt-1">{task.description}</p>
                <div className="mt-2 flex justify-between items-center">
                  <span
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      task.priority === "High"
                        ? "bg-red-100 text-red-800"
                        : task.priority === "Medium"
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-green-100 text-green-800"
                    }`}
                  >
                    {task.priority}
                  </span>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ProgressPage;
