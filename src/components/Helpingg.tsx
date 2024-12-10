import React from 'react'

const Helping = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
        <div className="w-full max-w-2xl bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">Get Help</h1>
          <p className="text-gray-600 text-center mb-8">
            Need assistance? Fill out the form below, and we&apso;ll get back to you shortly.
          </p>
          <form className="space-y-6">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your full name"
              />
            </div>
  
            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your email address"
              />
            </div>
  
            {/* Subject Field */}
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter the subject of your query"
              />
            </div>
  
            {/* Message Field */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="Write your message here..."
              ></textarea>
            </div>
  
            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full bg-black text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:ring-4 focus:ring-blue-300"
              >
                Submit
              </button>
            </div>
          </form>
  
          {/* Contact Information */}
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-600">
              Prefer to talk? Contact us at{" "}
              <a href="mailto:support@example.com" className="text-blue-500 hover:underline">
                support@example.com
              </a>
            </p>
          </div>
        </div></div>
  )
}

export default Helping