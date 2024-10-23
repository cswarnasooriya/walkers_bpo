import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import NoPage from "./pages/NoPage";
import PlacesRoute from "./pages/PlacesRoute";
import About from "./pages/About";
import AOS from "aos";
import "aos/dist/aos.css";
import Finance from "./pages/Finance";
import Support from "./pages/Support";
import Digital from "./pages/Digital";
import Project from "./pages/Project";
import Engineering from "./pages/Engineering";
import Contracts from "./pages/Contracts";

const App = () => {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 900,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="finance" element={<Finance />} />
            <Route path="support" element={<Support />} />
            <Route path="digital" element={<Digital />} />
            <Route path="project" element={<Project />} />
            <Route path="engineering" element={<Engineering />} />
            <Route path="best-places" element={<PlacesRoute />} />
            <Route path="contracts" element={<Contracts />} />
            <Route path="about" element={<About />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
