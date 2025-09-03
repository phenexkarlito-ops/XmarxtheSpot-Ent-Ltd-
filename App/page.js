import { motion } from "framer-motion";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export default function Home() {
  return (
    <div className="bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-gradient-to-r from-purple-700 to-indigo-800 text-white">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold mb-4"
        >
          XmarxtheSpot Ent Ltd
        </motion.h1>
        <p className="max-w-2xl mb-6 text-lg md:text-xl">
          Helping new business owners build strong brands and gain exposure across all social media platforms.
        </p>
        <a href="#contact" className="bg-white text-indigo-700 hover:bg-gray-200 font-semibold px-6 py-3 rounded-2xl shadow-lg">
          Get Started
        </a>
      </section>

      {/* About Section */}
      <section className="py-16 px-6 md:px-20 bg-white">
        <h2 className="text-3xl font-bold text-center mb-8">Who We Are</h2>
        <p className="max-w-3xl mx-auto text-center text-lg">
          At <span className="font-semibold">XmarxtheSpot Ent Ltd</span>, we specialize in helping entrepreneurs and startups grow their online presence. From strategy to execution, we ensure your brand gets the visibility it deserves.
        </p>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 md:px-20 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              title: "Social Media Marketing",
              desc: "We create tailored campaigns to maximize engagement and growth on all major platforms.",
            },
            {
              title: "Brand Awareness",
              desc: "We position your brand to stand out, building recognition and loyalty with your audience.",
            },
            {
              title: "Content Creation",
              desc: "High-quality visuals, videos, and storytelling that capture your brand’s identity and message.",
            },
          ].map((service, i) => (
            <div key={i} className="rounded-2xl shadow-lg p-6 bg-white">
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 md:px-20 bg-white">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl shadow-lg p-6 bg-gray-50">
            <p className="italic mb-4">“XmarxtheSpot Ent gave my small business the exposure it needed. My audience doubled in just a few months.”</p>
            <p className="font-semibold">— Sarah J, Startup Founder</p>
          </div>
          <div className="rounded-2xl shadow-lg p-6 bg-gray-50">
            <p className="italic mb-4">“They understand branding like no one else. The strategies helped me connect with the right audience.”</p>
            <p className="font-semibold">— David K, Entrepreneur</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 md:px-20 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-6">Let’s Build Your Brand</h2>
        <p className="mb-6">Ready to take your business to the next level? Get in touch with us today.</p>
        <a href="mailto:contact@xmarxtheSpot.com" className="bg-indigo-700 text-white px-6 py-3 rounded-2xl shadow-lg hover:bg-indigo-800">
          Contact Us
        </a>
        <div className="flex justify-center gap-6 mt-8">
          <a href="#" className="hover:text-indigo-700"><Facebook /></a>
          <a href="#" className="hover:text-indigo-700"><Instagram /></a>
          <a href="#" className="hover:text-indigo-700"><Twitter /></a>
          <a href="#" className="hover:text-indigo-700"><Linkedin /></a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-indigo-900 text-white py-6 text-center">
        <p>© {new Date().getFullYear()} XmarxtheSpot Ent Ltd. All rights reserved.</p>
      </footer>
    </div>
  );
            }
