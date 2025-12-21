import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import LaporDiri from './pages/LaporDiri'
import Events from './pages/Events'
import Communities from './pages/Communities'
import Merchandise from './pages/Merchandise'
import Sejarah from './pages/Sejarah'
import Kepengurusan from './pages/Kepengurusan'
import AdArt from './pages/AdArt'
import Spa from './pages/Spa'
import ArsipLpj from './pages/ArsipLpj'
import ArsipPengurus from './pages/ArsipPengurus'
import KontakEmail from './pages/KontakEmail'
import Linktree from './pages/Linktree'
import Acop2025 from './pages/Acop2025'
import WikiAachen from './pages/WikiAachen'
import Funmatch from './pages/Funmatch'
import PressKit from './pages/PressKit'
import Impressum from './pages/Impressum'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lapor-diri" element={<LaporDiri />} />
          <Route path="/events" element={<Events />} />
          <Route path="/communities" element={<Communities />} />
          <Route path="/merchandise" element={<Merchandise />} />
          <Route path="/sejarah" element={<Sejarah />} />
          <Route path="/kepengurusan" element={<Kepengurusan />} />
          <Route path="/ad-art" element={<AdArt />} />
          <Route path="/spa" element={<Spa />} />
          <Route path="/arsip-lpj" element={<ArsipLpj />} />
          <Route path="/arsip-pengurus" element={<ArsipPengurus />} />
          <Route path="/kontak-email" element={<KontakEmail />} />
          <Route path="/linktree" element={<Linktree />} />
          <Route path="/acop-2025" element={<Acop2025 />} />
          <Route path="/wiki-aachen" element={<WikiAachen />} />
          <Route path="/funmatch" element={<Funmatch />} />
          <Route path="/press-kit" element={<PressKit />} />
          <Route path="/impressum" element={<Impressum />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App

