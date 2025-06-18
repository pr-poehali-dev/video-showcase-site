import React from "react";
import { Link, useLocation } from "react-router-dom";
import Icon from "@/components/ui/icon";

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Главная", icon: "Home" },
    { path: "/portfolio", label: "Портфолио", icon: "Video" },
    { path: "/process", label: "Процесс работы", icon: "Workflow" },
    { path: "/contacts", label: "Контакты", icon: "MessageCircle" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 animate-slide-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-gradient-to-r from-creative-purple to-creative-magenta rounded-xl flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
              <Icon name="Zap" size={20} className="text-white" />
            </div>
            <span className="font-montserrat font-bold text-xl text-gray-900">
              ReelsMaster
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 ${
                  location.pathname === item.path
                    ? "bg-gradient-to-r from-creative-purple to-creative-magenta text-white shadow-lg"
                    : "text-gray-700 hover:text-creative-purple hover:bg-purple-50"
                }`}
              >
                <Icon name={item.icon} size={18} />
                <span className="font-medium">{item.label}</span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="p-2 rounded-lg text-gray-700 hover:text-creative-purple hover:bg-purple-50 transition-colors">
              <Icon name="Menu" size={24} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
