import { ArrowUpRight, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import certsData from '../../data/certifications';
import './Certifications.css';

const STATUS_CLASS = {
  earned: 'cert__badge--earned',
  'in-progress': 'cert__badge--progress',
  studying: 'cert__badge--studying',
  completed: 'cert__badge--completed',
};

function issuerKey(issuer) {
  if (issuer === 'Amazon Web Services') return 'aws';
  if (issuer === 'HackerRank') return 'hr';
  return 'self';
}

function issuerMark(issuer) {
  if (issuer === 'Amazon Web Services') return 'aws';
  if (issuer === 'HackerRank') return 'HR';
  return 'OW';
}

export default function Certifications() {
  const { lang, t } = useLanguage();

  const getLabel = (status) => ({
    earned: t('certs.earned'),
    'in-progress': t('certs.inProgress'),
    studying: t('certs.studying'),
    completed: t('certs.completed'),
  }[status] || status);

  return (
    <section className="section certifications" id="certifications">
      <div className="container">
        <div className="certs__head">
          <div>
            <span className="section-label">{t('certs.label')}</span>
            <h2 className="section-title">{t('certs.title')}</h2>
            <p className="section-subtitle">{t('certs.subtitle')}</p>
          </div>
        </div>

        <div className="certs__grid">
          {certsData.map((cert) => {
            const key = issuerKey(cert.issuer);
            const statusCls = STATUS_CLASS[cert.status] || STATUS_CLASS.studying;
            return (
              <article
                key={cert.id}
                className={`cert-card cert-card--${key} cert-card--${cert.status}`}
                data-reveal
              >
                <div className="cert-card__top">
                  <span className={`cert-card__logo cert-card__logo--${key}`}>
                    {key === 'self' ? <ShieldCheck size={20} strokeWidth={2.2} /> : issuerMark(cert.issuer)}
                  </span>
                  <div className="cert-card__badges">
                    {cert.isNew && cert.status === 'earned' && (
                      <span className="cert-card__new">{t('certs.new')}</span>
                    )}
                    <span className={`cert__badge ${statusCls}`}>{getLabel(cert.status)}</span>
                  </div>
                </div>

                <h3 className="cert-card__title">{cert.title[lang]}</h3>
                <p className="cert-card__meta">
                  {cert.issuer}
                  {cert.code ? ` · ${cert.code}` : ''} · {cert.date[lang]}
                </p>
                <p className="cert-card__desc">{cert.description[lang]}</p>

                <div className="cert-card__foot">
                  <span className="cert-card__id">{cert.code || cert.issuer}</span>
                  {cert.credentialUrl ? (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cert-card__verify"
                    >
                      {t('certs.verify')}
                      <ArrowUpRight size={13} />
                    </a>
                  ) : cert.status === 'studying' || cert.status === 'in-progress' ? (
                    <span className="cert-card__pending">{getLabel(cert.status)}</span>
                  ) : null}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
