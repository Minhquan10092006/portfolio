import { useState, useEffect } from 'react';
import { Mail, FileDown, ArrowDown, ArrowUpRight, BadgeCheck, MousePointer2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/BrandIcons';
import InfiniteTunnel from '../ui/InfiniteTunnel';
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
  const [boost, setBoost] = useState(false);
  const taglines = t('hero.taglines');

  const nameWords = String(t('hero.name')).split(' ');
  const lastName = nameWords.pop();
  const firstNames = nameWords.join(' ');

  useEffect(() => {
    if (!Array.isArray(taglines)) return;
    const current = taglines[taglineIndex];
    let timeout;
    if (!isDeleting) {
      if (displayText.length < current.length) {
        timeout = setTimeout(() => setDisplayText(current.slice(0, displayText.length + 1)), 45);
      } else {
        timeout = setTimeout(() => setIsDeleting(true), 2400);
      }
    } else if (displayText.length > 0) {
      timeout = setTimeout(() => setDisplayText(current.slice(0, displayText.length - 1)), 20);
    } else {
      setIsDeleting(false);
      setTaglineIndex((prev) => (prev + 1) % taglines.length);
    }
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, taglineIndex, taglines]);

  const stopBoost = () => setBoost(false);

  return (
    <section
      className={`hero${boost ? ' hero--boost' : ''}`}
      id="hero"
      onPointerDown={() => setBoost(true)}
      onPointerUp={stopBoost}
      onPointerLeave={stopBoost}
      onPointerCancel={stopBoost}
    >
      <div className="hero__bg">
        <InfiniteTunnel boosted={boost} />
      </div>
      <div className="hero__scrim" aria-hidden="true" />

      <div className="hero__inner">
        <div className="hero__eyebrow">
          <span className="hero__status">
            <span className="hero__dot" />
            {t('hero.status')}
          </span>
          <span className="hero__eyebrow-sep" aria-hidden="true" />
          <span className="hero__cert">
            <BadgeCheck size={15} />
            {t('hero.certs')}
          </span>
        </div>

        <h1 className="hero__title">
          <span className="hero__title-main">{firstNames}</span>{' '}
          <span className="hero__title-accent">{lastName}</span>
        </h1>

        <p className="hero__tagline">
          <span className="hero__tagline-text">{displayText}</span>
          <span className="hero__tagline-cursor" aria-hidden="true" />
        </p>

        <div className="hero__actions">
          <button
            className="hero__btn hero__btn--primary"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            {t('hero.cta_projects')}
            <ArrowUpRight size={17} />
          </button>
          <a
            href={`/Minh-Quan-Nguyen-CV-${lang.toUpperCase()}.pdf`}
            className="hero__btn hero__btn--ghost"
            download
          >
            <FileDown size={16} />
            {t('hero.downloadCv')}
          </a>
        </div>

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
              <link.icon size={17} />
              <span>{link.label}</span>
            </a>
          ))}
        </div>
      </div>

      <div className="hero__meta">
        <span className="hero__hold">
          <MousePointer2 size={14} />
          {t('hero.hold')}
        </span>
        <button
          className="hero__scroll"
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          aria-label={t('hero.scroll')}
        >
          <span>{t('hero.scroll')}</span>
          <ArrowDown size={15} />
        </button>
      </div>
    </section>
  );
}
