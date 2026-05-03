export default function ContactUs() {
  return (
    <>
      <div className="contact-hero">
        <div className="container">
          <h1 className="contact-title-main">CONNECT<br /><span>WITH US</span></h1>
          <div className="contact-hero-desc">
            INFRASTRUCTURE FOR THE GLOBAL ECONOMY. PRECISION IN EVERY POINT OF CONTACT.
          </div>
        </div>
      </div>

      <div className="container">
        <div className="contact-layout">
          {/* Inquiry Form */}
          <div className="contact-card">
            <h2 className="aside-title" style={{ marginBottom: '30px' }}>Inquiry Form</h2>
            <form>
              <div className="form-grid-2" style={{ marginBottom: '20px' }}>
                <div>
                  <label className="booking-label" style={{ fontSize: '10px', textTransform: 'uppercase' }}>NAMA</label>
                  <input type="text" className="booking-input" placeholder="Enter your full name" />
                </div>
                <div>
                  <label className="booking-label" style={{ fontSize: '10px', textTransform: 'uppercase' }}>EMAIL</label>
                  <input type="email" className="booking-input" placeholder="Email address" />
                </div>
              </div>
              <div style={{ marginBottom: '30px' }}>
                <label className="booking-label" style={{ fontSize: '10px', textTransform: 'uppercase' }}>PESAN</label>
                <textarea className="booking-textarea" placeholder="How can our modular solutions help your business?" style={{ minHeight: '150px' }}></textarea>
              </div>
              <button type="button" className="btn-primary">Send Message</button>
            </form>
          </div>

          {/* Headquarters Info */}
          <div className="contact-card bg-gray">
            <h2 className="contact-card-title">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
              Headquarters
            </h2>
            
            <div className="contact-info-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              <div>
                <div className="contact-info-title">Main Logistics Hub</div>
                <div className="contact-info-desc">Jl. Industri Raya No. 45, Kawasan Industri Terpadu,<br/>Jakarta Utara, 14110</div>
              </div>
            </div>

            <div className="contact-info-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              <div>
                <div className="contact-info-title">Direct Line</div>
                <div className="contact-info-desc">+62 (21) 555-0192</div>
              </div>
            </div>

            <div className="contact-info-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              <div>
                <div className="contact-info-title">Inquiries</div>
                <div className="contact-info-desc">contact@steelcargo.com</div>
              </div>
            </div>

            <div className="contact-hours">
              <div className="hours-title">OPERATIONAL HOURS</div>
              <div className="hours-row">
                <span>Mon - Fri</span>
                <span>08:00 - 18:00</span>
              </div>
              <div className="hours-row">
                <span>Saturday</span>
                <span>09:00 - 15:00</span>
              </div>
              <div className="hours-row" style={{ color: 'var(--brand-red)' }}>
                <span>Sunday</span>
                <span>Closed</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="map-section">
        <div className="container">
          <div className="map-header">
            <div>
              <div className="map-subtitle">GLOBAL NETWORK</div>
              <h2 className="map-title">Strategic Locations</h2>
            </div>
            <div className="map-desc">
              Our nodes are placed at the heart of global trade routes to ensure maximum efficiency.
            </div>
          </div>
          
          <div className="map-card">
            <div className="map-overlay-box">
              <div className="map-loc-title">Jakarta Port Hub</div>
              <div className="map-loc-desc">Core Operations Center</div>
              <a href="#" className="map-link">Open in Google Maps &rarr;</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
