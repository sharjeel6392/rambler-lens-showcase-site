
import { Camera } from "lucide-react";

interface NavigationProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Navigation = ({ activeSection, setActiveSection }: NavigationProps) => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
    <div className="max-w-7xl mx-auto px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Camera className="h-8 w-8 text-blue-600" />
          <span className="text-2xl font-bold text-gray-900">The Rambler's Lens</span>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          {["home", "portfolio", "about", "contact"].map((section) => (
            <button
              key={section}
              onClick={() => setActiveSection(section)}
              className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                activeSection === section ? "text-blue-600" : "text-gray-700"
              }`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
        </div>
      </div>
    </div>
  </nav>
);

export default Navigation;
