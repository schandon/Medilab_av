import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import { DateFilterProvider } from './context/FilterContext'

export default function App() {
  return (
    <DateFilterProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
    </DateFilterProvider>
  )
}