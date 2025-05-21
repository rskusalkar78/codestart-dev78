
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
    <section id="contact" className="pb-32 bg-slate-50 dark:bg-gray-900">
      <h2 className="text-2xl md:text-3xl font-bold section-title numbered-heading text-gray-800 dark:text-gray-200">
        <span className="text-indigo-600 dark:text-indigo-400">05.</span> Contact
      </h2>
      
      <div className="max-w-2xl mx-auto text-center mb-12">
        <h3 className="text-2xl md:text-4xl font-bold text-gray-800 dark:text-gray-200 mb-5">
          Get In Touch
        </h3>
        <p className="text-gray-600 dark:text-gray-300 text-lg">
          I'm currently looking for new opportunities. Whether you have a question or just want to say hi, 
          I'll try my best to get back to you!
        </p>
        <div className="mt-6 text-gray-600 dark:text-gray-300 flex flex-col md:flex-row justify-center gap-4 md:gap-8">
          <p>
            <span className="font-medium">Email:</span> 
            <a href="mailto:rkusalkar78@gmail.com" className="text-indigo-600 dark:text-indigo-400 hover:underline ml-1">
              rkusalkar78@gmail.com
            </a>
          </p>
          <p>
            <span className="font-medium">Phone:</span> 
            <a href="tel:+918446300815" className="text-indigo-600 dark:text-indigo-400 hover:underline ml-1">
              +91 8446300815
            </a>
          </p>
          <p>
            <span className="font-medium">Instagram:</span> 
            <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 dark:text-indigo-400 hover:underline ml-1">
              @rohan_kusalkar
            </a>
          </p>
        </div>
      </div>
      
      <div className="max-w-xl mx-auto">
        <form onSubmit={handleSubmit} className="space-y-6 bg-white dark:bg-gray-800 p-6 md:p-8 rounded-lg shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 mb-2 text-sm">
                Name
              </label>
              <Input
                id="name"
                name="name"
                placeholder="John Doe"
                required
                value={formData.name}
                onChange={handleChange}
                className="bg-gray-50 dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 focus:border-indigo-500 dark:focus:border-indigo-400"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 mb-2 text-sm">
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
                className="bg-gray-50 dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 focus:border-indigo-500 dark:focus:border-indigo-400"
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="subject" className="block text-gray-700 dark:text-gray-300 mb-2 text-sm">
              Subject
            </label>
            <Input
              id="subject"
              name="subject"
              placeholder="Job Opportunity"
              value={formData.subject}
              onChange={handleChange}
              className="bg-gray-50 dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 focus:border-indigo-500 dark:focus:border-indigo-400"
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 mb-2 text-sm">
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
              className="bg-gray-50 dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 focus:border-indigo-500 dark:focus:border-indigo-400 resize-none"
            />
          </div>
          
          <div className="text-center pt-4">
            <Button
              type="submit"
              disabled={isSubmitting}
              className="bg-indigo-600 hover:bg-indigo-700 text-white py-4 px-8 text-base transition-all font-medium rounded-md"
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
