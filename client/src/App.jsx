import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [cakes, setCakes] = useState([])
  const [page, setPage] = useState('home')
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('all')
  const [selectedCake, setSelectedCake] = useState(null)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    fetch('https://steamy-cakes.onrender.com/api/cakes')
     .then(res => res.json())
     .then(data => {
        const list = data.cakes || data
        setCakes(list)
        if (list.length > 0 &&!selectedCake) setSelectedCake(list[0])
      })
  }, [])

  const filteredCakes = cakes.filter(c => {
    const matchSearch = c.name.toLowerCase().includes(search.toLowerCase())
    const matchCat = category === 'all' || c.category === category || c.flavour === category
    return matchSearch && matchCat
  })

  const featured = cakes.slice(0, 6)

  const goOrder = (cake) => {
    setSelectedCake(cake)
    setPage('order')
  }

  return (
    <div>
      {/* HEADER - from your header.html */}
      <header>
        <div className="container header-top">
          <h1><a href="#" onClick={(e)=>{e.preventDefault(); setPage('home')}}>Steamy Cake Creamery❤</a></h1>
              <button className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={()=>setMenuOpen(!menuOpen)}>
      <span></span><span></span><span></span>
    </button>

    <nav className={menuOpen ? 'open' : ''}>
            <a href="#" className={page==='home'?'active':''} onClick={(e)=>{e.preventDefault(); setPage('home')}}>Home</a>
            <a href="#" className={page==='cakes'?'active':''} onClick={(e)=>{e.preventDefault(); setPage('cakes')}}>Cakes</a>
            <a href="#" className={page==='order'?'active':''} onClick={(e)=>{e.preventDefault(); setPage('order')}}>Order</a>
            <a href="#" className={page==='about'?'active':''} onClick={(e)=>{e.preventDefault(); setPage('about')}}>About</a>
            <a href="#" className={page==='contact'?'active':''} onClick={(e)=>{e.preventDefault(); setPage('contact')}}>Contact</a>
          </nav>
        </div>
      </header>

      <main>
        {/* HOME - from your index.html */}
        {page === 'home' && (
          <>
            <section className="hero-bakery">
              <div className="hero-content">
                <h2>Welcome to Our Cake Shop🎂</h2>
                <p>Freshly baked cakes made with love in Cape Town 🎂</p>
                <a href="#" className="btn" onClick={(e)=>{e.preventDefault(); setPage('cakes')}}>View Our Cakes</a>
                <a href="#" className="btn-secondary" onClick={(e)=>{e.preventDefault(); setPage('order')}}>Order Now</a>
              </div>
            </section>

            <section className="featured">
              <h2>Popular Cakes</h2>
              <div className="cake-grid">
                {featured.map(cake => (
                  <div key={cake.id} className="cake-card">
                    <img src={cake.image_url || cake.image} alt={cake.name} onError={(e)=>e.target.src='https://via.placeholder.com/300?text=No+Image'} />
                    <h3>{cake.name}</h3>
                    <p className="price">R{cake.price}</p>
                    <button className="btn-small" onClick={()=>goOrder(cake)}>Order Now</button>
                  </div>
                ))}
              </div>
            </section>

            <section className="about-preview">
              <h2>Why Choose Us?</h2>
              <div className="features">
                <div className="feature"><h3>Fresh Ingredients</h3><p>We use only the best quality ingredients for every cake.</p></div>
                <div className="feature"><h3>Custom Orders</h3><p>Get your cake designed exactly how you want it.</p></div>
                <div className="feature"><h3>Fast Delivery</h3><p>We deliver all around Cape Town.</p></div>
              </div>
            </section>
          </>
        )}

        {/* CAKES - from your cake.html */}
        {page === 'cakes' && (
          <>
            <section className="page-header">
              <h2>Our Delicious Cakes ❤</h2>
              <p>Choose from {cakes.length}+ amazing flavors for every occasion</p>
            </section>

            <section className="filters">
              <div className="container">
                <input type="text" placeholder="Search cakes by name..." value={search} onChange={e=>setSearch(e.target.value)} />
                <select value={category} onChange={e=>setCategory(e.target.value)}>
                  <option value="all">All Categories</option>
                  <option value="Birthday">Birthday</option>
                  <option value="Wedding">Wedding</option>
                  <option value="Present">Present</option>
                  <option value="Kids">Kids</option>
                  <option value="Graduation">Graduation</option>
                </select>
              </div>
            </section>

            <section className="all-cakes">
              <div className="cake-grid">
                {filteredCakes.map(cake => (
                  <div key={cake.id} className="cake-card">
                   <img src={cake.image_url || cake.image} alt={cake.name} onError={(e)=>e.target.src='https://via.placeholder.com/300?text=No+Image'} />
                    <h3>{cake.name}</h3>
                    <p className="price">R{cake.price}</p>
                    <button className="btn-small" onClick={()=>goOrder(cake)}>Order Now</button>
                  </div>
                ))}
              </div>
            </section>
          </>
        )}

        {/* ORDER - from your order.html */}
        {page === 'order' && (
          <>
            <section className="page-header">
              <h2>Complete Your Order 💕</h2>
              <p>Fill in your details below</p>
            </section>

            <section className="container order-section">
              <div className="order-grid">
                <div className="order-cake-info">
                  {selectedCake? (
                    <>
                   <img src={selectedCake.image_url || selectedCake.image} alt={selectedCake.name} onError={(e)=>e.target.src='https://via.placeholder.com/300?text=No+Image'} />
                      <h3 style={{fontFamily:'var(--font-cursive)', color:'var(--pink)', marginTop:'15px'}}>{selectedCake.name}</h3>
                      <p className="price">R{selectedCake.price}</p>
                      <p>{selectedCake.description || 'Freshly baked with love'}</p>
                    </>
                  ) : <p>Please select a cake from Cakes page</p>}
                </div>

                <div className="order-form">
                  <h3>Your Details</h3>
                  <form onSubmit={(e)=>{e.preventDefault(); alert(`Order placed for ${selectedCake?.name}!`)}}>
                    <label>Full Name *</label>
                    <input type="text" required placeholder="John Doe" />
                    <label>Phone Number *</label>
                    <input type="tel" required placeholder="071 234 5678" />
                    <label>Email</label>
                    <input type="email" placeholder="you@example.com" />
                    <label>Delivery Type *</label>
                    <select required><option>Delivery</option><option>Pickup</option></select>
                    <label>Delivery Address</label>
                    <input type="text" placeholder="123 Cake Street, Cape Town" />
                    <label>Delivery/Pickup Date *</label>
                    <input type="date" required />
                    <label>Message on Cake</label>
                    <input type="text" placeholder="Happy Birthday!" />
                    <label>Special Requests</label>
                    <textarea rows="3" placeholder="Any allergies?"></textarea>
                    <button type="submit" className="btn-small" style={{borderRadius:'25px', marginTop:'10px'}}>Place Order - R{selectedCake?.price || 0}</button>
                  </form>
                </div>
              </div>
            </section>
          </>
        )}

        {/* ABOUT - from your about.html */}
        {page === 'about' && (
          <section className="about-section">
            <div className="about-container">
              <div className="about-text">
                <h2>About Us</h2>
                <h3>💖 Baked with Love since 2020</h3>
                <p>At Steamy Cake Creamery, we believe that a good cake makes happiness grow. We bake all our cakes by hand, using only fresh ingredients to make sure every bite tastes delicious.</p>
                <p>From birthday cakes, wedding cakes, to small cupcakes - we create based on your wishes. Our goal is to give sweet memories in everything we do.</p>
                <div className="about-stats">
                  <div className="stat"><h4>500+</h4><p>Happy Customers</p></div>
                  <div className="stat"><h4>50+</h4><p>Cake Designs</p></div>
                  <div className="stat"><h4>100%</h4><p>Fresh Ingredients</p></div>
                </div>
              </div>
              <div className="about-image">
                <img src="/images/culturalWed2.jpeg" alt="Our Baker" onError={(e)=>e.target.src='https://via.placeholder.com/400x500?text=Baker'} />
              </div>
            </div>
          </section>
        )}

        {/* CONTACT - from your contact.html */}
        {page === 'contact' && (
          <section className="contact-section">
            <div className="contact-container">
              <div className="contact-info">
                <h2>Contact</h2>
                <p>💖 We welcome you with love :</p>
                <div className="info-item"><h3>📍 Address</h3><p>21900 andiswa street<br/>Cape Town, Western Cape<br/>South Africa</p></div>
                <div className="info-item"><h3>📞 Phone</h3><p>+27 695941217<br/>WhatsApp: 0695941217<br/>charue.vyago2019@gmail.com</p></div>
                <div className="info-item"><h3>⏰ Opening Hours</h3><p>Mon - Fri: 8AM - 6PM<br/>Sat: 9AM - 4PM<br/>Sun: Closed</p></div>
              </div>
              <div className="contact-map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d52926.969783727116!2d18.646045031837527!3d-33.9941875897474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s21900%20Andiswa%20Street%2C%20Fairdale!5e0!3m2!1sen!2sza!4v1778201575164!5m2!1sen!2sza" width="600" height="450" style={{border:0}} allowFullScreen="" loading="lazy"></iframe>
              </div>
            </div>
          </section>
        )}
      </main>

      <footer>
        <p>© 2026 Steamy Cake Creamery❤ - Cape Town</p>
        <p className="datetime">Made with 💕 in Fairdale</p>
      </footer>
    </div>
  )
}

export default App