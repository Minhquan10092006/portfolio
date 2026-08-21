import { useState, useEffect } from 'react';
import { Mail, FileDown, ArrowDown } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/BrandIcons';
import { useLanguage } from '../../context/LanguageContext';
import './Hero.css';

const SOCIAL_LINKS = [
  { icon: GithubIcon, href: 'https://github.com/Minhquan10092006', label: 'GitHub' },
  { icon: LinkedinIcon, href: 'https://www.linkedin.com/in/minh-qu%C3%A2n-nguy%E1%BB%85n-85b478346/', label: 'LinkedIn' },
  { icon: Mail, href: 'https://mail.google.com/mail/?view=cm&fs=1&to=minhquan20061009@gmail.com&su=Let%27s%20Connect%20%E2%80%94%20Portfolio', label: 'Email' },
];

export default function Hero() {
  const { t, lang } = useLanguage();
  const [taglineIndex, setTaglineIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const taglines = t('hero.taglines');

  // Typing effect
  useEffect(() => {
    if (!Array.isArray(taglines)) return;
    const current = taglines[taglineIndex];
    let timeout;
    if (!isDeleting) {
      if (displayText.length < current.length) {
        timeout = setTimeout(() => setDisplayText(current.slice(0, displayText.length + 1)), 55);
      } else {
        timeout = setTimeout(() => setIsDeleting(true), 2200);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => setDisplayText(current.slice(0, displayText.length - 1)), 25);
      } else {
        setIsDeleting(false);
        setTaglineIndex((prev) => (prev + 1) % taglines.length);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, taglineIndex, taglines]);

  return (
    <section className="hero" id="hero">
      <div className="hero__inner">
        {/* Label */}
        <p className="hero__label">{t('hero.greeting')}</p>

        {/* Name */}
        <h1 className="hero__name">{t('hero.name')}</h1>

        {/* Tagline */}
        <p className="hero__tagline">
          <span className="hero__tagline-text">{displayText}</span>
          <span className="hero__tagline-cursor" aria-hidden="true">|</span>
        </p>

        {/* Actions */}
        <div className="hero__actions">
          <button
            className="hero__btn hero__btn--primary"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            {t('hero.cta_projects')}
          </button>
          <a
            href={`/Minh-Quan-Nguyen-CV-${lang.toUpperCase()}.pdf`}
            className="hero__btn hero__btn--secondary"
            download
          >
            <FileDown size={16} />
            Download CV
          </a>
        </div>

        {/* Socials */}
        <div className="hero__socials">
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hero__social"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              title={link.label}
            >
              <link.icon size={18} />
              <span>{link.label}</span>
            </a>
          ))}
        </div>
      </div>

      {/* Scroll hint */}
      <button
        className="hero__scroll"
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        aria-label="Scroll down"
      >
        <ArrowDown size={16} />
      </button>
    </section>
  );
}
