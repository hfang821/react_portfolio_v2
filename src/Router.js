import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import LiftingBlog from "./pages/LiftingBlog"


export default function App({theme, setTheme}) {
    const [currentPage, setCurrentPage] = useState("");

    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Home theme={theme} currentPage={currentPage} setCurrentPage={setCurrentPage} />}>     
                </Route>
                <Route exact path="/project"
                    element={<Projects theme={theme} currentPage={currentPage} setCurrentPage={setCurrentPage} />}>
                </Route>
                {/* 
                <Route exact path="/skills">
                    <Skills theme={theme} setTheme={setTheme} currentPage={currentPage} setCurrentPage={setCurrentPage} />
                </Route>
                <Route exact path="/about">
                    <About theme={theme} currentPage={currentPage} setCurrentPage={setCurrentPage} />
                </Route>
                <Route exact path="/contact">
                    <Contact theme={theme} currentPage={currentPage} setCurrentPage={setCurrentPage} />
                </Route>
                <Route exact path="/blogs">
                    <LiftingBlog theme={theme} currentPage={currentPage} setCurrentPage={setCurrentPage} />
                </Route> */}
            </Routes>
        </Router>
    )
};