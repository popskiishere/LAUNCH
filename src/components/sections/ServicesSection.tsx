import React from 'react';

const services = [
  {
    title: 'AI Strategy & Roadmap',
    desc: 'Define your AI vision, identify use cases, and get a clear, scalable plan tailored to your goals.'
  },
  {
    title: 'Custom AI Tool Integration',
    desc: 'Integrate GPT, Claude, and open-source AI tools to boost productivity and scalability.'
  },
  {
    title: 'Machine Learning & LLMs',
    desc: 'Deploy custom machine learning and LLM solutions for smarter automation and decisions.'
  },
  {
    title: 'Data Science & Predictive Analytics',
    desc: 'Gain insights and forecast trends with expert-built models for strategic advantage.'
  },
  {
    title: 'Workflow Automation & RPA',
    desc: 'Save time by automating repetitive tasks with AI-driven process automation.'
  }
];

const ServicesSection = () => (
  <section className="py-16 md:py-28 sm:py-24 bg-gradient-to-br from-violet-50 via-white to-blue-50 min-h-[80vh]">
    <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-12">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-gray-900 text-center mb-10 md:mb-20">
        Our AI & Automation Services
      </h2>
      <div className="grid gap-6 md:gap-10 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, idx) => (
          <div
            key={service.title}
            className="relative flex flex-col bg-white/80 backdrop-blur-sm rounded-2xl p-5 md:p-8 shadow-lg ring-1 ring-gray-200 hover:shadow-xl transition-all duration-300 border-l-8 border-gradient-to-b from-violet-600 to-blue-500"
            style={{ borderImage: 'linear-gradient(to bottom, #7c3aed, #3b82f6) 1' }}
          >
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
              {service.title}
            </h3>
            <p className="text-gray-600 text-sm sm:text-base leading-6 sm:leading-7">
              {service.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection; 