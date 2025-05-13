'use client'

import { motion, LazyMotion, domAnimation } from 'framer-motion'
import { ReactNode } from 'react'

interface FloatingElementProps {
  children: ReactNode
  delay?: number
  duration?: number
  yOffset?: number
}

export default function FloatingElement({
  children,
  delay = 0,
  duration = 4,
  yOffset = 15,
}: FloatingElementProps) {
  return (
    <LazyMotion features={domAnimation}>
      <motion.div
        animate={{
          y: [-yOffset, yOffset],
        }}
        transition={{
          duration: duration,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
          delay: delay,
        }}
      >
        {children}
      </motion.div>
    </LazyMotion>
  )
} 