import { Link } from 'react-router-dom'
import { ArrowRight, ChefHat, Clock, Coffee, MapPin } from 'lucide-react'
import { useI18n } from '../i18n'
import { cafeConfig } from '../config'
import MenuCard from '../components/MenuCard'

export default function Home({items, onSelectItem}) {
  const {t}=useI18n()
  return <>
    <section className="hero">
      <div className="hero-image"></div>
      <div className="hero-shade"></div>
      <div className="hero-content">
        <span className="eyebrow"><span></span>{t('eyebrow')}</span>
        <h1>{t('headline')}</h1>
        <p>{t('intro')}</p>
        <div className="hero-buttons">
          <Link className="button" to="/menu">{t('explore')} <ArrowRight size={17}/></Link>
          <Link className="button button-outline" to="/contact">{t('contact')}</Link>
        </div>
        <div className="hero-meta">
          <span><Clock size={16}/>{cafeConfig.openingHours}</span>
          <span><MapPin size={16}/>{cafeConfig.address}</span>
        </div>
      </div>
      <div className="hero-vertical">AUTHENTIC GELATO · ITALIAN TASTE</div>
    </section>
    
    <section className="section favorites-section">
      <div className="section-heading">
        <div>
          <span className="eyebrow eyebrow-dark">FROM OUR KITCHEN</span>
          <h2>{t('favorites')}</h2>
          <p>{t('favoritesSub')}</p>
        </div>
        <Link className="text-link" to="/menu">{t('viewMenu')} <ArrowRight size={16}/></Link>
      </div>
      <div className="menu-grid">
        {items.slice(0,3).map(item=><MenuCard key={item.id} item={item} onClick={onSelectItem}/>)}
      </div>
    </section>
    
    <section className="story-section" id="story">
      <div className="story-photo">
        <img src="https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=1200&q=85" alt="Authentic Italian gelato" loading="lazy"/>
        <div className="photo-note">
          <Coffee/>
          <span>Authentic Italian gelato</span>
        </div>
      </div>
      <div className="story-copy">
        <span className="eyebrow eyebrow-dark">OUR PHILOSOPHY</span>
        <h2>{t('storyTitle')}</h2>
        <p>{t('storyText')}</p>
        <div className="value-row">
          <span className="value-icon"><ChefHat/></span>
          <div>
            <strong>{t('fresh')}</strong>
            <p>{t('freshText')}</p>
          </div>
        </div>
        <div className="value-row">
          <span className="value-icon"><Coffee/></span>
          <div>
            <strong>{t('local')}</strong>
            <p>{t('localText')}</p>
          </div>
        </div>
        <Link className="text-link" to="/contact">{t('contact')} <ArrowRight size={16}/></Link>
      </div>
    </section>
  </>
}
