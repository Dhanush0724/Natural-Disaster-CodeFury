import React from 'react';

const HurricanePage = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="bg-blue-600 text-white p-6 rounded-lg shadow-lg mb-8">
        <h1 className="text-3xl font-bold mb-2 text-center">Hurricane Preparedness Guide</h1>
        <p className="text-center">Be prepared, stay safe, and protect your loved ones.</p>
      </div>

      <section className="mb-8">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-blue-600 mb-2">1. Know Your Risk</h2>
          <p className="text-gray-700">Understand the hurricane risk in your area. Check local weather services for updates and warnings.</p>
        </div>
      </section>

      <section className="mb-8">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-blue-600 mb-2">2. Create an Emergency Plan</h2>
          <p className="text-gray-700">Make a family emergency plan that includes evacuation routes, emergency contacts, and meeting points.</p>
        </div>
      </section>

      <section className="mb-8">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-blue-600 mb-2">3. Prepare an Emergency Kit</h2>
          <p className="text-gray-700">Pack an emergency kit with essentials like non-perishable food, water, medications, and a flashlight.</p>
        </div>
      </section>

      <section className="mb-8">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-blue-600 mb-2">4. Secure Your Home</h2>
          <p className="text-gray-700">Make sure your home is secure. Install storm shutters or board up windows and doors.</p>
        </div>
      </section>

      <section className="mb-8">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-blue-600 mb-2">5. Stay Informed</h2>
          <p className="text-gray-700">Monitor weather updates and follow local authorities’ instructions.</p>
        </div>
      </section>

      <section className="mb-8">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-blue-600 mb-4">Helpful Videos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-100 p-4 rounded-lg shadow-inner">
              <iframe 
                width="100%" 
                height="200" 
                src="https://www.youtube.com/embed/your-video-id" 
                title="Hurricane Safety Tips" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
              <p className="mt-2 text-center font-semibold">How to Prepare for a Hurricane</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg shadow-inner">
              <iframe 
                width="100%" 
                height="200" 
                src="https://www.youtube.com/embed/another-video-id" 
                title="Emergency Kit Essentials" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
              <p className="mt-2 text-center font-semibold">What to Include in Your Emergency Kit</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-blue-600 text-white text-center p-4 rounded-lg shadow-lg mt-8">
        <p>Stay safe and prepared. Always follow official guidelines.</p>
      </footer>
    </div>
  );
};

export default HurricanePage;
