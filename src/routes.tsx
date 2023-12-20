import { Route, Routes } from "react-router-dom";

import AboutPage from "./pages/about";
import ContactPage from "./pages/contact";
import ListPage from "./pages/list";
import HomePage from "./pages/home";

export default (
  <Routes>
    <Route path="/about" element={<AboutPage />} />
    <Route path="/contact" element={<ContactPage />} />
    <Route path="/list" element={<ListPage />} />
    <Route path="/" element={<HomePage />} />
  </Routes>
);
