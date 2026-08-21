import { useState } from 'react';
import { Mail, Send, Copy, Check } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/BrandIcons';
import { useLanguage } from '../../context/LanguageContext';
import './Contact.css';

const EMAIL = 'minhquan20061009@gmail.com';
const GMAIL_URL = `https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}&su=Let%27s%20Connect%20%E2%80%94%20Portfolio&body=Hi%20Minh%20Quan%2C%0A%0AI%20found%20your%20portfolio%20and%20would%20like%20to%20connect.`;

const LINKS = [
  { icon: GithubIcon,  href: 'https://github.com/Minhquan10092006',                             label: 'GitHub' },
  { icon: LinkedinIcon, href: 'https://www.linkedin.com/in/minh-qu%C3%A2n-nguy%E1%BB%85n-85b478346/', label: 'LinkedIn' },
];

export default function Contact() {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="section contact" id="contact">
      <div className="container">
        <span className="section-label">{t('contact.label')}</span>
        <h2 className="section-title">{t('contact.title')}</h2>
        <p className="section-subtitle">{t('contact.subtitle')}</p>

        <div className="contact__body">
          {/* Email */}
          <div className="contact__email-row">
            <a href={GMAIL_URL} target="_blank" rel="noopener noreferrer" className="contact__email-btn">
              <Send size={16} />
              {t('contact.email')}
            </a>
            <button className="contact__copy" onClick={copyEmail} title="Copy email">
              {copied ? <Check size={15} /> : <Copy size={15} />}
              <span>{copied ? 'Copied!' : EMAIL}</span>
            </button>
          </div>

          {/* Social links */}
          <div className="contact__socials">
            {LINKS.map((l) => (
              <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer" className="contact__social">
                <l.icon size={18} />
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
