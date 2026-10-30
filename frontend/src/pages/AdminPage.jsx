import { useState } from 'react'
import { Plus, Edit, Trash2, Upload, Link as LinkIcon } from 'lucide-react'

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState('menu') // 'menu' or 'branches'
  const [menuItems, setMenuItems] = useState([])
  const [branches, setBranches] = useState([])
  const [showModal, setShowModal] = useState(false)
  const [editingItem, setEditingItem] = useState(null)
  const [imageMode, setImageMode] = useState('url') // 'url' or 'upload'

  const handleAddMenu = () => {
    setEditingItem({
      name: '',
      description: '',
      category: '',
      price: '',
      image: '',
      available: true
    })
    setShowModal(true)
  }

  const handleEditMenu = (item) => {
    setEditingItem(item)
    setShowModal(true)
  }

  const handleDeleteMenu = (id) => {
    if (window.confirm('Are you sure you want to delete this item?')) {
      setMenuItems(menuItems.filter(item => item.id !== id))
    }
  }

  const handleSaveMenu = (e) => {
    e.preventDefault()
    if (editingItem.id) {
      // Update existing
      setMenuItems(menuItems.map(item => 
        item.id === editingItem.id ? editingItem : item
      ))
    } else {
      // Add new
      setMenuItems([...menuItems, { ...editingItem, id: Date.now() }])
    }
    setShowModal(false)
    setEditingItem(null)
  }

  const handleImageUpload = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setEditingItem({ ...editingItem, image: reader.result })
      }
      reader.readAsDataURL(file)
    }
  }

  const handleAddBranch = () => {
    setEditingItem({
      name: '',
      address: '',
      phone: '',
      mapUrl: ''
    })
    setShowModal(true)
  }

  const handleEditBranch = (branch) => {
    setEditingItem(branch)
    setShowModal(true)
  }

  const handleDeleteBranch = (id) => {
    if (window.confirm('Are you sure you want to delete this branch?')) {
      setBranches(branches.filter(branch => branch.id !== id))
    }
  }

  const handleSaveBranch = (e) => {
    e.preventDefault()
    if (editingItem.id) {
      // Update existing
      setBranches(branches.map(branch => 
        branch.id === editingItem.id ? editingItem : branch
      ))
    } else {
      // Add new
      setBranches([...branches, { ...editingItem, id: Date.now() }])
    }
    setShowModal(false)
    setEditingItem(null)
  }

  return (
    <>
      <section className="page-banner">
        <span className="eyebrow">ADMIN PANEL</span>
        <h1>Manage Your Content</h1>
        <p>Add, edit, or remove menu items and branch locations.</p>
      </section>

      <section className="section admin-section">
        <div className="admin-tabs">
          <button 
            className={activeTab === 'menu' ? 'active' : ''} 
            onClick={() => setActiveTab('menu')}
          >
            Menu Items
          </button>
          <button 
            className={activeTab === 'branches' ? 'active' : ''} 
            onClick={() => setActiveTab('branches')}
          >
            Branches
          </button>
        </div>

        {activeTab === 'menu' ? (
          <div className="admin-content">
            <div className="admin-heading">
              <h2>Menu Management</h2>
              <button className="button" onClick={handleAddMenu}>
                <Plus size={16} /> Add Menu Item
              </button>
            </div>

            <div className="admin-list">
              {menuItems.length === 0 ? (
                <p className="empty-state">No menu items yet. Add your first item!</p>
              ) : (
                menuItems.map(item => (
                  <div key={item.id} className="admin-row">
                    <div className="admin-item-content">
                      {item.image && (
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          style={{width: '80px', height: '80px', objectFit: 'cover', borderRadius: '8px'}}
                        />
                      )}
                      <div>
                        <strong>{item.name}</strong>
                        <p>{item.category} • ETB {item.price}</p>
                        <small>{item.description}</small>
                      </div>
                    </div>
                    <div style={{display: 'flex', gap: '10px'}}>
                      <button className="button button-small" onClick={() => handleEditMenu(item)}>
                        <Edit size={14} /> Edit
                      </button>
                      <button className="danger-button" onClick={() => handleDeleteMenu(item.id)}>
                        <Trash2 size={14} /> Delete
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        ) : (
          <div className="admin-content">
            <div className="admin-heading">
              <h2>Branch Management</h2>
              <button className="button" onClick={handleAddBranch}>
                <Plus size={16} /> Add Branch
              </button>
            </div>

            <div className="admin-list">
              {branches.length === 0 ? (
                <p className="empty-state">No branches yet. Add your first branch!</p>
              ) : (
                branches.map(branch => (
                  <div key={branch.id} className="admin-row">
                    <div>
                      <strong>{branch.name}</strong>
                      <p>{branch.address}</p>
                      <small>{branch.phone}</small>
                    </div>
                    <div style={{display: 'flex', gap: '10px'}}>
                      <button className="button button-small" onClick={() => handleEditBranch(branch)}>
                        <Edit size={14} /> Edit
                      </button>
                      <button className="danger-button" onClick={() => handleDeleteBranch(branch.id)}>
                        <Trash2 size={14} /> Delete
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        )}
      </section>

      {/* Modal for Add/Edit */}
      {showModal && editingItem && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content-side admin-modal" onClick={e => e.stopPropagation()}>
            <div className="modal-header-section">
              <h2 className="modal-title">
                {editingItem.id ? 'Edit' : 'Add'} {activeTab === 'menu' ? 'Menu Item' : 'Branch'}
              </h2>
            </div>

            <div className="modal-body">
              {activeTab === 'menu' ? (
                <form onSubmit={handleSaveMenu}>
                  <div className="field">
                    <label>Item Name *</label>
                    <input 
                      type="text" 
                      value={editingItem.name} 
                      onChange={e => setEditingItem({...editingItem, name: e.target.value})}
                      required
                    />
                  </div>

                  <div className="field">
                    <label>Description</label>
                    <textarea 
                      value={editingItem.description}
                      onChange={e => setEditingItem({...editingItem, description: e.target.value})}
                      rows="3"
                    />
                  </div>

                  <div className="form-row">
                    <div className="field">
                      <label>Category *</label>
                      <select 
                        value={editingItem.category}
                        onChange={e => setEditingItem({...editingItem, category: e.target.value})}
                        required
                      >
                        <option value="">Select Category</option>
                        <option value="Breakfast">Breakfast</option>
                        <option value="Lunch">Lunch</option>
                        <option value="Cakes">Cakes</option>
                        <option value="Ice Cream">Ice Cream</option>
                        <option value="Torta">Torta</option>
                        <option value="Cold Drinks">Cold Drinks</option>
                        <option value="Hot Drinks">Hot Drinks</option>
                        <option value="Virgin Cocktail">Virgin Cocktail</option>
                        <option value="Sandwiches Wraps">Sandwiches & Wraps</option>
                        <option value="Extra">Extra</option>
                        <option value="Boxes">Boxes</option>
                      </select>
                    </div>

                    <div className="field">
                      <label>Price (ETB) *</label>
                      <input 
                        type="number" 
                        step="0.01"
                        value={editingItem.price}
                        onChange={e => setEditingItem({...editingItem, price: e.target.value})}
                        required
                      />
                    </div>
                  </div>

                  <div className="field">
                    <label>Image</label>
                    <div className="image-mode-toggle">
                      <button 
                        type="button"
                        className={imageMode === 'url' ? 'active' : ''}
                        onClick={() => setImageMode('url')}
                      >
                        <LinkIcon size={16} /> URL
                      </button>
                      <button 
                        type="button"
                        className={imageMode === 'upload' ? 'active' : ''}
                        onClick={() => setImageMode('upload')}
                      >
                        <Upload size={16} /> Upload
                      </button>
                    </div>

                    {imageMode === 'url' ? (
                      <input 
                        type="url"
                        placeholder="https://example.com/image.jpg"
                        value={editingItem.image}
                        onChange={e => setEditingItem({...editingItem, image: e.target.value})}
                      />
                    ) : (
                      <div className="file-upload">
                        <input 
                          type="file"
                          accept="image/*"
                          onChange={handleImageUpload}
                          id="imageUpload"
                        />
                        <label htmlFor="imageUpload" className="file-upload-label">
                          <Upload size={20} />
                          <span>Choose image file</span>
                        </label>
                      </div>
                    )}

                    {editingItem.image && (
                      <div className="image-preview">
                        <img src={editingItem.image} alt="Preview" />
                      </div>
                    )}
                  </div>

                  <div className="field">
                    <label style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
                      <input 
                        type="checkbox"
                        checked={editingItem.available}
                        onChange={e => setEditingItem({...editingItem, available: e.target.checked})}
                      />
                      Available
                    </label>
                  </div>

                  <div className="form-actions">
                    <button type="submit" className="button">
                      Save Item
                    </button>
                    <button 
                      type="button" 
                      className="button button-outline-dark" 
                      onClick={() => setShowModal(false)}
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              ) : (
                <form onSubmit={handleSaveBranch}>
                  <div className="field">
                    <label>Branch Name *</label>
                    <input 
                      type="text"
                      value={editingItem.name}
                      onChange={e => setEditingItem({...editingItem, name: e.target.value})}
                      required
                    />
                  </div>

                  <div className="field">
                    <label>Address *</label>
                    <textarea 
                      value={editingItem.address}
                      onChange={e => setEditingItem({...editingItem, address: e.target.value})}
                      rows="2"
                      required
                    />
                  </div>

                  <div className="field">
                    <label>Phone</label>
                    <input 
                      type="tel"
                      value={editingItem.phone}
                      onChange={e => setEditingItem({...editingItem, phone: e.target.value})}
                    />
                  </div>

                  <div className="field">
                    <label>Google Maps URL</label>
                    <input 
                      type="url"
                      placeholder="https://maps.app.goo.gl/..."
                      value={editingItem.mapUrl}
                      onChange={e => setEditingItem({...editingItem, mapUrl: e.target.value})}
                    />
                  </div>

                  <div className="form-actions">
                    <button type="submit" className="button">
                      Save Branch
                    </button>
                    <button 
                      type="button" 
                      className="button button-outline-dark" 
                      onClick={() => setShowModal(false)}
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
