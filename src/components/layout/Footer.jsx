import { Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/BrandIcons';
import { useLanguage } from '../../context/LanguageContext';
import './Footer.css';

const LINKS = [
  { icon: GithubIcon,  href: 'https://github.com/Minhquan10092006', label: 'GitHub' },
  { icon: LinkedinIcon, href: 'https://www.linkedin.com/in/minh-qu%C3%A2n-nguy%E1%BB%85n-85b478346/', label: 'LinkedIn' },
  { icon: Mail, href: 'https://mail.google.com/mail/?view=cm&fs=1&to=minhquan20061009@gmail.com', label: 'Email' },
];

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__links">
          {LINKS.map((l) => (
            <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer" className="footer__link" aria-label={l.label} title={l.label}>
              <l.icon size={18} />
            </a>
          ))}
        </div>
        <p className="footer__copy">© {year} Nguyễn Minh Quân</p>
      </div>
    </footer>
  );
}
