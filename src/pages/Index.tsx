import { useState } from "react";
import { Camera, Mail, Instagram, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");
  const { toast } = useToast();

  const portfolioImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05",
      title: "Misty Mountain Peak",
      category: "landscapes"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1458668383970-8ddd3927deed",
      title: "Alpine Valley",
      category: "landscapes"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1500673922987-e212871fec22",
      title: "Golden Hour Forest",
      category: "nature"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1501854140801-50d01698950b",
      title: "Mountain Vista",
      category: "landscapes"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1615729947596-a598e5de0ab3",
      title: "Highland Meadow",
      category: "nature"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
      title: "Sunlit Ridge",
      category: "landscapes"
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb",
      title: "River Valley",
      category: "nature"
    }
  ];

  const featuredImages = [
    {
      id: 1,
      src: "/lovable-uploads/9c5c06f6-489d-42b0-9248-6340e2b3024a.png",
      title: "Coastal Majesty",
      category: "seascapes"
    },
    {
      id: 2,
      src: "/lovable-uploads/57addf1f-22e9-4831-8b47-cbd3654aadd7.png",
      title: "Rolling Hills",
      category: "landscapes"
    },
    {
      id: 3,
      src: "/lovable-uploads/c88839cb-02b1-461e-923d-f47754d57484.png",
      title: "Misty Cliffs",
      category: "seascapes"
    }
  ];

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thank you for your interest. I'll get back to you soon.",
    });
  };

  const Navigation = () => (
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

  const HomeSection = () => (
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
              className="group relative overflow-hidden rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-500"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
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

  const ContactSection = () => (
    <section className="py-20 bg-gradient-to-br from-blue-600 to-indigo-700">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Let's Work Together</h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Ready to capture your vision or commission a custom piece? I'd love to hear about your project.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-white mb-6">Get in Touch</h3>
              <form onSubmit={handleContactSubmit} className="space-y-6">
                <div>
                  <Input
                    placeholder="Your Name"
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
                    required
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Your Email"
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
                    required
                  />
                </div>
                <div>
                  <Input
                    placeholder="Subject"
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
                    required
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Tell me about your project..."
                    rows={4}
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-white text-blue-600 hover:bg-blue-50 font-semibold py-3"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Mail className="h-6 w-6 text-blue-200" />
                  <div>
                    <p className="text-white font-medium">Email</p>
                    <p className="text-blue-200">hello@theramblerlens.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="h-6 w-6 text-blue-200" />
                  <div>
                    <p className="text-white font-medium">Phone</p>
                    <p className="text-blue-200">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Instagram className="h-6 w-6 text-blue-200" />
                  <div>
                    <p className="text-white font-medium">Instagram</p>
                    <p className="text-blue-200">@theramblerlens</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <h4 className="text-lg font-semibold text-white mb-3">Response Time</h4>
              <p className="text-blue-100">
                I typically respond to inquiries within 24-48 hours. For urgent projects, 
                please mention it in your message subject line.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <div className="pt-20">
        {activeSection === "home" && <HomeSection />}
        {activeSection === "portfolio" && <PortfolioSection />}
        {activeSection === "about" && <AboutSection />}
        {activeSection === "contact" && <ContactSection />}
      </div>
    </div>
  );
};

export default Index;
