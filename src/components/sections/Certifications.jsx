import { useLanguage } from '../../context/LanguageContext';
import certsData from '../../data/certifications';
import './Certifications.css';

const STATUS_STYLES = {
  earned:      { label: 'Earned',      cls: 'cert__badge--earned' },
  'in-progress':{ label: 'In Progress', cls: 'cert__badge--progress' },
  studying:    { label: 'Studying',    cls: 'cert__badge--studying' },
};

export default function Certifications() {
  const { lang, t } = useLanguage();

  const getLabel = (status) => ({
    earned: t('certs.earned'),
    'in-progress': t('certs.inProgress'),
    studying: t('certs.studying'),
  }[status] || status);

  return (
    <section className="section certifications" id="certifications">
      <div className="container">
        <span className="section-label">{t('certs.label')}</span>
        <h2 className="section-title">{t('certs.title')}</h2>

        <div className="certs__list">
          {certsData.map((cert) => {
            const style = STATUS_STYLES[cert.status] || STATUS_STYLES.studying;
            return (
              <div key={cert.id} className="cert">
                <div className="cert__main">
                  <div className="cert__info">
                    <h3 className="cert__title">{cert.title[lang]}</h3>
                    <p className="cert__issuer">{cert.issuer} · {cert.date[lang]}</p>
                    <p className="cert__desc">{cert.description[lang]}</p>
                  </div>
                  <div className="cert__right">
                    <span className={`cert__badge ${style.cls}`}>{getLabel(cert.status)}</span>
                    {cert.credentialUrl && (
                      <a href={cert.credentialUrl} target="_blank" rel="noopener noreferrer" className="cert__verify">
                        Verify ↗
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
