import React from "react";

const SubscribeCard = () => {
  return (
    <div className="bg-color-sky-transparend text-white p-6   w-full xl:max-w-lg md:max-w-sm   ">
      {/* Subscribe Header */}
      <h2 className="text-lg font-bold mb-4">Subscribe</h2>

      {/* Subscription Form */}
      <div className="flex items-center mb-4">
        <input
          type="email"
          placeholder="Email address"
          className="flex-1 p-2 rounded-l-md focus:outline-none text-gray-800"
        />
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-r-md">
          &#8594;
        </button>
      </div>

      {/* Description */}
      <p className="text-sm leading-relaxed">
        Hello, we are Lift Media. Our goal is to translate the positive effects
        from revolutionizing how companies engage with their clients & their
        team.
      </p>
    </div>
  );
};

export default SubscribeCard;
 