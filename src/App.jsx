import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Casamentos from "./pages/Casamentos"
import MainLayout from "./layouts/MainLayout"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/casamentos" element={<Casamentos />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
