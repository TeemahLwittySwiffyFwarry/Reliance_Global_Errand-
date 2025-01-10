import React from 'react';

const Contact = () => {
  return (
    <div>
       <section id="contact" className="bg-gradient-to-r from-blue-50 to-blue-200 text-white py-16 w-full">
  <div className="container mx-auto px-4">
    {/* Title Section */}
    <h2 className="text-3xl font-extrabold text-blue-500 text-center mb-6">
      Contact Us
    </h2>

    {/* Contact Info Card */}
    <div className="bg-white text-gray-800 rounded-xl shadow-lg overflow-hidden md:flex md:items-center md:space-x-6 p-8">
      <div className="md:w-1/2">
        <h3 className="text-2xl font-semibold text-teal-600">Our Office</h3>
        <p className="mt-4">
          Address: 5, Ajoke Kasomo Close, Off Idowu Adeniji Street, Ekoro Road,
          Abule Egba Bus Stop, Lagos
        </p>
      </div>

      <div className="md:w-1/2 my-6 md:mt-0">
        <h3 className="text-2xl font-semibold text-teal-600">Get In Touch</h3>
        <p className="mt-4">Phone:</p>
        <p className="font-bold">08034113539, 08097711667, 08099756408</p>
        <p className="mt-4">Email:</p>
        <a
          href="mailto:services.relianceglobalerrands@gmail.com"
          className="text-blue-500 hover:text-teal-600 transition duration-300 ease-in-out"
        >
          services.relianceglobalerrands@gmail.com
        </a>
      </div>
    </div>

    {/* Call to Action */}
    <div className="mt-12 text-center">
      <p className="text-lg font-medium text-blue-500">
        We'd love to hear from you! Reach out to us with any questions or requests.
      </p>
      <a
  href="https://wa.me/+2348034113539?text=Hello!%20I%20need%20assistance."
  target="_blank"
  rel="noopener noreferrer"
  className="mt-6 inline-block bg-blue-600 text-white py-3 px-8 rounded-full text-xl font-bold hover:bg-blue-200 transition duration-300 ease-in-out"
>
  Send Us a Message
</a>

    </div>
  </div>
</section>

    </div>
  );
};

export default Contact;
