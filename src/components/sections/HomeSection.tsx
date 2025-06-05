
import { Button } from "@/components/ui/button";
import { featuredImages } from "@/data/portfolioData";

interface HomeSectionProps {
  setActiveSection: (section: string) => void;
}

const HomeSection = ({ setActiveSection }: HomeSectionProps) => (
  <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
    <div className="max-w-6xl mx-auto px-6 text-center">
      <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
        The Rambler's<br />
        <span className="text-blue-600">Lens</span>
      </h1>
      <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto">
        Capturing the world's beauty through wandering eyes. 
        Professional photography that tells stories of adventure and discovery.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {featuredImages.map((image, index) => (
          <div
            key={image.id}
            className="group relative overflow-hidden rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-500 bg-transparent"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <img
              src={image.src}
              alt={image.title}
              className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700 border-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-lg font-semibold">{image.title}</h3>
            </div>
          </div>
        ))}
      </div>
      
      <Button
        onClick={() => setActiveSection("portfolio")}
        size="lg"
        className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
      >
        Explore Portfolio
      </Button>
    </div>
  </section>
);

export default HomeSection;
