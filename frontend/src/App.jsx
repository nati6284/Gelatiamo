import { useEffect, useMemo, useState } from 'react'
import { Link, NavLink, Route, Routes, useLocation } from 'react-router-dom'
import { ArrowRight, Check, ChefHat, Clock, Coffee, Instagram, MapPin, Menu as MenuIcon, X, Facebook } from 'lucide-react'
import { QRCodeSVG } from 'qrcode.react'
import { I18nProvider, useI18n } from './i18n'
import { cafeConfig } from './config'
import { locations, menuData } from './data'

// Convert menuData object to flat array for display
const convertMenuToArray = () => {
  const result = []
  let id = 1
  Object.entries(menuData).forEach(([category, items]) => {
    const categoryName = category === 'iceCream' ? 'Ice Cream' : 
                        category === 'coldDrinks' ? 'Cold Drinks' :
                        category === 'hotDrinks' ? 'Hot Drinks' :
                        category.charAt(0).toUpperCase() + category.slice(1)
    items.forEach(item => {
      result.push({
        id: String(id++),
        name: item.name,
        description: item.description,
        category: categoryName,
        price: parseFloat(item.price),
        image: item.image,
        available: true,
        popular: item.popular,
        new: item.new
      })
    })
  })
  return result
}

function AppShell() {
  const {t,lang,setLang}=useI18n()
  const [menuOpen,setMenuOpen]=useState(false)
  const [toast,setToast]=useState('')
  const items = useMemo(() => convertMenuToArray(), [])
  const branches = locations.map((loc, i) => ({...loc, id: i + 1}))
  const location=useLocation()
  useEffect(()=>{setMenuOpen(false);window.scrollTo(0,0)},[location.pathname])
  useEffect(()=>{if(!toast)return;const id=setTimeout(()=>setToast(''),4000);return()=>clearTimeout(id)},[toast])
  return <div className={lang==='am'?'app amharic':'app'}>
    <header className="site-header">
      <Link to="/" className="brand" aria-label="Home"><img src={cafeConfig.logo} alt="GELATIAMO" className="brand-logo"/></Link>
      <button className="mobile-menu icon-button" onClick={()=>setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen?<X/>:<MenuIcon/>}</button>
      <nav className={menuOpen?'main-nav open':'main-nav'}>
        <NavLink to="/">{t('home')}</NavLink><NavLink to="/menu">{t('menu')}</NavLink><NavLink to="/locations">{t('locations')}</NavLink><NavLink to="/#story">{t('story')}</NavLink><NavLink to="/contact">{t('contact')}</NavLink>
        <button className="mobile-lang-toggle" onClick={()=>setLang(lang==='en'?'am':'en')}>{lang==='en'?'አማ':'EN'}</button>
      </nav>
      <div className="header-actions"><button className="lang-toggle" onClick={()=>setLang(lang==='en'?'am':'en')}>{lang==='en'?'አማ':'EN'}</button></div>
    </header>
    <main><Routes>
      <Route path="/" element={<Home items={items}/>}/>
      <Route path="/menu" element={<MenuPage items={items}/>}/>
      <Route path="/locations" element={<LocationsPage branches={branches}/>}/>
      <Route path="/contact" element={<ContactPage/>}/>
      <Route path="/qr" element={<QRPage/>}/>
      <Route path="*" element={<section className="section"><h1>Page not found</h1><Link className="button" to="/">Return home</Link></section>}/>
    </Routes></main>
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-col">
          <Link to="/" className="brand brand-light"><img src={cafeConfig.logo} alt="GELATIAMO" className="brand-logo"/></Link>
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
          <p style={{marginTop:'10px',fontSize:'10px',opacity:0.8}}>Hours may vary on public holidays</p>
        </div>
        <div className="footer-col">
          <h3>Follow Us</h3>
          <div className="social-links">
            <a href={cafeConfig.instagram} target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram/></a>
            <a href={cafeConfig.facebook} target="_blank" rel="noreferrer" aria-label="Facebook"><Facebook/></a>
            <a href={cafeConfig.tiktok} target="_blank" rel="noreferrer" aria-label="TikTok"><TikTokIcon/></a>
          </div>
          <p style={{marginTop:'15px',fontSize:'11px'}}>Stay connected for updates and special offers</p>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} {cafeConfig.name}. All rights reserved.</span>
      </div>
    </footer>
    {toast&&<div className="toast" role="status"><Check size={18}/>{toast}</div>}
  </div>
}
function TikTokIcon(){return <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/></svg>}
function Home({items}) {
  const {t}=useI18n()
  return <>
    <section className="hero"><div className="hero-image"></div><div className="hero-shade"></div><div className="hero-content"><span className="eyebrow"><span></span>{t('eyebrow')}</span><h1>{t('headline')}</h1><p>{t('intro')}</p><div className="hero-buttons"><Link className="button" to="/menu">{t('explore')} <ArrowRight size={17}/></Link><Link className="button button-outline" to="/contact">{t('contact')}</Link></div><div className="hero-meta"><span><Clock size={16}/>{cafeConfig.openingHours}</span><span><MapPin size={16}/>{cafeConfig.address}</span></div></div><div className="hero-vertical">AUTHENTIC GELATO · ITALIAN TASTE</div></section>
    <section className="section favorites-section"><div className="section-heading"><div><span className="eyebrow eyebrow-dark">FROM OUR KITCHEN</span><h2>{t('favorites')}</h2><p>{t('favoritesSub')}</p></div><Link className="text-link" to="/menu">{t('viewMenu')} <ArrowRight size={16}/></Link></div><div className="menu-grid">{items.slice(0,3).map(item=><MenuCard key={item.id} item={item}/>)}</div></section>
    <section className="story-section" id="story"><div className="story-photo"><img src="https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=1200&q=85" alt="Authentic Italian gelato" loading="lazy"/><div className="photo-note"><Coffee/><span>Authentic Italian gelato</span></div></div><div className="story-copy"><span className="eyebrow eyebrow-dark">OUR PHILOSOPHY</span><h2>{t('storyTitle')}</h2><p>{t('storyText')}</p><div className="value-row"><span className="value-icon"><ChefHat/></span><div><strong>{t('fresh')}</strong><p>{t('freshText')}</p></div></div><div className="value-row"><span className="value-icon"><Coffee/></span><div><strong>{t('local')}</strong><p>{t('localText')}</p></div></div><Link className="text-link" to="/contact">{t('contact')} <ArrowRight size={16}/></Link></div></section>
  </>
}
function MenuCard({item}) {
  const {t}=useI18n()
  return <article className="menu-card"><div className="menu-card-image"><img src={item.image||'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=80'} alt={item.name} loading="lazy"/><span className="category-pill">{item.category}</span></div><div className="menu-card-content"><div className="menu-card-title"><h3>{item.name}</h3><strong>{money(item.price)}</strong></div><p>{item.description}</p></div></article>
}
function MenuPage({items}) {
  const {t}=useI18n();const [category,setCategory]=useState('All');const [search,setSearch]=useState('')
  const categories=['All',...new Set(items.map(x=>x.category).filter(Boolean))]
  const filtered=items.filter(x=>(category==='All'||x.category===category)&&(x.name+' '+x.description).toLowerCase().includes(search.toLowerCase())&&x.available!==false)
  return <><section className="page-banner"><span className="eyebrow">FRESH FROM OUR KITCHEN</span><h1>{t('menuTitle')}</h1><p>{t('menuSub')}</p></section><section className="section menu-page"><div className="menu-tools"><div className="category-tabs">{categories.map(c=><button className={category===c?'active':''} key={c} onClick={()=>setCategory(c)}>{c==='All'?t('all'):(t(`categories.${c}`)===`categories.${c}`?c:t(`categories.${c}`))}</button>)}</div><input className="search-input" placeholder="Search menu..." value={search} onChange={e=>setSearch(e.target.value)}/></div>{filtered.length?<div className="menu-grid">{filtered.map(item=><MenuCard key={item.id} item={item}/>)}</div>:<p className="empty-state">No menu items found.</p>}</section></>
}
function ContactPage() {
 const {t}=useI18n()
 return <><section className="page-banner"><span className="eyebrow">WE WOULD LOVE TO SEE YOU</span><h1>{t('contactTitle')}</h1><p>Questions, celebrations, or just saying hello — we're here.</p></section><section className="section contact-grid"><div className="contact-card"><span className="contact-icon"><MapPin/></span><h2>{t('location')}</h2><p>{cafeConfig.address}</p><a className="text-link" href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(cafeConfig.address)}`} target="_blank" rel="noreferrer">Open map <ArrowRight size={15}/></a></div><div className="contact-card"><span className="contact-icon"><Clock/></span><h2>{t('hours')}</h2><p>{cafeConfig.openingHours}</p><p>Hours may change on public holidays.</p></div><div className="contact-card"><span className="contact-icon"><Instagram/></span><h2>Connect With Us</h2><p>{cafeConfig.phone}</p><p>{cafeConfig.email}</p><div style={{display:'flex',gap:'10px',marginTop:'15px'}}><a className="button button-small" href={cafeConfig.instagram} target="_blank" rel="noreferrer" style={{fontSize:'10px',padding:'8px 12px'}}>Instagram</a><a className="button button-small" href={cafeConfig.facebook} target="_blank" rel="noreferrer" style={{fontSize:'10px',padding:'8px 12px'}}>Facebook</a><a className="button button-small" href={cafeConfig.tiktok} target="_blank" rel="noreferrer" style={{fontSize:'10px',padding:'8px 12px'}}>TikTok</a></div></div></section><section className="map-placeholder"><MapPin size={30}/><h2>Find your way to us</h2><p>Update the café address in src/config.js to show the correct location.</p><a className="text-link" href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(cafeConfig.address)}`} target="_blank" rel="noreferrer">Open Google Maps <ArrowRight size={15}/></a></section></>
}
function LocationsPage({branches}) {
 const {t}=useI18n()
 return <><section className="page-banner"><span className="eyebrow">VISIT US</span><h1>{t('locations')}</h1><p>We have 5 locations across Addis Ababa to serve you.</p></section><section className="section"><div className="menu-grid">{branches.map(branch=><article className="menu-card" key={branch.id}><div className="menu-card-content"><div className="menu-card-title"><h3>{branch.name}</h3></div>{branch.address&&<p><MapPin size={14} style={{display:'inline',marginRight:'4px'}}/>{branch.address}</p>}{branch.phone&&<p style={{fontSize:'0.9em',opacity:0.8}}>{branch.phone}</p>}<a className="add-button" href={branch.mapUrl} target="_blank" rel="noreferrer">View on map <ArrowRight size={15}/></a></div></article>)}</div></section></>
}
function QRPage() {
 const {t}=useI18n();const url=typeof window!=='undefined'?`${window.location.origin}/menu`:''
 return <><section className="page-banner"><span className="eyebrow">DIGITAL MENU</span><h1>{t('qrTitle')}</h1><p>{t('qrSub')}</p><p>Print this QR code and place it on tables, the counter, or takeaway packaging.</p><button className="button" onClick={()=>window.print()}>Print QR code</button></section><section className="section qr-section"><div className="qr-copy"><span className="eyebrow eyebrow-dark">SCAN & ORDER</span><h1>Quick access to our menu</h1><p>Customers can scan this QR code to view the full menu on their phones.</p></div><div className="qr-card"><img src={cafeConfig.logo} alt="GELATIAMO" style={{width:'80px',marginBottom:'10px'}}/><QRCodeSVG value={url} size={240} level="H" includeMargin/><p>{url}</p></div></section></>
}
function money(value){return new Intl.NumberFormat('en-ET',{style:'currency',currency:'ETB',maximumFractionDigits:2}).format(Number(value)||0)}
export default function App(){return <I18nProvider><AppShell/></I18nProvider>}
