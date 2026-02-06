import { useState, useCallback } from 'react'
import { AnimatePresence } from 'framer-motion'
import StarryBackground from './components/StarryBackground'
import GlassCard from './components/GlassCard'
import TodoInput from './components/TodoInput'
import TodoItem from './components/TodoItem'
import { Rocket } from 'lucide-react'

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
    <div className="relative min-h-screen w-full overflow-hidden" data-testid="app-container">
      {/* Background */}
      <StarryBackground />
      
      {/* Background image overlay */}
      <div 
        className="fixed inset-0 z-0 opacity-30"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1579398707644-ff84b1e6931f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHwxfHxkZWVwJTIwc3BhY2UlMjBuZWJ1bGElMjBiYWNrZ3JvdW5kJTIwZGFyayUyMHB1cnBsZSUyMGJsdWV8ZW58MHx8fHwxNzcwMzc4OTY3fDA&ixlib=rb-4.1.0&q=85)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-start min-h-screen px-4 py-8 md:py-16">
        {/* Header */}
        <header className="mb-8 md:mb-12 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Rocket className="w-10 h-10 md:w-14 md:h-14 text-primary" strokeWidth={1.5} />
            <h1 className="font-outfit text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
              Todo List
            </h1>
          </div>
          <p className="text-text-secondary text-sm md:text-base">
            Управляй задачами в космическом стиле
          </p>
        </header>

        {/* Main Card */}
        <GlassCard>
          {/* Input */}
          <TodoInput onAdd={addTodo} />
          
          {/* Stats */}
          {todos.length > 0 && (
            <div className="flex items-center justify-between px-1 mb-4 text-xs md:text-sm text-text-muted">
              <span data-testid="active-count">
                Активных: <span className="text-secondary font-medium">{activeTodos.length}</span>
              </span>
              <span data-testid="completed-count">
                Выполнено: <span className="text-success font-medium">{completedTodos.length}</span>
              </span>
            </div>
          )}

          {/* Todo List */}
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

          {/* Empty state */}
          {todos.length === 0 && (
            <div className="text-center py-12" data-testid="empty-state">
              <div className="text-6xl mb-4 opacity-30">🚀</div>
              <p className="text-text-muted text-sm">
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