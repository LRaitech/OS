/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import TheRooms from './pages/TheRooms';
import Dojo from './pages/Dojo';
import Contact from './pages/Contact';
import ArtOfBrand from './pages/ArtOfBrand';
import Campfyer from './pages/Campfyer';
import Apply from './pages/Apply';
import WorkWithUs from './pages/WorkWithUs';
import Insights from './pages/Insights';

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/rooms" element={<TheRooms />} />
          <Route path="/art-of-brand" element={<ArtOfBrand />} />
          <Route path="/campfyer" element={<Campfyer />} />
          <Route path="/dojo" element={<Dojo />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/apply" element={<Apply />} />
          <Route path="/work-with-us" element={<WorkWithUs />} />
          <Route path="/insights" element={<Insights />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
