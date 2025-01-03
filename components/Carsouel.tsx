"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "./apple-cards";
import { IconZoomCode, IconEdit, IconAutomaticGearbox, IconCodeCircle2Filled, IconBrandGithub, IconBulldozer, IconChartInfographic, IconTreadmill } from '@tabler/icons-react';

export function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20">
      <h2 className="max-w-7xl mx-auto pl-4 text-xl md:text-4xl lg:text-5xl font-bold text-neutral-800 dark:text-neutral-200 text-center font-sans">
        Redefining digital success, one project at a time.
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const AgencyLifecycleStage1 = () => {
  return (
    <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-6 md:p-8 lg:p-14 rounded-3xl mb-6">
      <p className="text-neutral-600 dark:text-neutral-400 text-sm md:text-lg lg:text-2xl font-sans max-w-3xl mx-auto">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          Stage 1: Discovery & Strategy
        </span>{" "}
        In the discovery phase, we get to know our clients’ goals, target audience, and business objectives. We conduct detailed consultations and research to define a clear vision. This phase includes:
        <ul className="list-disc pl-6 mt-3">
          <li>Client discovery sessions to understand pain points, goals, and vision.</li>
          <li>Market research to understand industry trends, competitors, and potential opportunities.</li>
          <li>Defining user personas and target demographics to guide design and development.</li>
          <li>Setting measurable KPIs to track success throughout the project lifecycle.</li>
        </ul>
        The goal of this stage is to ensure alignment with the client's vision and prepare a solid foundation for all future development work.
      </p>
    </div>
  );
};

const AgencyLifecycleStage2 = () => {
  return (
    <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-6 md:p-8 lg:p-14 rounded-3xl mb-6">
      <p className="text-neutral-600 dark:text-neutral-400 text-sm md:text-lg lg:text-2xl font-sans max-w-3xl mx-auto">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          Stage 2: Design & Wireframing
        </span>{" "}
        In this phase, we translate the strategy into visual representations. Our design team creates wireframes, mockups, and prototypes to bring the vision to life. Key activities include:
        <ul className="list-disc pl-6 mt-3">
          <li>Creating wireframes that outline the structure and layout of key pages.</li>
          <li>Designing high-fidelity mockups and prototypes that represent the final look and feel of the product.</li>
          <li>Ensuring design choices align with user experience principles and client branding.</li>
          <li>Collaborating with the client to review and refine designs.</li>
        </ul>
        The design phase sets the tone for user interaction and helps visualize the project's final product.
      </p>
    </div>
  );
};

const AgencyLifecycleStage3 = () => {
  return (
    <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-6 md:p-8 lg:p-14 rounded-3xl mb-6">
      <p className="text-neutral-600 dark:text-neutral-400 text-sm md:text-lg lg:text-2xl font-sans max-w-3xl mx-auto">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          Stage 3: Development & Coding
        </span>{" "}
        Once the design is approved, we move to the development phase where the code comes to life. Our developers work with modern tools and technologies to build a scalable, high-performance website. This stage includes:
        <ul className="list-disc pl-6 mt-3">
          <li>Setting up the development environment and preparing the technical stack (e.g., front-end, back-end, databases, etc.).</li>
          <li>Developing the core functionality, user interfaces, and backend services based on the approved designs.</li>
          <li>Implementing responsive design to ensure the website works well across all devices and screen sizes.</li>
          <li>Regular testing of code and functionality to ensure quality and performance standards are met.</li>
        </ul>
        We aim to create a secure, scalable, and fast website that functions seamlessly.
      </p>
    </div>
  );
};

const AgencyLifecycleStage4 = () => {
  return (
    <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-6 md:p-8 lg:p-14 rounded-3xl mb-6">
      <p className="text-neutral-600 dark:text-neutral-400 text-sm md:text-lg lg:text-2xl font-sans max-w-3xl mx-auto">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          Stage 4: Quality Assurance & Testing
        </span>{" "}
        Before launching the website, it's crucial to ensure everything works flawlessly. Our QA team tests the website in multiple scenarios to catch bugs and improve performance. This stage includes:
        <ul className="list-disc pl-6 mt-3">
          <li>Conducting functional testing to ensure all features and pages work as expected.</li>
          <li>Performing cross-browser testing to ensure compatibility with all major browsers.</li>
          <li>Testing website performance, including load times, responsiveness, and mobile compatibility.</li>
          <li>Conducting security audits to ensure the site is safe from vulnerabilities.</li>
        </ul>
        This phase helps prevent post-launch issues and ensures the site is fully optimized and ready for launch.
      </p>
    </div>
  );
};

