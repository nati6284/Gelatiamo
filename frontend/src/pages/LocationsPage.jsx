import { ArrowRight, MapPin } from 'lucide-react'
import { useI18n } from '../i18n'

export default function LocationsPage({branches}) {
  const {t}=useI18n()
  return <>
    <section className="page-banner">
      <span className="eyebrow">VISIT US</span>
      <h1>{t('locations')}</h1>
      <p>We have 5 locations across Addis Ababa to serve you.</p>
    </section>
    <section className="section">
      <div className="menu-grid">
        {branches.map(branch=>(
          <article className="menu-card" key={branch.id}>
            <div className="menu-card-content">
              <div className="menu-card-title">
                <h3>{branch.name}</h3>
              </div>
              {branch.address&&<p><MapPin size={14} style={{display:'inline',marginRight:'4px'}}/>{branch.address}</p>}
              {branch.phone&&<p style={{fontSize:'0.9em',opacity:0.8}}>{branch.phone}</p>}
              <a className="add-button" href={branch.mapUrl} target="_blank" rel="noreferrer">
                View on map <ArrowRight size={15}/>
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  </>
}
