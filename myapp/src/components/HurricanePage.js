import React from 'react';

const HurricanePage = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
      <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">
        Step-by-Step Guide to Hurricane Preparedness
      </h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-700">1. Know Your Risk</h2>
        <p className="text-lg text-gray-600">
          Understand the hurricane risk in your area. Check local weather services for updates and warnings.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-700">2. Create an Emergency Plan</h2>
        <p className="text-lg text-gray-600">
          Make a family emergency plan that includes evacuation routes, emergency contacts, and meeting points.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-700">3. Prepare an Emergency Kit</h2>
        <p className="text-lg text-gray-600">
          Pack an emergency kit with essentials like non-perishable food, water, medications, and a flashlight.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-700">4. Secure Your Home</h2>
        <p className="text-lg text-gray-600">
          Make sure your home is secure. Install storm shutters or board up windows and doors.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-700">5. Stay Informed</h2>
        <p className="text-lg text-gray-600">
          Monitor weather updates and follow local authorities’ instructions.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-700">Helpful Videos</h2>
        <div className="flex flex-col gap-8">
          <div className="flex flex-col items-center">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/your-video-id"
              title="Hurricane Safety Tips"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg shadow-md"
            ></iframe>
            <p className="mt-2 text-lg text-gray-600">How to Prepare for a Hurricane - [Your Channel]</p>
          </div>
          <div className="flex flex-col items-center">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/another-video-id"
              title="Emergency Kit Essentials"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg shadow-md"
            ></iframe>
            <p className="mt-2 text-lg text-gray-600">What to Include in Your Emergency Kit - [Your Channel]</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HurricanePage;
