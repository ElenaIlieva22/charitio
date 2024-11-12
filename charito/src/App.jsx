import {BrowserRouter, Routes, Route} from "react-router-dom"
import { Home } from "./pages/Home/Home"
import { About } from "./pages/About/About"
import { Contact } from "./pages/Contact/Contact"
import { Donate } from "./pages/Donate/Donate"
import { Header } from "./layout/Header/Header"
import { Footer } from "./layout/Footer/Footer"

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about"  element={<About />}/>
        <Route path="contact" element={<Contact />}/>
        <Route path="donate" element={<Donate />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
