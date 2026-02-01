import React from "react";
import { Mail, Phone, MapPin } from "lucide-react"; 

const Contact = () => {
  return (
    <div
      id="Contact"
      className="container mx-auto px-6 md:px-20 lg:px-32 py-20"
    >
      {/* Heading */}
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-4">
        Contact <span className="underline underline-offset-4 decoration-1 font-light">Us</span>
      </h1>
      <p className="text-center text-gray-500 mb-12 max-w-xl mx-auto">
        Have questions or want to work with us? Fill out the form below or reach us directly.
      </p>

      {/* Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* Contact Info */}
        <div className="flex flex-col justify-center space-y-6">
          <div className="flex items-center gap-4">
            <Phone className="text-amber-700" />
            <p className="text-gray-700">+1 (123) 456-7890</p>
          </div>
          <div className="flex items-center gap-4">
            <Mail className="text-amber-700" />
            <p className="text-gray-700">info@yourcompany.com</p>
          </div>
          <div className="flex items-center gap-4">
            <MapPin className="text-amber-700" />
            <p className="text-gray-700">123 Main Street, New York, USA</p>
          </div>
        </div>

        {/* Contact Form */}
        <form className="bg-white shadow-lg rounded-2xl p-8 space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-amber-700 outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-amber-700 outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
            <textarea
              rows="4"
              placeholder="Write your message..."
              className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-amber-700 outline-none"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-amber-700 text-white py-3 rounded-lg font-medium hover:bg-amber-800 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
