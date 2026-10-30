import { X } from 'lucide-react'
import { useI18n } from '../i18n'

export default function MenuDetailModal({item, onClose}) {
  const {t} = useI18n()
  const money = (value) => new Intl.NumberFormat('en-ET',{style:'currency',currency:'ETB',maximumFractionDigits:2}).format(Number(value)||0)
  
  if (!item) return null
  
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content-side" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close">
          <X size={24} />
        </button>
        
        <div className="modal-header-section">
          <span className="modal-category-badge">{item.category}</span>
          <h2 className="modal-title">{item.name}</h2>
        </div>
        
        <div className="modal-image">
          <img 
            src={item.image || 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=80'} 
            alt={item.name}
          />
        </div>
        
        <div className="modal-body">
          <p className="modal-description">{item.description}</p>
          
          <div className="modal-info-grid">
            <div className="info-item">
              <span className="info-label">Price</span>
              <span className="info-value">{money(item.price)}</span>
            </div>
            
            <div className="info-item">
              <span className="info-label">Section</span>
              <span className="info-value">{item.category}</span>
            </div>
            
            <div className="info-item">
              <span className="info-label">Includes</span>
              <span className="info-value">15% VAT • 5% service</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
