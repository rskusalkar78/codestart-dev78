
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

const Contact: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // This would normally be a fetch call to a form handling service like Formspree or EmailJS
    // Simulate an API call with setTimeout
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="pb-32">
      <h2 className="text-2xl md:text-3xl font-bold section-title numbered-heading">
        <span>05.</span> Contact
      </h2>
      
      <div className="max-w-2xl mx-auto text-center mb-12">
        <h3 className="text-2xl md:text-4xl font-bold text-portfolio-lightestSlate mb-5">
          Get In Touch
        </h3>
        <p className="text-portfolio-slate text-lg">
          I'm currently looking for new opportunities. Whether you have a question or just want to say hi, 
          I'll try my best to get back to you!
        </p>
        <div className="mt-4 text-portfolio-slate">
          <p>Email: <a href="mailto:rkusalkar78@gmail.com" className="text-portfolio-green hover:underline">rkusalkar78@gmail.com</a></p>
          <p>Phone: <a href="tel:+918446300815" className="text-portfolio-green hover:underline">+91 8446300815</a></p>
        </div>
      </div>
      
      <div className="max-w-xl mx-auto">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-portfolio-lightSlate mb-2 text-sm">
                Name
              </label>
              <Input
                id="name"
                name="name"
                placeholder="John Doe"
                required
                value={formData.name}
                onChange={handleChange}
                className="bg-portfolio-lightNavy border-portfolio-lightestNavy text-portfolio-lightSlate focus:border-portfolio-green"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-portfolio-lightSlate mb-2 text-sm">
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="johndoe@example.com"
                required
                value={formData.email}
                onChange={handleChange}
                className="bg-portfolio-lightNavy border-portfolio-lightestNavy text-portfolio-lightSlate focus:border-portfolio-green"
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="subject" className="block text-portfolio-lightSlate mb-2 text-sm">
              Subject
            </label>
            <Input
              id="subject"
              name="subject"
              placeholder="Job Opportunity"
              value={formData.subject}
              onChange={handleChange}
              className="bg-portfolio-lightNavy border-portfolio-lightestNavy text-portfolio-lightSlate focus:border-portfolio-green"
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block text-portfolio-lightSlate mb-2 text-sm">
              Message
            </label>
            <Textarea
              id="message"
              name="message"
              placeholder="Hello, I'd like to talk about..."
              required
              rows={5}
              value={formData.message}
              onChange={handleChange}
              className="bg-portfolio-lightNavy border-portfolio-lightestNavy text-portfolio-lightSlate focus:border-portfolio-green resize-none"
            />
          </div>
          
          <div className="text-center pt-4">
            <Button
              type="submit"
              disabled={isSubmitting}
              className="bg-transparent hover:bg-portfolio-green/10 border border-portfolio-green text-portfolio-green py-4 px-8 text-base transition-all"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
