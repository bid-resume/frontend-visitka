import { useState, useCallback } from 'react'
import { AnimatePresence } from 'framer-motion'
import AnimatedBackground from './components/AnimatedBackground'
import GlassCard from './components/GlassCard'
import TodoInput from './components/TodoInput'
import TodoItem from './components/TodoItem'
import { RocketIcon } from './components/Icons'

export interface Todo {
  id: string
  text: string
  completed: boolean
  createdAt: number
}

function App() {
  const [todos, setTodos] = useState<Todo[]>([])

  const addTodo = useCallback((text: string) => {
    if (text.trim()) {
      const newTodo: Todo = {
        id: crypto.randomUUID(),
        text: text.trim(),
        completed: false,
        createdAt: Date.now()
      }
      setTodos(prev => [newTodo, ...prev])
    }
  }, [])

  const toggleTodo = useCallback((id: string) => {
    setTodos(prev =>
      prev.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    )
  }, [])

  const deleteTodo = useCallback((id: string) => {
    setTodos(prev => prev.filter(todo => todo.id !== id))
  }, [])

  const activeTodos = todos.filter(t => !t.completed)
  const completedTodos = todos.filter(t => t.completed)

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#050510]" data-testid="app-container">
      <AnimatedBackground />
      
      <div className="relative z-10 flex flex-col items-center justify-start min-h-screen px-4 py-8 md:py-16">
        <header className="mb-8 md:mb-12 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <RocketIcon className="w-10 h-10 md:w-14 md:h-14" />
            <h1 className="font-outfit text-4xl md:text-6xl font-bold bg-gradient-to-r from-[#7B68EE] via-[#00BFFF] to-[#9370DB] bg-clip-text text-transparent">
              Todo List
            </h1>
          </div>
          <p className="text-[#8892b0] text-sm md:text-base font-vietnam">
            Управляй задачами в космическом стиле
          </p>
        </header>

        <GlassCard>
          <TodoInput onAdd={addTodo} />
          
          {todos.length > 0 && (
            <div className="flex items-center justify-between px-1 mb-4 text-xs md:text-sm text-[#5a6384]">
              <span data-testid="active-count">
                Активных: <span className="text-[#00BFFF] font-medium">{activeTodos.length}</span>
              </span>
              <span data-testid="completed-count">
                Выполнено: <span className="text-[#10B981] font-medium">{completedTodos.length}</span>
              </span>
            </div>
          )}

          <div className="space-y-3 max-h-[50vh] overflow-y-auto pr-1" data-testid="todo-list">
            <AnimatePresence mode="popLayout">
              {todos.map((todo, index) => (
                <TodoItem
                  key={todo.id}
                  todo={todo}
                  index={index}
                  onToggle={toggleTodo}
                  onDelete={deleteTodo}
                />
              ))}
            </AnimatePresence>
          </div>

          {todos.length === 0 && (
            <div className="text-center py-12" data-testid="empty-state">
              <div className="mb-4 flex justify-center">
                <RocketIcon className="w-16 h-16 opacity-30" />
              </div>
              <p className="text-[#5a6384] text-sm">
                Добавь первую задачу и начни покорять космос!
              </p>
            </div>
          )}
        </GlassCard>
      </div>
    </div>
  )
}

export default App