import { Link } from 'react-router-dom'
import { Instagram, Facebook } from 'lucide-react'
import { useI18n } from '../i18n'
import { cafeConfig } from '../config'

function TikTokIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
    </svg>
  )
}

export default function Footer() {
  const {t} = useI18n()
  
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-col">
          <Link to="/" className="brand brand-light">
            <img src={cafeConfig.logo} alt="GELATIAMO" className="brand-logo"/>
          </Link>
          <p className="footer-tagline">{t('footer')}</p>
        </div>
        
        <div className="footer-col">
          <h3>Contact Us</h3>
          <p><strong>Phone:</strong> {cafeConfig.phone}</p>
          <p><strong>Email:</strong> {cafeConfig.email}</p>
          <p><strong>Address:</strong> {cafeConfig.address}</p>
        </div>
        
        <div className="footer-col">
          <h3>Hours</h3>
          <p>{cafeConfig.openingHours}</p>
          <p style={{marginTop:'10px', fontSize:'10px', opacity:0.8}}>
            Hours may vary on public holidays
          </p>
        </div>
        
        <div className="footer-col">
          <h3>Follow Us</h3>
          <div className="social-links">
            <a 
              href={cafeConfig.instagram} 
              target="_blank" 
              rel="noreferrer" 
              aria-label="Instagram"
            >
              <Instagram/>
            </a>
            <a 
              href={cafeConfig.facebook} 
              target="_blank" 
              rel="noreferrer" 
              aria-label="Facebook"
            >
              <Facebook/>
            </a>
            <a 
              href={cafeConfig.tiktok} 
              target="_blank" 
              rel="noreferrer" 
              aria-label="TikTok"
            >
              <TikTokIcon/>
            </a>
          </div>
          <p style={{marginTop:'15px', fontSize:'11px'}}>
            Stay connected for updates and special offers
          </p>
        </div>
      </div>
      
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} {cafeConfig.name}. All rights reserved.</span>
      </div>
    </footer>
  )
}
