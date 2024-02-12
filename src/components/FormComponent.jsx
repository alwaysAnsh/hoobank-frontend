import React from 'react';

function FormComponent() {
  return (
    <div className="max-w-md mx-auto bg-white opacity-90 p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-6">Register Here</h2>
      <form>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input type="email" id="email" name="email" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md " placeholder="example@example.com" required />
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
          <input type="tel" id="phone" name="phone" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md " placeholder="123-456-7890" required />
        </div>
        <div className="flex justify-end">
          <button type="submit" className="bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default FormComponent;
