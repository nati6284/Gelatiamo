export default function MenuCard({item, onClick}) {
  const money = (value) => new Intl.NumberFormat('en-ET',{style:'currency',currency:'ETB',maximumFractionDigits:2}).format(Number(value)||0)
  
  return (
    <article className="menu-card" onClick={() => onClick && onClick(item)} style={{cursor: onClick ? 'pointer' : 'default'}}>
      <div className="menu-card-image">
        <img 
          src={item.image||'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=80'} 
          alt={item.name} 
          loading="lazy"
        />
        <span className="category-pill">{item.category}</span>
      </div>
      <div className="menu-card-content">
        <div className="menu-card-title">
          <h3>{item.name}</h3>
          <strong>{money(item.price)}</strong>
        </div>
        <p>{item.description}</p>
      </div>
    </article>
  )
}
