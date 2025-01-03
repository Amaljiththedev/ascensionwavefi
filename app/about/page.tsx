// AboutUsPage.js
import React from "react";

const AboutUsPage = () => {
  return (
    <div className="relative">
      {/* Main Content */}
      <div className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl">
            About Us
          </h1>
          <p className="mt-4 text-lg text-neutral-200">
            We are a cutting-edge software agency, passionate about creating innovative solutions that power the digital transformation of businesses. We strive to deliver exceptional products and services that drive growth and make a positive impact on the world.
          </p>
        </div>

        <div className="mt-12 max-w-4xl mx-auto grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-2">
          {/* Mission Section */}
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-white">Our Mission</h2>
            <p className="mt-2 text-neutral-300">
              Our mission is to empower businesses by providing innovative software solutions that drive digital transformation, enhance efficiency, and foster sustainable growth. We work with our clients to develop custom solutions that meet their unique needs and goals.
            </p>
            <p className="mt-4 text-neutral-300">
              At our core, we believe in creating scalable, secure, and future-proof technologies that enable our clients to stay ahead of the curve in an ever-evolving digital landscape.
            </p>
          </div>

          {/* Vision Section */}
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-white">Our Vision</h2>
            <p className="mt-2 text-neutral-300">
              We envision a future where technology not only solves problems but drives positive change. By continuously evolving and staying ahead of industry trends, we aim to be a global leader in providing innovative software solutions that transform businesses and improve lives.
            </p>
            <p className="mt-4 text-neutral-300">
              We strive to create a world where our products and services contribute to building sustainable, smart, and technology-driven businesses that create long-term value for their stakeholders.
            </p>
          </div>
        </div>

        {/* Values Section */}
        <div className="mt-12 max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold text-white text-center">Our Values</h2>
          <p className="mt-2 text-lg text-neutral-200 text-center">
            Our core values define who we are and guide everything we do. They shape our approach to working with clients, our culture, and our commitment to delivering high-quality results.
          </p>
          <div className="mt-8 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {/* Value 1 */}
            <div className="bg-neutral-800 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-white">Innovation</h3>
              <p className="mt-2 text-neutral-400">
                We embrace new ideas, technologies, and creative thinking to develop forward-thinking solutions that deliver tangible value to our clients.
              </p>
            </div>

            {/* Value 2 */}
            <div className="bg-neutral-800 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-white">Integrity</h3>
              <p className="mt-2 text-neutral-400">
                We prioritize honesty, transparency, and trustworthiness in every aspect of our business, ensuring our clients can rely on us to deliver exceptional results.
              </p>
            </div>

            {/* Value 3 */}
            <div className="bg-neutral-800 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-white">Excellence</h3>
              <p className="mt-2 text-neutral-400">
                We are committed to the highest standards of quality in everything we do. Our relentless pursuit of excellence ensures that every project is executed with precision and professionalism.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
