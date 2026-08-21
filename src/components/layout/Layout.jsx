import { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';
import './Layout.css';

export default function Layout({ children }) {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const fn = () => setShowTop(window.scrollY > 600);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <div className="layout">
      <Navbar />
      <main>{children}</main>
      <Footer />
      {showTop && (
        <button
          className="scroll-top-btn"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Scroll to top"
        >
          <ChevronUp size={18} />
        </button>
      )}
    </div>
  );
}
