import { HashRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import Process from './pages/Process'
import Contact from './pages/Contact'
import About from './pages/About'
import Services from './pages/Services'

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portofoliu" element={<Portfolio />} />
        <Route path="/proces" element={<Process />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/despre" element={<About />} />
        <Route path="/servicii" element={<Services />} />
      </Routes>
    </HashRouter>
  )
}
