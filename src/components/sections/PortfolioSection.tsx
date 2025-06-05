
import { portfolioImages } from "@/data/portfolioData";

const PortfolioSection = () => (
  <section className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Portfolio</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          A collection of moments captured during my travels. Each photograph tells a story of places discovered and emotions felt.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {portfolioImages.map((image, index) => (
          <div
            key={image.id}
            className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
          >
            <img
              src={image.src}
              alt={image.title}
              className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-6 left-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
              <h3 className="text-xl font-semibold mb-2">{image.title}</h3>
              <span className="text-sm bg-blue-600 px-3 py-1 rounded-full">
                {image.category}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default PortfolioSection;