const AgencyLifecycleStage5 = () => {
  return (
    <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-6 md:p-8 lg:p-14 rounded-3xl mb-6">
      <p className="text-neutral-600 dark:text-neutral-400 text-sm md:text-lg lg:text-2xl font-sans max-w-3xl mx-auto">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          Stage 5: Launch & Deployment
        </span>{" "}
        After rigorous testing, we move to the deployment phase. Here, we deploy the website on the chosen server or cloud platform. This stage includes:
        <ul className="list-disc pl-6 mt-3">
          <li>Deploying the website to production servers, ensuring all configurations are correct.</li>
          <li>Performing a final round of testing in the production environment to catch any issues.</li>
          <li>Ensuring that the website is fully optimized for performance and security.</li>
          <li>Setting up backups and ongoing monitoring for the website’s uptime and performance.</li>
        </ul>
        This phase represents the culmination of months of work, ensuring that everything is live and accessible to the end-users.
      </p>
    </div>
  );
};

const AgencyLifecycleStage6 = () => {
  return (
    <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-6 md:p-8 lg:p-14 rounded-3xl mb-6">
      <p className="text-neutral-600 dark:text-neutral-400 text-sm md:text-lg lg:text-2xl font-sans max-w-3xl mx-auto">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          Stage 6: Marketing Strategy & Implementation
        </span>{" "}
        After the website is launched, we help our clients drive traffic, attract customers, and build a strong online presence. Our marketing team crafts a comprehensive strategy tailored to the client’s industry, goals, and audience. This stage involves:
        <ul className="list-disc pl-6 mt-3">
          <li>Developing a detailed SEO strategy, including on-page and off-page optimization.</li>
          <li>Content marketing strategy, creating engaging and shareable content.</li>
          <li>Social media strategy and management, integrating the website with platforms like Facebook, Instagram, LinkedIn, etc.</li>
          <li>Paid advertising campaigns on Google, Facebook, and other networks, optimizing for lead generation and conversions.</li>
          <li>Email marketing campaigns and automation to engage users and bring them back to the site.</li>
        </ul>
        We aim to increase traffic, improve brand visibility, and engage with the target audience effectively, while measuring the performance of each campaign through KPIs and analytics.
      </p>
    </div>
  );
};

const AgencyLifecycleStage7 = () => {
  return (
    <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-6 md:p-8 lg:p-14 rounded-3xl mb-6">
      <p className="text-neutral-600 dark:text-neutral-400 text-sm md:text-lg lg:text-2xl font-sans max-w-3xl mx-auto">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          Stage 7: Analytics & Reporting
        </span>{" "}
        After the launch and marketing implementation, it's crucial to track the website’s performance and understand its impact. At this stage, we dive deep into analytics to assess the site's effectiveness in meeting business objectives. The activities in this stage include:
        <ul className="list-disc pl-6 mt-3">
          <li>Setting up tracking and reporting systems using tools like Google Analytics, Mixpanel, and Hotjar.</li>
          <li>Creating custom dashboards that visualize key metrics like traffic, bounce rate, and conversion rate.</li>
          <li>Performing A/B testing to experiment with different designs, copy, and calls to action.</li>
          <li>Generating detailed monthly/quarterly reports with actionable insights and recommendations for improvements.</li>
        </ul>
        This stage ensures that the project is continuously optimized and refined for better performance.
      </p>
    </div>
  );
};

