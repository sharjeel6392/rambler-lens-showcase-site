
import { Mail, Instagram, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thank you for your interest. I'll get back to you soon.",
    });
  };

  return (
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
};

export default ContactSection;
