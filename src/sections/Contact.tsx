import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import ContactForm from '../components/ContactForm';

const Contact: React.FC = () => {
  const email = import.meta.env.VITE_EMAIL || 'adil.mern.ai@gmail.com';
  const phone = import.meta.env.VITE_PHONE || '+92-312-056-7123';

  return (
    <AnimatedSection
      id="contact"
      className="section-container bg-gray-50 dark:bg-gray-900"
      animation="slide-up"
    >
      <div className="text-center mb-16">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle mx-auto">
          Feel free to reach out for collaborations, opportunities, or just to say hello!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="lg:order-2">
          <ContactForm />
        </div>

        <div className="lg:order-1 flex flex-col justify-between">
          <div className="space-y-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Contact Information
            </h3>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center text-primary-600 dark:text-primary-400">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
                  Email
                </p>
                <a
                  href={`mailto:${email}`}
                  className="text-lg text-gray-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  {email}
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center text-primary-600 dark:text-primary-400">
                <Phone size={24} />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
                  Phone
                </p>
                <a
                  href={`tel:${phone}`}
                  className="text-lg text-gray-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  {phone}
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center text-primary-600 dark:text-primary-400">
                <MapPin size={24} />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
                  Location
                </p>
                <p className="text-lg text-gray-900 dark:text-white">
                  Pakistan
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Let's connect!
            </h4>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              I'm always interested in hearing about new projects and opportunities. 
              Whether you have a question or just want to say hi, I'll try my best 
              to get back to you!
            </p>
            <a
              href={`mailto:${email}`}
              className="btn btn-primary inline-flex items-center gap-2"
            >
              Send Email
              <Send size={16} />
            </a>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Contact;