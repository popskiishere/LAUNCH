'use client'

import { motion, MotionProps, LazyMotion, domAnimation } from 'framer-motion'
import { ReactNode } from 'react'

interface MotionWrapperProps extends MotionProps {
  children: ReactNode
  className?: string
}

export function MotionDiv({ children, className, ...props }: MotionWrapperProps) {
  return (
    <LazyMotion features={domAnimation}>
      <motion.div className={className} {...props}>
        {children}
      </motion.div>
    </LazyMotion>
  )
}

export function MotionSection({ children, className, ...props }: MotionWrapperProps) {
  return (
    <LazyMotion features={domAnimation}>
      <motion.section className={className} {...props}>
        {children}
      </motion.section>
    </LazyMotion>
  )
} 