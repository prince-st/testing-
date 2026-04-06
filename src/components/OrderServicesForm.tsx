
import React from 'react';

const OrderServicesForm = () => {
  return (
    <section className="py-20 bg-white">
      <div className="fn-container">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Order Services</h2>
          <form>
            <div className="grid grid-cols-1 gap-6">
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700">Select Service *</label>
                <select id="service" name="service" className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md">
                  <option>New release dissemination</option>
                </select>
              </div>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Your name *</label>
                <input type="text" name="name" id="name" placeholder="Full name" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700">Company name *</label>
                <input type="text" name="company" id="company" placeholder="ABC Inc" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email *</label>
                <input type="email" name="email" id="email" placeholder="Company email" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
              </div>
              <div>
                <label htmlFor="publicly-traded" className="block text-sm font-medium text-gray-700">Publicly Traded *</label>
                <select id="publicly-traded" name="publicly-traded" className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md">
                  <option>Yes</option>
                  <option>No</option>
                </select>
              </div>
              <div>
                <label htmlFor="ticker" className="block text-sm font-medium text-gray-700">Ticker Symbol(s) *</label>
                <input type="text" name="ticker" id="ticker" placeholder="CSL-ASX; OTC-XXX" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
              </div>
              <div>
                <label htmlFor="more-info" className="block text-sm font-medium text-gray-700">Tell Us More</label>
                <textarea id="more-info" name="more-info" rows={4} placeholder="E.g. Pre-listing to list on OTCQB; require news feed setup." className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"></textarea>
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

export default OrderServicesForm;
