
const AboutSection = () => (
  <section className="py-20 bg-gray-50">
    <div className="max-w-4xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About the Rambler</h2>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <p className="text-lg text-gray-700 leading-relaxed">
            Welcome to my world of wandering photography. I'm a passionate photographer who believes that the best stories are found off the beaten path, in the quiet moments between destinations.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            My journey began with a simple camera and an insatiable curiosity about the world around me. What started as casual hiking photography has evolved into a deep exploration of landscapes, nature, and the profound beauty found in solitude.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Each photograph in my portfolio represents not just a moment in time, but a story of discovery, patience, and the raw beauty of our natural world. I specialize in landscape and nature photography, always seeking that perfect interplay of light, shadow, and emotion.
          </p>
          
          <div className="pt-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Services Offered:</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Landscape & Nature Photography</li>
              <li>• Fine Art Print Sales</li>
              <li>• Custom Photography Commissions</li>
              <li>• Photography Workshops & Tours</li>
            </ul>
          </div>
        </div>
        
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1469474968028-56623f02e42e"
            alt="Photographer in nature"
            className="rounded-2xl shadow-2xl w-full h-96 object-cover"
          />
          <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-xl shadow-lg">
            <p className="text-sm font-medium">Capturing moments</p>
            <p className="text-2xl font-bold">Since 2018</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