const AgencyLifecycleStage8 = () => {
  return (
    <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-6 md:p-8 lg:p-14 rounded-3xl mb-6">
      <p className="text-neutral-600 dark:text-neutral-400 text-sm md:text-lg lg:text-2xl font-sans max-w-3xl mx-auto">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          Stage 8: Client Training & Handover
        </span>{" "}
        As part of our commitment to client empowerment, we provide comprehensive training to ensure that our clients are fully equipped to manage their website and associated tools. This stage includes:
        <ul className="list-disc pl-6 mt-3">
          <li>Training the client on CMS usage for easy updates and management of content.</li>
          <li>Providing documentation covering technical, operational, and security aspects of the website.</li>
          <li>Offering ongoing support and troubleshooting for the initial period post-launch.</li>
        </ul>
        This phase helps ensure the client can operate the website independently, reducing the need for constant maintenance support.
      </p>
    </div>
  );
};

const AgencyLifecycleStage9 = () => {
  return (
    <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-6 md:p-8 lg:p-14 rounded-3xl mb-6">
      <p className="text-neutral-600 dark:text-neutral-400 text-sm md:text-lg lg:text-2xl font-sans max-w-3xl mx-auto">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          Stage 9: Retargeting & Lead Nurturing
        </span>{" "}
        In this final stage, we focus on re-engaging visitors and nurturing leads for long-term growth. This phase includes:
        <ul className="list-disc pl-6 mt-3">
          <li>Setting up retargeting ads for users who didn’t convert initially.</li>
          <li>Launching personalized email drip campaigns based on user behavior.</li>
          <li>Re-engaging dormant users with tailored content, offers, and promotions.</li>
        </ul>
        This ongoing engagement helps ensure that the client’s website continues to drive results over time.
      </p>
    </div>
  );
};

export {
  AgencyLifecycleStage1,
  AgencyLifecycleStage2,
  AgencyLifecycleStage3,
  AgencyLifecycleStage4,
  AgencyLifecycleStage5,
  AgencyLifecycleStage6,
  AgencyLifecycleStage7,
  AgencyLifecycleStage8,
  AgencyLifecycleStage9,
};



const data = [
  {
    category: "Discovery & Strategy",
    title: "Understanding your business and goals.",
    src: <IconZoomCode size={40} color="white" style={{ backgroundColor: 'black', padding: '10px', borderRadius: '50%' }} />, // Tabler Search icon
    content: <AgencyLifecycleStage1 />,
  },
  {
    category: "Design & Wireframing",
    title: "Turning vision into design.",
    src: <IconEdit size={40} color="white" style={{ backgroundColor: 'black', padding: '10px', borderRadius: '50%' }} />, // Tabler Pencil icon
    content: <AgencyLifecycleStage2 />,
  },
  {
    category: "Development & Coding",
    title: "Building a robust solution.",
    src: <IconAutomaticGearbox size={40} color="white" style={{ backgroundColor: 'black', padding: '10px', borderRadius: '50%' }} />, // Tabler Gear icon
    content: <AgencyLifecycleStage3 />,
  },
  {
    category: "Quality Assurance & Testing",
    title: "Ensuring functionality and performance.",
    src: <IconCodeCircle2Filled size={40} color="white" style={{ backgroundColor: 'black', padding: '10px', borderRadius: '50%' }} />, // Tabler CheckCircle icon
    content: <AgencyLifecycleStage4 />,
  },
  {
    category: "Launch & Deployment",
    title: "Your website goes live.",
    src: <IconBrandGithub size={40} color="white" style={{ backgroundColor: 'black', padding: '10px', borderRadius: '50%' }} />, // Tabler Rocket icon
    content: <AgencyLifecycleStage5 />,
  },
  {
    category: "Marketing Strategy & Implementation",
    title: "Driving traffic and conversions.",
    src: <IconBulldozer size={40} color="white" style={{ backgroundColor: 'black', padding: '10px', borderRadius: '50%' }} />, // Tabler Bullhorn icon
    content: <AgencyLifecycleStage6 />,
  },
  {
    category: "Analytics & Reporting",
    title: "Tracking performance and insights.",
    src: <IconChartInfographic size={40} color="white" style={{ backgroundColor: 'black', padding: '10px', borderRadius: '50%' }} />, // Tabler ChartLine icon
    content: <AgencyLifecycleStage7 />,
  },
  {
    category: "Client Training & Handover",
    title: "Empowering clients for independence.",
    src: <IconTreadmill size={40} color="white" style={{ backgroundColor: 'black', padding: '10px', borderRadius: '50%' }} />, // Tabler Users icon
    content: <AgencyLifecycleStage8 />,
  },
];
