import { motion } from 'framer-motion'
import { Trash2, Check } from 'lucide-react'
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
      className="group flex items-center gap-3 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-border-subtle hover:border-border-highlight transition-colors duration-200"
      data-testid={`todo-item-${todo.id}`}
    >
      {/* Checkbox */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => onToggle(todo.id)}
        className={`flex items-center justify-center w-6 h-6 rounded-lg border-2 transition-colors duration-200 ${
          todo.completed
            ? 'bg-success border-success'
            : 'border-border-highlight hover:border-primary'
        }`}
        data-testid={`todo-checkbox-${todo.id}`}
      >
        {todo.completed && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 500, damping: 30 }}
          >
            <Check className="w-4 h-4 text-white" strokeWidth={3} />
          </motion.div>
        )}
      </motion.button>

      {/* Text */}
      <span
        className={`flex-1 text-sm md:text-base transition-all duration-200 ${
          todo.completed
            ? 'text-text-muted line-through'
            : 'text-text-primary'
        }`}
        data-testid={`todo-text-${todo.id}`}
      >
        {todo.text}
      </span>

      {/* Delete button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => onDelete(todo.id)}
        className="flex items-center justify-center w-8 h-8 rounded-lg opacity-0 group-hover:opacity-100 hover:bg-error/20 text-text-muted hover:text-error transition-all duration-200"
        data-testid={`todo-delete-${todo.id}`}
      >
        <Trash2 className="w-4 h-4" />
      </motion.button>
    </motion.div>
  )
}

export default TodoItem