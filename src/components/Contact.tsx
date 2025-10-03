import { Mail, MapPin, Phone } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-dark mb-12">Get In Touch</h2>
        
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          <div className='  rounded-lg p-4 shadow-lg'>
            <h3 className="text-2xl font-semibold mb-6 text-secondary">Let's Talk</h3>
            <p className="text-gray-600 mb-8">
              I'm always open to discussing new opportunities and interesting projects. 
              Feel free to reach out if you'd like to work together!
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Mail className="text-primary" />
                </div>
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-gray-600">msherin1ll0@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Phone className="text-primary" />
                </div>
                <div>
                  <p className="font-semibold">Phone</p>
                  <p className="text-gray-600">+91 90039 76090</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <MapPin className="text-primary" />
                </div>
                <div>
                  <p className="font-semibold">Location</p>
                  <p className="text-gray-600">Kanyakumari, India</p>
                </div>
              </div>
            </div>
          </div>
          
          <form onSubmit={handleSubmit} className=" rounded-lg p-4 shadow-lg" >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                required
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                required
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                required
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="w-full bg-primary text-white py-3 px-6 rounded-lg font-semibold  transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;