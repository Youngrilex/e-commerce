import React from 'react'

const Contact = () => {
  return (
      <div className="container mx-auto mt-8" id='contact'>
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">Let’s talk</h2>
          <p className="text-lg">
            Say Hello. If you want to extend some info, do not hesitate to fill this form, we love to say ‘Hello Mate’.
          </p>
        </div>
        <div className="flex justify-center mt-8">
          <div className="w-full max-w-2xl">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <form action="https://formspree.io/f/mjkbyzgn" method="POST">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                <div className="mt-6">
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    name="subject"
                    placeholder="Your Subject"
                  />
                </div>
                <div className="mt-6">
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
                    className="w-full px-6 py-3 bg-primary/80 text-white rounded-lg hover:bg-primary focus:outline-none focus:ring-2 focus:ring-primary"
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
      </div>  
  )
}

export default Contact