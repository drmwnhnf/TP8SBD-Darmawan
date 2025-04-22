import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import SBD from './pages/SBD'
import DMJ from './pages/DMJ'
import OS from './pages/OS'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sbd" element={<SBD />} />
        <Route path="/dmj" element={<DMJ />} />
        <Route path="/os" element={<OS />} />
      </Routes>
    </Router>
  )
}

export default App
