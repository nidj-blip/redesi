import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const cards = [
  { id: 1, title: 'Animate', body: 'Springs, keyframes, and layout animations out of the box.' },
  { id: 2, title: 'Gesture', body: 'Hover, tap, and drag interactions with one prop each.' },
  { id: 3, title: 'Exit', body: 'AnimatePresence animates components as they unmount.' },
]

export default function App() {
  const [visible, setVisible] = useState(cards.map((c) => c.id))

  const toggle = (id) =>
    setVisible((v) => (v.includes(id) ? v.filter((x) => x !== id) : [...v, id]))

  return (
    <main style={{ width: 'min(640px, 90vw)', padding: '3rem 0' }}>
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: 'spring', stiffness: 120 }}
        style={{ marginBottom: '1.5rem' }}
      >
        Framer Motion demo
      </motion.h1>

      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem' }}>
        {cards.map((card) => (
          <motion.button
            key={card.id}
            onClick={() => toggle(card.id)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              padding: '0.5rem 1rem',
              borderRadius: '999px',
              border: '1px solid #3a3a45',
              background: visible.includes(card.id) ? '#4f46e5' : 'transparent',
              color: 'inherit',
              cursor: 'pointer',
            }}
          >
            {card.title}
          </motion.button>
        ))}
      </div>

      <div style={{ display: 'grid', gap: '1rem' }}>
        <AnimatePresence>
          {cards
            .filter((card) => visible.includes(card.id))
            .map((card) => (
              <motion.article
                key={card.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ type: 'spring', stiffness: 200, damping: 24 }}
                style={{
                  padding: '1.25rem',
                  borderRadius: '12px',
                  background: '#1c1c24',
                  border: '1px solid #2a2a33',
                }}
              >
                <h2 style={{ marginBottom: '0.5rem', fontSize: '1.1rem' }}>{card.title}</h2>
                <p style={{ color: '#a0a0ab' }}>{card.body}</p>
              </motion.article>
            ))}
        </AnimatePresence>
      </div>
    </main>
  )
}
