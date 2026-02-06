import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface GlassCardProps {
  children: ReactNode
}

const GlassCard = ({ children }: GlassCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ 
        duration: 0.6, 
        ease: [0.22, 1, 0.36, 1] 
      }}
      className="w-full max-w-xl"
      data-testid="glass-card"
    >
      <div className="glass rounded-3xl p-6 md:p-8 shadow-2xl">
        {children}
      </div>
    </motion.div>
  )
}

export default GlassCard