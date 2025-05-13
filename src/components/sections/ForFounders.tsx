'use client'

import { MotionDiv } from '../animations/MotionWrapper'
import FloatingElement from '../animations/FloatingElement'
import Link from 'next/link'

const services = [
  {
    name: 'AI Strategy & Implementation',
    description: 'Expert guidance on implementing AI solutions tailored to your business needs and growth stage.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    name: 'Digital Transformation',
    description: 'Comprehensive digital transformation consulting to modernize your business operations.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    name: 'Growth & Analytics',
    description: 'Data-driven strategies to accelerate your growth and optimize business performance.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
]

const stats = [
  { value: '2-3x', label: 'Faster Implementation' },
  { value: '40%', label: 'Cost Savings vs Full-time' },
  { value: '95%', label: 'Client Satisfaction' },
]

const successStories = [
  {
    name: 'AI Integration',
    description: 'Implemented custom LLM solution, reducing customer service response time by 75%',
    metric: '75%',
  },
  {
    name: 'Digital Transformation',
    description: 'Modernized legacy systems, improving operational efficiency by 60%',
    metric: '60%',
  },
  {
    name: 'Growth Strategy',
    description: 'Developed data-driven marketing strategy, increasing MRR by 150%',
    metric: '150%',
  },
  {
    name: 'Process Optimization',
    description: 'Automated key workflows, saving 30+ hours per week in manual work',
    metric: '30h+',
  },
]

export default function ForFounders() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative isolate overflow-hidden bg-gradient-to-b from-violet-50 to-white py-24 sm:py-32">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white/90 shadow-xl shadow-violet-600/10 ring-1 ring-violet-50" />
        </div>
        
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Accelerate Your{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-blue-500">
                  Startup Growth
                </span>
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Access top-tier AI and digital transformation expertise without the overhead of full-time hires. Get matched with consultants who understand your vision.
              </p>
            </MotionDiv>
          </div>
        </div>
      </section>

      {/* Stats Section - Moved up */}
      <section className="relative isolate overflow-hidden bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {stats.map((stat, index) => (
              <MotionDiv
                key={stat.label}
                className="flex flex-col items-center rounded-2xl bg-gradient-to-br from-violet-50 to-white p-8 text-center shadow-lg ring-1 ring-gray-200 hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-4xl font-bold text-violet-600">{stat.value}</div>
                <div className="mt-2 text-sm font-medium text-gray-600">{stat.label}</div>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Section - Moved up */}
      <section className="relative isolate overflow-hidden bg-gradient-to-b from-violet-50 to-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Success Stories
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Real results from startups like yours.
            </p>
          </div>
          <div className="mx-auto max-w-5xl">
            <div className="grid gap-8 md:grid-cols-2">
              {successStories.map((story, index) => (
                <FloatingElement key={story.name} delay={index * 0.1} duration={3}>
                  <MotionDiv
                    className="relative rounded-2xl bg-white/80 backdrop-blur-sm p-8 shadow-lg ring-1 ring-gray-200 hover:shadow-xl transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold text-gray-900">{story.name}</h3>
                      <span className="text-lg font-bold text-violet-600">{story.metric}</span>
                    </div>
                    <p className="text-sm text-gray-600">{story.description}</p>
                  </MotionDiv>
                </FloatingElement>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Moved down */}
      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              How We Help Founders
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Get the expertise you need to implement AI and scale your startup effectively.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-5xl">
            <div className="grid gap-12">
              {services.map((service, index) => (
                <FloatingElement key={service.name} delay={index * 0.2} duration={3}>
                  <MotionDiv
                    className={`flex flex-col md:flex-row ${index % 2 === 1 ? 'md:flex-row-reverse' : ''} items-center gap-8 rounded-2xl bg-white/80 backdrop-blur-sm p-8 shadow-lg ring-1 ring-gray-200 hover:shadow-xl transition-all duration-300`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                  >
                    <div className="flex-shrink-0">
                      <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-r from-violet-600 to-blue-500 text-white shadow-lg">
                        {service.icon}
                      </div>
                    </div>
                    <div className="flex-grow text-center md:text-left">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.name}</h3>
                      <p className="text-gray-600">{service.description}</p>
                    </div>
                  </MotionDiv>
                </FloatingElement>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative isolate overflow-hidden bg-gradient-to-r from-violet-600 to-blue-500 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Ready to Accelerate Your Growth?
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-100">
                Get matched with the right expert for your needs in 48 hours or less.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link
                  href="/contact"
                  className="rounded-xl bg-white px-8 py-4 text-base font-semibold text-violet-600 shadow-lg hover:bg-gray-50 transition-all duration-300 hover:shadow-xl"
                >
                  Get Started
                </Link>
              </div>
            </MotionDiv>
          </div>
        </div>
      </section>
    </>
  )
} 