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
      <div className="relative rounded-3xl p-6 md:p-8 shadow-2xl overflow-hidden">
        {/* Glass background */}
        <div className="absolute inset-0 bg-white/[0.03] backdrop-blur-2xl" />
        
        {/* Border glow */}
        <div className="absolute inset-0 rounded-3xl border border-white/[0.08]" />
        
        {/* Inner glow */}
        <div className="absolute inset-0 rounded-3xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]" />
        
        {/* Content */}
        <div className="relative z-10">
          {children}
        </div>
      </div>
    </motion.div>
  )
}

export default GlassCard