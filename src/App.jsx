import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Faq from './components/Faq';
import Features from './components/Features';
import Footers from './components/Footers';
import Header from './components/Header';
import Home from './components/Home';
import Pricing from './components/Pricing';
import Testimonial from './components/Testimonial';
import Blog from './components/Blog';
import Article from './components/Article';

function App() {
  return (
    <Router>
      <div>
        <div className='bg-blue-50 md:p-4 lg:p-0 xl:p-0'>
          <Header />
          <Routes>
            <Route path="/sample" element={
              <>
                <Home />
                <Features />
                <Pricing />
                <Testimonial />
                <Faq />
              </>
            } />
            <Route path="/blog" element={<Blog />} />
            <Route path="/article/:id" element={<Article />} />
          </Routes>
          <Footers />
        </div>
      </div>
    </Router>
  );
}

export default App;
