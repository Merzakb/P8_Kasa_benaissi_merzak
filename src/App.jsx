import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from "./pages/Home/Home"
import About from "./pages/About/About"
import Room from "./pages/Room/Room"
import NotFound from "./pages/NotFound/NotFound"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"



function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/room/:roomId" element={<Room />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </Router>
    )

}

export default App