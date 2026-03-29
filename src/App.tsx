import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Practice from './pages/Practice'
import Exam from './pages/Exam'
import Results from './pages/Results'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="practice" element={<Practice />} />
          <Route path="exam" element={<Exam />} />
          <Route path="results" element={<Results />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App