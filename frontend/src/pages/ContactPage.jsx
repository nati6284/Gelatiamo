import { ArrowRight, Clock, Instagram, MapPin } from 'lucide-react'
import { useI18n } from '../i18n'
import { cafeConfig } from '../config'

export default function ContactPage() {
  const {t}=useI18n()
  return <>
    <section className="page-banner">
      <span className="eyebrow">WE WOULD LOVE TO SEE YOU</span>
      <h1>{t('contactTitle')}</h1>
      <p>Questions, celebrations, or just saying hello — we're here.</p>
    </section>
    <section className="section contact-grid">
      <div className="contact-card">
        <span className="contact-icon"><MapPin/></span>
        <h2>{t('location')}</h2>
        <p>{cafeConfig.address}</p>
        <a className="text-link" href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(cafeConfig.address)}`} target="_blank" rel="noreferrer">
          Open map <ArrowRight size={15}/>
        </a>
      </div>
      <div className="contact-card">
        <span className="contact-icon"><Clock/></span>
        <h2>{t('hours')}</h2>
        <p>{cafeConfig.openingHours}</p>
        <p>Hours may change on public holidays.</p>
      </div>
      <div className="contact-card">
        <span className="contact-icon"><Instagram/></span>
        <h2>Connect With Us</h2>
        <p>{cafeConfig.phone}</p>
        <p>{cafeConfig.email}</p>
        <div style={{display:'flex',gap:'10px',marginTop:'15px'}}>
          <a className="button button-small" href={cafeConfig.instagram} target="_blank" rel="noreferrer" style={{fontSize:'10px',padding:'8px 12px'}}>Instagram</a>
          <a className="button button-small" href={cafeConfig.facebook} target="_blank" rel="noreferrer" style={{fontSize:'10px',padding:'8px 12px'}}>Facebook</a>
          <a className="button button-small" href={cafeConfig.tiktok} target="_blank" rel="noreferrer" style={{fontSize:'10px',padding:'8px 12px'}}>TikTok</a>
        </div>
      </div>
    </section>
    {/* <section className="map-placeholder">
      <MapPin size={30}/>
      <h2>Find your way to us</h2>
      <p>Update the café address in src/config.js to show the correct location.</p>
      <a className="text-link" href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(cafeConfig.address)}`} target="_blank" rel="noreferrer">
        Open Google Maps <ArrowRight size={15}/>
      </a>
    </section> */}
  </>
}
