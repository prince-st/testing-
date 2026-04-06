
import React from 'react';

const ContactForm = () => {
  return (
    <section className="py-20 bg-[#F6F6F9]">
      <div className="fn-container">
        <div className="max-w-2xl mx-auto">
          <form>
            <div className="grid grid-cols-1 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Your name *</label>
                <input type="text" name="name" id="name" placeholder="Full name" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700">Company name *</label>
                <input type="text" name="company" id="company" placeholder="ABC Inc" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
              </div>
              <div>
                <label htmlFor="telephone" className="block text-sm font-medium text-gray-700">Telephone</label>
                <input type="tel" name="telephone" id="telephone" placeholder="Company email" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email *</label>
                <input type="email" name="email" id="email" placeholder="Email" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message *</label>
                <textarea id="message" name="message" rows={4} placeholder="E.g. Pre-listing to list on OTCQB; require news feed setup." className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"></textarea>
              </div>
              <div className="text-center">
                <button type="submit" className="fn-btn-primary">Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
