import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import FeedbackBot from './Containers/FeedbackBot'
import About from './Containers/About'

const App = () => {
  return (
    <Router>
      <main className="min-h-screen bg-[#F8FAFC]">
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<FeedbackBot />} />
        </Routes>
      </main>
    </Router>
  )
}

export default App