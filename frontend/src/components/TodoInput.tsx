import { useState } from 'react'
import { motion } from 'framer-motion'
import { Plus, Sparkles } from 'lucide-react'

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
              ? '0 0 30px rgba(112, 0, 255, 0.3), 0 0 60px rgba(112, 0, 255, 0.1)' 
              : '0 0 0px rgba(112, 0, 255, 0)'
          }}
          transition={{ duration: 0.3 }}
          className="flex items-center gap-2 p-1.5 rounded-2xl bg-black/30 border border-border-subtle"
        >
          <div className="flex items-center justify-center w-10 h-10 text-text-muted">
            <Sparkles className="w-5 h-5" />
          </div>
          
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholder="Добавить новую задачу..."
            className="flex-1 bg-transparent text-text-primary placeholder:text-text-muted/50 text-sm md:text-base py-2 px-1 focus:outline-none"
            data-testid="todo-input"
          />
          
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            disabled={!value.trim()}
            className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-xl bg-primary hover:bg-primary-hover disabled:opacity-30 disabled:cursor-not-allowed text-white transition-colors duration-200"
            data-testid="add-todo-button"
          >
            <Plus className="w-5 h-5 md:w-6 md:h-6" strokeWidth={2.5} />
          </motion.button>
        </motion.div>
      </div>
    </form>
  )
}

export default TodoInput