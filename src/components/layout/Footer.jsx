import { Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/BrandIcons';
import { useLanguage } from '../../context/LanguageContext';
import './Footer.css';

const LINKS = [
  { icon: GithubIcon,  href: 'https://github.com/Minhquan10092006', label: 'GitHub' },
  { icon: LinkedinIcon, href: 'https://www.linkedin.com/in/minh-qu%C3%A2n-nguy%E1%BB%85n-85b478346/', label: 'LinkedIn' },
  { icon: Mail, href: 'https://mail.google.com/mail/?view=cm&fs=1&to=minhquan20061009@gmail.com', label: 'Email' },
];

const MARQUEE = [
  'Cloud Security',
  'AWS Certified',
  'Application Security',
  'Networking',
  'AI on AWS',
  'VNU-UET',
];

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__marquee marquee" aria-hidden="true">
        <div className="marquee__track">
          {[0, 1].map((row) => (
            <div className="footer__marquee-row" key={row}>
              {MARQUEE.map((item) => (
                <span className="footer__marquee-item" key={`${row}-${item}`}>
                  {item}
                  <span className="footer__marquee-sep">/</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="container footer__inner">
        <a
          className="footer__brand"
          href="/"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
        >
          MQ<span className="footer__brand-dot">.</span>
        </a>

        <p className="footer__copy">© {year} Nguyễn Minh Quân · {t('footer.rights')}</p>

        <div className="footer__links">
          {LINKS.map((l) => (
            <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer" className="footer__link" aria-label={l.label} title={l.label}>
              <l.icon size={17} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
