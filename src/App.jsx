import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { Route, Router, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>

    </>
  )
}

export default App
