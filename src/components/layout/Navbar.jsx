import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Download, Sun, Moon } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { useTheme } from '../../context/ThemeContext';
import './Navbar.css';

const NAV_ITEMS = ['about', 'skills', 'projects', 'certifications', 'contact'];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { lang, toggleLang, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';

  useEffect(() => { setMenuOpen(false); }, [location]);

  const handleNavClick = (id) => {
    setMenuOpen(false);
    if (!isHome) {
      navigate('/');
      setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }), 100);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar__container">
        {/* Logo */}
        <a
          className="navbar__logo"
          href="/"
          onClick={(e) => { e.preventDefault(); navigate('/'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
        >
          Minh Quân
        </a>

        {/* Desktop Nav */}
        <ul className="navbar__links">
          {NAV_ITEMS.map((item) => (
            <li key={item}>
              <button className="navbar__link" onClick={() => handleNavClick(item)}>
                {t(`nav.${item}`)}
              </button>
            </li>
          ))}
        </ul>

        {/* Right actions */}
        <div className="navbar__right">
          {/* Theme toggle */}
          <button
            className="navbar__theme-btn"
            onClick={toggleTheme}
            aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
            title={theme === 'light' ? 'Dark mode' : 'Light mode'}
          >
            {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
          </button>
          {/* Language toggle */}
          <div className="lang-toggle">
            <button
              className={`lang-toggle__btn ${lang === 'en' ? 'lang-toggle__btn--active' : ''}`}
              onClick={() => lang !== 'en' && toggleLang()}
            >EN</button>
            <button
              className={`lang-toggle__btn ${lang === 'vi' ? 'lang-toggle__btn--active' : ''}`}
              onClick={() => lang !== 'vi' && toggleLang()}
            >VI</button>
          </div>

          {/* Resume */}
          <a
            href={`/Minh-Quan-Nguyen-CV-${lang.toUpperCase()}.pdf`}
            className="navbar__resume"
            download
          >
            <Download size={14} />
            {t('nav.resume')}
          </a>

          {/* Mobile hamburger */}
          <button className="navbar__hamburger" onClick={() => setMenuOpen(o => !o)} aria-label="Toggle menu">
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`navbar__mobile ${menuOpen ? 'navbar__mobile--open' : ''}`}>
        {NAV_ITEMS.map((item) => (
          <button key={item} className="navbar__mobile-link" onClick={() => handleNavClick(item)}>
            {t(`nav.${item}`)}
          </button>
        ))}
        <a href={`/Minh-Quan-Nguyen-CV-${lang.toUpperCase()}.pdf`} className="navbar__mobile-link" download>
          <Download size={14} /> {t('nav.resume')}
        </a>
      </div>
    </nav>
  );
}
