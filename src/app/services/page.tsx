import React from "react";
import Image from "next/image";

export default function Services() {
  return (
    <div className="bg-white">
      {/* Services Header */}
      <div className="relative bg-indigo-800">
        <div className="absolute inset-0">
          <Image
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2830&q=80"
            alt="People working on laptops"
            width={2000}
            height={1000}
          />
          <div
            className="absolute inset-0 bg-indigo-800 opacity-75"
            aria-hidden="true"
          ></div>
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Our Services
          </h1>
          <p className="mt-6 text-xl text-indigo-100 max-w-3xl">
            We offer a comprehensive range of digital services to help your
            business thrive in the digital world.
          </p>
        </div>
      </div>

      {/* Services List */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
              What We Offer
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Comprehensive Digital Solutions
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              From website development to digital marketing, we provide
              end-to-end services to help your business grow.
            </p>
          </div>

          <div className="mt-20">
            <div className="space-y-20">
              {services.map((service, index) => (
                <div
                  key={service.name}
                  className={`flex flex-col ${
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  } items-center gap-8 lg:gap-16`}
                >
                  <div className="lg:w-1/2">
                    <div className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden shadow-lg">
                      <Image
                        src={service.imageSrc}
                        alt={service.imageAlt}
                        width={800}
                        height={600}
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="lg:w-1/2">
                    <div className="text-lg max-w-prose mx-auto lg:max-w-none">
                      <h2 className="text-3xl font-extrabold text-gray-900 mt-2">
                        {service.name}
                      </h2>
                      <p className="mt-4 text-gray-500">
                        {service.description}
                      </p>
                      <div className="mt-6">
                        <h3 className="text-xl font-bold text-gray-900">
                          Key Features:
                        </h3>
                        <ul className="mt-4 space-y-2">
                          {service.features.map((feature) => (
                            <li key={feature} className="flex items-start">
                              <div className="flex-shrink-0">
                                <svg
                                  className="h-6 w-6 text-green-500"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M5 13l4 4L19 7"
                                  />
                                </svg>
                              </div>
                              <p className="ml-3 text-base text-gray-700">
                                {feature}
                              </p>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-indigo-50">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            <span className="block">Ready to get started?</span>
            <span className="block text-indigo-600">
              Contact us today to discuss your project.
            </span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
              >
                Get in touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const services = [
  {
    name: "Web Development",
    description:
      "We create responsive, user-friendly websites that provide exceptional user experiences. Our web development services are tailored to meet your specific business needs, whether you need a simple informational site or a complex e-commerce platform.",
    imageSrc:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1415&q=80",
    imageAlt: "Web development illustration",
    features: [
      "Responsive and mobile-friendly designs",
      "Custom web application development",
      "E-commerce solutions",
      "Content management systems",
      "Website maintenance and support",
    ],
  },
  {
    name: "Mobile App Development",
    description:
      "Our mobile app development team creates intuitive, engaging applications for iOS and Android platforms. We focus on delivering applications that provide value to your users while aligning with your business objectives.",
    imageSrc:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
    imageAlt: "Mobile app development illustration",
    features: [
      "Native iOS and Android development",
      "Cross-platform app development",
      "UI/UX design for mobile",
      "App testing and quality assurance",
      "Ongoing maintenance and updates",
    ],
  },
  {
    name: "Digital Marketing",
    description:
      "Boost your online presence with our comprehensive digital marketing services. We develop data-driven strategies to increase your brand visibility, drive traffic to your website, and convert visitors into customers.",
    imageSrc:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    imageAlt: "Digital marketing illustration",
    features: [
      "Search Engine Optimization (SEO)",
      "Pay-Per-Click (PPC) advertising",
      "Social media marketing",
      "Content marketing",
      "Email marketing campaigns",
    ],
  },
];
