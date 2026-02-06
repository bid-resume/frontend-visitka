import { motion } from 'framer-motion'
import { TrashIcon, CheckIcon } from './Icons'
import type { Todo } from '../App'

interface TodoItemProps {
  todo: Todo
  index: number
  onToggle: (id: string) => void
  onDelete: (id: string) => void
}

const TodoItem = ({ todo, index, onToggle, onDelete }: TodoItemProps) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, x: -100, scale: 0.8 }}
      transition={{ 
        duration: 0.3,
        delay: index * 0.05,
        layout: { duration: 0.3 }
      }}
      className="group flex items-center gap-3 p-4 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.05] hover:border-white/[0.1]"
      style={{ transition: 'background 0.2s, border-color 0.2s' }}
      data-testid={`todo-item-${todo.id}`}
    >
      {/* Checkbox */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => onToggle(todo.id)}
        className={`flex items-center justify-center w-6 h-6 rounded-lg border-2 ${
          todo.completed
            ? 'bg-gradient-to-br from-[#10B981] to-[#059669] border-transparent'
            : 'border-white/20 hover:border-[#7B68EE]'
        }`}
        style={{ transition: 'border-color 0.2s' }}
        data-testid={`todo-checkbox-${todo.id}`}
      >
        {todo.completed && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 500, damping: 30 }}
          >
            <CheckIcon className="w-4 h-4 text-white" />
          </motion.div>
        )}
      </motion.button>

      {/* Text */}
      <span
        className={`flex-1 text-sm md:text-base font-vietnam ${
          todo.completed
            ? 'text-white/30 line-through'
            : 'text-white/80'
        }`}
        style={{ transition: 'color 0.2s' }}
        data-testid={`todo-text-${todo.id}`}
      >
        {todo.text}
      </span>

      {/* Delete button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => onDelete(todo.id)}
        className="flex items-center justify-center w-8 h-8 rounded-lg opacity-0 group-hover:opacity-100 hover:bg-red-500/20 text-white/30 hover:text-red-400"
        style={{ transition: 'opacity 0.2s, background 0.2s, color 0.2s' }}
        data-testid={`todo-delete-${todo.id}`}
      >
        <TrashIcon className="w-4 h-4" />
      </motion.button>
    </motion.div>
  )
}

export default TodoItem