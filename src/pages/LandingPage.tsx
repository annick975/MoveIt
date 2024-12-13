import React from "react";
import { Link } from "react-router-dom";

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="text-2xl font-semibold text-emerald-600">
            MoveIt
          </Link>
          <div>
            <Link
              to="/login"
              className="text-gray-600 hover:text-gray-800 px-3 py-2"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="bg-emerald-500 text-white px-4 py-2 rounded-lg hover:bg-emerald-600 transition duration-200"
            >
              Sign Up
            </Link>
          </div>
        </nav>
      </header>
      <main className="container mx-auto px-4 py-12">
        <section className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">
            Simplify. Prioritize. Achieve.
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Boost your productivity with MoveIt task management
          </p>
          <Link
            to="/signup"
            className="bg-emerald-500 text-white px-6 py-3 rounded-lg text-lg hover:bg-emerald-600 transition duration-200"
          >
            Get Started
          </Link>
        </section>
        <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {[
            {
              title: "Create tasks",
              description: "Easily add and organize your to-dos",
            },
            {
              title: "Set priorities",
              description: "Focus on what matters most",
            },
            {
              title: "Track progress",
              description: "Visual boards to monitor your workflow",
            },
            {
              title: "Collaborate",
              description: "Work together with your team seamlessly",
            },
          ].map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </section>
        <section className="text-center">
          <h2 className="text-3xl font-bold mb-4">How it works</h2>
          <p className="text-xl text-gray-600 mb-8">
            Get started with MoveIt in just a few simple steps
          </p>
          <Link
            to="/signup"
            className="bg-emerald-500 text-white px-6 py-3 rounded-lg text-lg hover:bg-emerald-600 transition duration-200"
          >
            Try it now
          </Link>
        </section>
      </main>
      <footer className="bg-white mt-16 py-8">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>&copy; 2023 MoveIt. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
