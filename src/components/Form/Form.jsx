import React from 'react';

const FormComponent = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <form onSubmit={handleSubmit} className="w-full px-4">
      <div className="flex xl:flex-nowrap flex-wrap  mb-4 gap-5 justify-between">
        <div className="w-full xl:w-3/6  mb-4 md:mb-0">
          <label
            htmlFor="full-name"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Full Name
          </label>
          <input
            id="full-name"
            type="text"
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight  outline-none"
            required
          />
        </div>
        <div className="w-full xl:w-1/2 ">
          <label
            htmlFor="email"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight outline-none"
            required
          />
        </div>
      </div>
      <div className="mb-4">
        <label
          htmlFor="subject"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Subject
        </label>
        <input
          id="subject"
          type="text"
          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight  outline-none"
          required
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="message"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Message
        </label>
        <textarea
          id="message"
          rows="4"
          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight   outline-none"
          required
        />
      </div>
      <div className="flex">
        <button
          type="submit"
          className="bg-color-sky-blue hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default FormComponent;