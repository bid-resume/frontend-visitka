import { useState } from 'react'
import { motion } from 'framer-motion'
import { PlusIcon, SparklesIcon } from './Icons'

interface TodoInputProps {
  onAdd: (text: string) => void
}

const TodoInput = ({ onAdd }: TodoInputProps) => {
  const [value, setValue] = useState('')
  const [isFocused, setIsFocused] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (value.trim()) {
      onAdd(value)
      setValue('')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <div className="relative">
        <motion.div
          animate={{
            boxShadow: isFocused 
              ? '0 0 40px rgba(123, 104, 238, 0.2), 0 0 80px rgba(0, 191, 255, 0.1)' 
              : '0 0 0px rgba(123, 104, 238, 0)'
          }}
          transition={{ duration: 0.3 }}
          className="flex items-center gap-2 p-1.5 rounded-2xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-xl"
        >
          <div className="flex items-center justify-center w-10 h-10 text-[#5a6384]">
            <SparklesIcon className="w-5 h-5" />
          </div>
          
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholder="Добавить новую задачу..."
            className="flex-1 bg-transparent text-white/90 placeholder:text-white/20 text-sm md:text-base py-2 px-1 focus:outline-none font-vietnam"
            data-testid="todo-input"
          />
          
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            disabled={!value.trim()}
            className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-[#7B68EE] to-[#4c1d95] hover:from-[#8B78EE] hover:to-[#5c2da5] disabled:opacity-30 disabled:cursor-not-allowed text-white shadow-lg shadow-purple-500/20"
            style={{ transition: 'opacity 0.2s, background 0.2s' }}
            data-testid="add-todo-button"
          >
            <PlusIcon className="w-5 h-5 md:w-6 md:h-6" />
          </motion.button>
        </motion.div>
      </div>
    </form>
  )
}

export default TodoInput