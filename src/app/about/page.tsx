'use client'

import { MotionDiv } from '@/components/animations/MotionWrapper'
import FloatingElement from '@/components/animations/FloatingElement'
import { type ReactElement } from 'react'

const founders = [
  {
    name: 'Danil Popov',
    role: 'CEO & Co-founder',
    bio: 'Serial entrepreneur with 15+ years of experience in AI and digital transformation. Previously founded and scaled two successful tech startups.',
    image: '/images/founder1.jpg'
  },
  {
    name: 'John Doe',
    role: 'CTO & Co-founder',
    bio: 'AI expert with a PhD in Machine Learning. Led AI initiatives at Fortune 500 companies before co-founding Amlifi.',
    image: '/images/founder2.jpg'
  }
]

const values = [
  {
    title: 'Innovation',
    description: 'We constantly push boundaries to deliver cutting-edge solutions that drive real business impact.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    title: 'Excellence',
    description: 'We maintain the highest standards in everything we do, from consultant selection to project delivery.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    title: 'Partnership',
    description: 'We build long-term relationships with our clients, working together to achieve their strategic goals.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
  }
]

export default function AboutPage(): ReactElement {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative isolate overflow-hidden bg-gradient-to-b from-violet-50 to-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                About <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-blue-500">Amlifi</span>
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                We're on a mission to democratize access to top-tier AI and digital transformation expertise.
              </p>
            </MotionDiv>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Mission</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              At Amlifi, we believe that every company should have access to world-class AI and digital transformation expertise, regardless of their size or stage. We're building a platform that connects startups and growing businesses with pre-vetted consultants who can help them implement AI solutions and drive digital transformation.
            </p>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="bg-gradient-to-b from-white to-violet-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Founders</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Meet the team behind Amlifi
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            {founders.map((founder, index) => (
              <FloatingElement key={founder.name} delay={index * 0.1} duration={3}>
                <MotionDiv
                  className="flex flex-col items-center rounded-2xl bg-white/80 backdrop-blur-sm p-8 shadow-lg ring-1 ring-gray-200 hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="relative h-32 w-32 overflow-hidden rounded-full bg-gray-200">
                    <img
                      className="h-full w-full object-cover"
                      src={founder.image}
                      alt={founder.name}
                    />
                  </div>
                  <h3 className="mt-6 text-lg font-semibold text-gray-900">{founder.name}</h3>
                  <p className="text-sm font-medium text-violet-600">{founder.role}</p>
                  <p className="mt-4 text-sm text-gray-600 text-center">{founder.bio}</p>
                </MotionDiv>
              </FloatingElement>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Values</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              The principles that guide everything we do
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-5xl">
            <div className="grid gap-8 md:grid-cols-3">
              {values.map((value, index) => (
                <FloatingElement key={value.title} delay={index * 0.1} duration={3}>
                  <MotionDiv
                    className="flex flex-col items-center rounded-2xl bg-white/80 backdrop-blur-sm p-8 shadow-lg ring-1 ring-gray-200 hover:shadow-xl transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-violet-600 to-blue-500 text-white shadow-lg">
                      {value.icon}
                    </div>
                    <h3 className="mt-6 text-lg font-semibold text-gray-900">{value.title}</h3>
                    <p className="mt-4 text-sm text-gray-600 text-center">{value.description}</p>
                  </MotionDiv>
                </FloatingElement>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-b from-violet-50 to-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">By the Numbers</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our impact in numbers
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-5xl">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <MotionDiv
                className="flex flex-col items-center rounded-2xl bg-white/80 backdrop-blur-sm p-8 shadow-lg ring-1 ring-gray-200 hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="text-4xl font-bold text-violet-600">100+</div>
                <div className="mt-2 text-sm font-medium text-gray-600">Projects Completed</div>
              </MotionDiv>
              <MotionDiv
                className="flex flex-col items-center rounded-2xl bg-white/80 backdrop-blur-sm p-8 shadow-lg ring-1 ring-gray-200 hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="text-4xl font-bold text-violet-600">50+</div>
                <div className="mt-2 text-sm font-medium text-gray-600">Expert Consultants</div>
              </MotionDiv>
              <MotionDiv
                className="flex flex-col items-center rounded-2xl bg-white/80 backdrop-blur-sm p-8 shadow-lg ring-1 ring-gray-200 hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="text-4xl font-bold text-violet-600">95%</div>
                <div className="mt-2 text-sm font-medium text-gray-600">Client Satisfaction</div>
              </MotionDiv>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 