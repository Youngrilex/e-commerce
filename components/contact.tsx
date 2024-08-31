import React from 'react';

const Contact = () => {
  return (
    <div className="container mx-auto mt-12 px-4" id="contact">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Let’s talk</h2>
        <p className="text-base sm:text-lg">
       Say Hello. If you want to extend some info, do not hesitate to fill out this form, we love to say ‘Hello Mate’.
        </p>
      </div>
      <div className="flex justify-center">
        <div className="w-full max-w-xl bg-white p-6 sm:p-8 rounded-lg shadow-lg">
          <form action="https://formspree.io/f/mjkbyzgn" method="POST">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <input
                type="text"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                name="cf-name"
                placeholder="Your Name"
                required
              />
              <input
                type="email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                name="email"
                placeholder="Your Email"
                required
              />
            </div>
            <div className="mt-4 sm:mt-6">
              <input
                type="text"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                name="subject"
                placeholder="Your Subject"
              />
            </div>
            <div className="mt-4 sm:mt-6">
              <textarea
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                name="cf-message"
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <div className="mt-6 text-center">
              <button
                type="submit"
                className="w-full sm:w-auto px-6 py-3 bg-primary/90 text-white rounded-lg hover:bg-primary focus:outline-none focus:ring-2 focus:ring-primary"
                id="cf-submit"
                name="submit"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
