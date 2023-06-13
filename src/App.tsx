import { Routes, Route } from "react-router-dom";
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import Redirecting from "./pages/Redirecting";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<Redirecting />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
