'use client'

import { MotionDiv } from '../animations/MotionWrapper'
import Link from 'next/link'
import FloatingElement from '../animations/FloatingElement'

const benefits = [
  {
    name: 'Quality Leads',
    description: 'Get matched with high-quality, serious clients who value your expertise.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    name: 'Skip Cold Outreach',
    description: 'No more cold emailing or wasting time on unqualified leads.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    name: 'Build Your Network',
    description: 'Join a vetted network of operators and gain exposure to new industries.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
]

const stats = [
  { value: '85%', label: 'Project Success Rate' },
  { value: '$150k+', label: 'Average Project Value' },
  { value: '48h', label: 'Average Match Time' },
]

const expertiseAreas = [
  { name: 'AI Strategy', percentage: 85 },
  { name: 'Digital Transformation', percentage: 75 },
  { name: 'Growth & Analytics', percentage: 90 },
  { name: 'Product Development', percentage: 80 },
]

export default function ForConsultants() {
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
                Join Our Network of{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-blue-500">
                  Elite Consultants
                </span>
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Transform your consulting practice. Connect with high-value clients, skip the cold outreach, and focus on what you do best - delivering results.
              </p>
            </MotionDiv>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Why Join Amlifi?
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We're building the future of consulting, connecting top talent with ambitious startups.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {benefits.map((benefit, index) => (
                <FloatingElement key={benefit.name} delay={index * 0.2} duration={3}>
                  <MotionDiv
                    className="flex flex-col rounded-2xl bg-white/80 backdrop-blur-sm p-8 shadow-lg ring-1 ring-gray-200 hover:shadow-xl transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                  >
                    <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-r from-violet-600 to-blue-500 text-white">
                        {benefit.icon}
                      </div>
                      {benefit.name}
                    </dt>
                    <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                      <p className="flex-auto">{benefit.description}</p>
                    </dd>
                  </MotionDiv>
                </FloatingElement>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative isolate overflow-hidden bg-gradient-to-b from-violet-50 to-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {stats.map((stat, index) => (
              <MotionDiv
                key={stat.label}
                className="flex flex-col items-center rounded-2xl bg-white/80 backdrop-blur-sm p-8 text-center shadow-lg ring-1 ring-gray-200 hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-3xl font-bold text-violet-600">{stat.value}</div>
                <div className="mt-2 text-sm text-gray-500">{stat.label}</div>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Areas Section */}
      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Expertise Areas
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Join a network of specialists across high-impact consulting domains.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl lg:max-w-4xl">
            <div className="grid gap-8">
              {expertiseAreas.map((area, index) => (
                <MotionDiv
                  key={area.name}
                  className="relative"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-semibold text-gray-900">{area.name}</span>
                    <span className="text-sm font-medium text-violet-600">{area.percentage}%</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full">
                    <MotionDiv
                      className="h-2 rounded-full bg-gradient-to-r from-violet-600 to-blue-500"
                      initial={{ width: 0 }}
                      animate={{ width: `${area.percentage}%` }}
                      transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                    >
                      <span className="sr-only">{area.percentage}% proficiency in {area.name}</span>
                    </MotionDiv>
                  </div>
                </MotionDiv>
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
                Ready to Transform Your Practice?
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-100">
                Join our network today and start connecting with high-value opportunities.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link
                  href="/contact"
                  className="rounded-xl bg-white px-8 py-4 text-base font-semibold text-violet-600 shadow-lg hover:bg-gray-50 transition-all duration-300 hover:shadow-xl"
                >
                  Join Our Network
                </Link>
              </div>
            </MotionDiv>
          </div>
        </div>
      </section>
    </>
  )
} 