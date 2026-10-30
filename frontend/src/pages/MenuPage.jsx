import { useEffect, useMemo, useState } from 'react'
import { useI18n } from '../i18n'
import MenuCard from '../components/MenuCard'

export default function MenuPage({items, onSelectItem}) {
  const {t}=useI18n();
  const [activeCategory,setActiveCategory]=useState('');
  const [search,setSearch]=useState('')
  
  // Group items by category
  const groupedByCategory = useMemo(() => {
    const groups = {}
    items.forEach(item => {
      if (!groups[item.category]) groups[item.category] = []
      groups[item.category].push(item)
    })
    return groups
  }, [items])
  
  const categories = Object.keys(groupedByCategory)
  
  // Scroll to category
  const scrollToCategory = (cat) => {
    const element = document.getElementById(`category-${cat}`)
    if (element) {
      const offset = 200 // offset for sticky header + category nav
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
    }
  }
  
  // Detect active category on scroll
  useEffect(() => {
    if (!categories.length) return
    
    const handleScroll = () => {
      // Adjust offset based on screen size
      const isMobile = window.innerWidth <= 780
      const offset = isMobile ? 150 : 250
      const scrollPosition = window.scrollY + offset
      
      // Find which category section we're currently viewing
      let currentCategory = categories[0]
      
      for (const cat of categories) {
        const element = document.getElementById(`category-${cat}`)
        if (element) {
          const elementTop = element.offsetTop
          const viewThreshold = isMobile ? 50 : 100
          
          if (scrollPosition >= elementTop - viewThreshold) {
            currentCategory = cat
          }
        }
      }
      
      setActiveCategory(currentCategory)
      
      // Auto-scroll the category nav to show active category
      const activeButton = document.querySelector('.category-nav-sticky button.active')
      const navContainer = document.querySelector('.category-nav-sticky')
      
      if (activeButton && navContainer) {
        const buttonLeft = activeButton.offsetLeft
        const buttonWidth = activeButton.offsetWidth
        const containerWidth = navContainer.offsetWidth
        const scrollLeft = navContainer.scrollLeft
        
        // Calculate the position to scroll to (center the active button)
        const targetScroll = buttonLeft - (containerWidth / 2) + (buttonWidth / 2)
        
        // Smooth scroll the nav container
        navContainer.scrollTo({
          left: targetScroll,
          behavior: 'smooth'
        })
      }
    }
    
    // Initial call
    handleScroll()
    
    // Add scroll listener
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [categories, activeCategory])
  
  const filtered = search ? items.filter(x=>(x.name+' '+x.description).toLowerCase().includes(search.toLowerCase())&&x.available!==false) : items
  
  return <>
    <section className="page-banner">
      <span className="eyebrow">FRESH FROM OUR KITCHEN</span>
      <h1>{t('menuTitle')}</h1>
      <p>{t('menuSub')}</p>
    </section>
    <section className="section menu-page">
      {/* Category Navigation */}
      <div className="category-nav-sticky">
        {categories.map(cat=>
          <button 
            className={activeCategory===cat?'active':''} 
            key={cat} 
            onClick={()=>scrollToCategory(cat)}
          >
            {t(`categories.${cat}`)===`categories.${cat}`?cat:t(`categories.${cat}`)}
          </button>
        )}
      </div>
      
      {/* Search Input */}
      <div className="menu-tools-search">
        <input className="search-input" placeholder="Search menu..." value={search} onChange={e=>setSearch(e.target.value)}/>
      </div>
      
      {search ? (
        filtered.length ? 
          <div className="menu-grid">{filtered.map(item=><MenuCard key={item.id} item={item} onClick={onSelectItem}/>)}</div> :
          <p className="empty-state">No menu items found.</p>
      ) : (
        <div className="menu-by-category">
          {categories.map(cat => (
            <div key={cat} id={`category-${cat}`} className="category-section">
              <h2 className="category-title">{t(`categories.${cat}`)===`categories.${cat}`?cat:t(`categories.${cat}`)}</h2>
              <div className="menu-grid">
                {groupedByCategory[cat].map(item=><MenuCard key={item.id} item={item} onClick={onSelectItem}/>)}
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  </>
}
