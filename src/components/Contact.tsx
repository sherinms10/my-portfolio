import {
  CheckCircle,
  FileText,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  User,
} from "lucide-react";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const EMAILJS_SERVICE_ID = "service_da34pxb";
  const EMAILJS_TEMPLATE_ID = "template_m0astzs";
  const EMAILJS_PUBLIC_KEY = "FoROyTbeDxa5ITTX1";

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validatePhone = (phone: string) => /^[\+]?[0-9\s\-\(\)]{10,15}$/.test(phone);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    const sanitizedValue = value.replace(/[<>'"]/g, "");
    setFormData((prev) => ({ ...prev, [name]: sanitizedValue }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all required fields.");
      return;
    }

    if (!validateEmail(formData.email)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (formData.phone && !validatePhone(formData.phone)) {
      alert("Please enter a valid phone number.");
      return;
    }

    setIsSubmitting(true);
    try {
      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formData,
        EMAILJS_PUBLIC_KEY
      );

      if (result.text === "OK") {
        setIsSubmitted(true);
        setFormData({ name: "", email: "", phone: "", message: "" });
        setTimeout(() => setIsSubmitted(false), 5000);
      }
    } catch (error) {
      console.error("Email Send Error", error);
      alert("Error sending message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: "+91 90039 76090",
      action: "tel:+919003976090",
    },
    {
      icon: Mail,
      title: "Email",
      details: "msherin1110@gmail.com",
      action: "mailto:msherin1110@gmail.com",
    },
    {
      icon: MapPin,
      title: "Location",
      details: "Kanyakumari, India",
      action: "#",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-10">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Get In <span className="text-blue-600">Touch</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            I’m always open to discussing new opportunities and interesting
            projects. Feel free to reach out if you’d like to work together!
          </p>
        </div>

        {/* Grid Layout */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Left Contact Info */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Contact Information
            </h3>

            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <a
                    key={index}
                    href={info.action}
                    className="flex items-center space-x-4 hover:scale-105 transform transition duration-300"
                  >
                    <div className="bg-gradient-to-r from-blue-800 to-blue-600 text-white p-3 rounded-lg shadow-md">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900">
                        {info.title}
                      </h4>
                      <p className="text-gray-600">{info.details}</p>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Embedded Google Map */}
            <div className="h-64 sm:h-72 lg:h-80 rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d246.78512120940886!2d77.16019994747708!3d8.24672624751031!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1759908841637!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
              ></iframe>
            </div>
          </div>

          {/* Right Contact Form */}
          <div className="shadow-lg rounded-xl bg-gradient-to-br from-blue-800/10 via-blue-600/20 to-blue-500/30 p-6 sm:p-8 relative overflow-hidden backdrop-blur-sm">
            {/* Decorative Elements */}
            <div className="absolute top-4 right-4 w-8 h-8 bg-blue-800/10 rounded-full"></div>
            <div className="absolute bottom-4 left-4 w-6 h-6 bg-blue-600/10 rounded-full"></div>
            <div className="absolute top-1/2 right-8 w-4 h-4 bg-blue-800/10 rounded-full"></div>

            {/* Form Header */}
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-blue-800 flex items-center gap-2 mb-6">
                <FileText className="h-6 w-6" />
                Send Us a Message
              </h3>
            </div>

            {/* Form Content */}
            <div className="relative z-10">
              {isSubmitted ? (
                <div className="text-center py-8">
                  <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
                  <h4 className="text-xl font-bold text-green-600 mb-2">
                    Message Sent Successfully!
                  </h4>
                  <p className="text-gray-600">
                    We’ll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name + Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="text-blue-800 font-medium flex items-center gap-2 mb-2"
                      >
                        <User className="h-4 w-4" /> Full Name *
                      </label>
                      <input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="Your full name"
                        className="w-full px-4 py-3 bg-white/90 border-blue-800/20 rounded-lg focus:ring-2 focus:ring-blue-800 focus:border-transparent transition-all"
                      />
                    </div>
                   {/* Phone */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="text-blue-800 font-medium flex items-center gap-2 mb-2"
                    >
                      <Phone className="h-4 w-4" /> Phone Number
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full px-4 py-3 bg-white/90 border-blue-800/20 rounded-lg focus:ring-2 focus:ring-blue-800 focus:border-transparent transition-all"
                    />
                  </div>
                  </div>

 <div>
                      <label
                        htmlFor="email"
                        className="text-blue-800 font-medium flex items-center gap-2 mb-2"
                      >
                        <Mail className="h-4 w-4" /> Email *
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="your.email@example.com"
                        className="w-full px-4 py-3 bg-white/90 border-blue-800/20 rounded-lg focus:ring-2 focus:ring-blue-800 focus:border-transparent transition-all"
                      />
                    </div>
                  

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="text-blue-800 font-medium flex items-center gap-2 mb-2"
                    >
                      <MessageCircle className="h-4 w-4" /> Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={5}
                      required
                      placeholder="Write your message here..."
                      className="w-full px-4 py-3 bg-white/90 border-blue-800/20 rounded-lg focus:ring-2 focus:ring-blue-800 focus:border-transparent transition-all"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-800 to-blue-600 text-white rounded-full py-3 px-6 hover:shadow-xl hover:scale-105 transition-all duration-300"
                  >
                    <span className="flex items-center justify-center gap-2">
                      {isSubmitting ? (
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      ) : (
                        <Send className="h-5 w-5" />
                      )}
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
