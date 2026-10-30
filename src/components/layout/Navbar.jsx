import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Download, Sun, Moon } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { useTheme } from '../../context/ThemeContext';
import './Navbar.css';

const NAV_ITEMS = ['about', 'skills', 'projects', 'certifications', 'contact'];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { lang, toggleLang, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';

  useEffect(() => { setMenuOpen(false); }, [location]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

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
    <nav className={`navbar${scrolled ? ' navbar--scrolled' : ''}${menuOpen ? ' navbar--open' : ''}`}>
      <div className="navbar__container">
        <a
          className="navbar__logo"
          href="/"
          onClick={(e) => { e.preventDefault(); navigate('/'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
        >
          <span className="navbar__mark">MQ</span>
          <span className="navbar__logo-text">{t('hero.name')}</span>
        </a>

        <ul className="navbar__links">
          {NAV_ITEMS.map((item) => (
            <li key={item}>
              <button className="navbar__link" onClick={() => handleNavClick(item)}>
                {t(`nav.${item}`)}
              </button>
            </li>
          ))}
        </ul>

        <div className="navbar__right">
          <button
            className="navbar__theme-btn"
            onClick={toggleTheme}
            aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
            title={theme === 'light' ? 'Dark mode' : 'Light mode'}
          >
            {theme === 'light' ? <Moon size={15} /> : <Sun size={15} />}
          </button>

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

          <a
            href={`/Minh-Quan-Nguyen-CV-${lang.toUpperCase()}.pdf`}
            className="navbar__resume"
            download
          >
            <Download size={13} />
            {t('nav.resume')}
          </a>

          <button className="navbar__hamburger" onClick={() => setMenuOpen((o) => !o)} aria-label="Toggle menu">
            {menuOpen ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
      </div>

      <div className={`navbar__mobile ${menuOpen ? 'navbar__mobile--open' : ''}`}>
        {NAV_ITEMS.map((item, i) => (
          <button key={item} className="navbar__mobile-link" onClick={() => handleNavClick(item)}>
            <span className="navbar__mobile-num">{String(i + 1).padStart(2, '0')}</span>
            {t(`nav.${item}`)}
          </button>
        ))}
        <a href={`/Minh-Quan-Nguyen-CV-${lang.toUpperCase()}.pdf`} className="navbar__mobile-link navbar__mobile-resume" download>
          <Download size={15} /> {t('nav.resume')}
        </a>
      </div>
    </nav>
  );
}
