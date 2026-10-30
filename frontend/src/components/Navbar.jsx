import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu as MenuIcon, X } from 'lucide-react'
import { useI18n } from '../i18n'
import { cafeConfig } from '../config'

export default function Navbar() {
  const {t, lang, setLang} = useI18n()
  const [menuOpen, setMenuOpen] = useState(false)
  
  return (
    <header className="site-header">
      <Link to="/" className="brand" aria-label="Home">
        <img src={cafeConfig.logo} alt="GELATIAMO" className="brand-logo"/>
      </Link>
      
      <button 
        className="mobile-menu icon-button" 
        onClick={() => setMenuOpen(!menuOpen)} 
        aria-label="Toggle navigation"
      >
        {menuOpen ? <X/> : <MenuIcon/>}
      </button>
      
      <nav className={menuOpen ? 'main-nav open' : 'main-nav'}>
        <NavLink to="/" onClick={() => setMenuOpen(false)}>{t('home')}</NavLink>
        <NavLink to="/menu" onClick={() => setMenuOpen(false)}>{t('menu')}</NavLink>
        <NavLink to="/locations" onClick={() => setMenuOpen(false)}>{t('locations')}</NavLink>
        {/* <NavLink to="/#story" onClick={() => setMenuOpen(false)}>{t('story')}</NavLink> */}
        <NavLink to="/contact" onClick={() => setMenuOpen(false)}>{t('contact')}</NavLink>
        <button 
          className="mobile-lang-toggle" 
          onClick={() => setLang(lang === 'en' ? 'am' : 'en')}
        >
          {lang === 'en' ? 'አማ' : 'EN'}
        </button>
      </nav>
      
      <div className="header-actions">
        <button 
          className="lang-toggle" 
          onClick={() => setLang(lang === 'en' ? 'am' : 'en')}
        >
          {lang === 'en' ? 'አማ' : 'EN'}
        </button>
      </div>
    </header>
  )
}
