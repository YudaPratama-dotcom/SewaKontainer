'use client';

import { useState } from 'react';

export default function RentalBookingForm() {
  const [showSuccess, setShowSuccess] = useState(false);

  const handleConfirm = () => {
    setShowSuccess(true);
  };

  return (
    <div className="container" style={{ position: 'relative' }}>
      <div className="booking-section">
        <h1 className="booking-title-main">RENTAL<br /><span>SPECIFICATIONS</span></h1>
        <p className="page-desc" style={{ maxWidth: '450px' }}>
          Configure your industrial logistics requirements. Our heavy-duty container solutions are built for durability and global transport standards.
        </p>

        <div className="booking-layout">
          {/* Form Side */}
          <div>
            <form>
              {/* Step 1 */}
              <div className="booking-step">
                <div className="step-header">
                  <span className="step-number">01</span>
                  <h3 className="step-title">Personal Data</h3>
                </div>
                
                <div className="form-grid-2" style={{ marginBottom: '20px' }}>
                  <div>
                    <label className="booking-label">Nama Lengkap</label>
                    <input type="text" className="booking-input" placeholder="e.g. John Doe" />
                  </div>
                  <div>
                    <label className="booking-label">Email</label>
                    <input type="email" className="booking-input" placeholder="john@logistic.com" />
                  </div>
                </div>
                <div>
                  <label className="booking-label">No HP / WhatsApp</label>
                  <input type="tel" className="booking-input" placeholder="+62 812 XXXX XXXX" />
                </div>
              </div>

              {/* Step 2 */}
              <div className="booking-step">
                <div className="step-header">
                  <span className="step-number">02</span>
                  <h3 className="step-title">Rental Details</h3>
                </div>
                
                <div className="form-grid-2" style={{ marginBottom: '20px' }}>
                  <div>
                    <label className="booking-label">Jenis Container</label>
                    <select className="booking-select">
                      <option>Dry Storage 20ft</option>
                      <option>Dry Storage 40ft</option>
                      <option>Reefer 20ft</option>
                      <option>Reefer 40ft</option>
                    </select>
                  </div>
                  <div>
                    <label className="booking-label">Jumlah Unit</label>
                    <input type="number" className="booking-input" defaultValue="1" min="1" />
                  </div>
                </div>
                
                <div style={{ marginBottom: '20px' }}>
                  <label className="booking-label">Lokasi Pengiriman</label>
                  <div style={{ position: 'relative' }}>
                    <svg style={{ position: 'absolute', left: '15px', top: '12px', width: '16px', height: '16px', color: 'var(--text-muted)' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                    <input type="text" className="booking-input" placeholder="Enter delivery address" style={{ paddingLeft: '40px' }} />
                  </div>
                </div>

                <div className="form-grid-2" style={{ marginBottom: '20px' }}>
                  <div>
                    <label className="booking-label">Tanggal Mulai</label>
                    <input type="date" className="booking-input" />
                  </div>
                  <div>
                    <label className="booking-label">Durasi Sewa (Bulan)</label>
                    <input type="number" className="booking-input" placeholder="e.g. 6" />
                  </div>
                </div>

                <div>
                  <label className="booking-label">Catatan Tambahan</label>
                  <textarea className="booking-textarea" placeholder="Special requirements, handling instructions..."></textarea>
                </div>
              </div>

              <div style={{ textAlign: 'right' }}>
                <button type="button" onClick={handleConfirm} className="btn-primary" style={{ padding: '16px 32px', fontSize: '16px' }}>
                  Confirm Rental 
                  <svg style={{ width: '18px', height: '18px', display: 'inline-block', verticalAlign: 'middle', marginLeft: '8px' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </button>
              </div>
            </form>
          </div>

          {/* Aside Section */}
          <div>
            <div className="booking-aside-card">
              <h3 className="aside-title">Why Choose Us?</h3>
              <ul className="aside-list">
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                  <div>
                    <div className="aside-item-title">ISO Certified Units</div>
                    <div className="aside-item-desc">All our containers meet international shipping and safety standards.</div>
                  </div>
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>
                  <div>
                    <div className="aside-item-title">Rapid Deployment</div>
                    <div className="aside-item-desc">Delivery available within 48 hours for standard units in most locations.</div>
                  </div>
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                  <div>
                    <div className="aside-item-title">24/7 Support</div>
                    <div className="aside-item-desc">Real-time tracking and maintenance support for long-term rentals.</div>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="booking-aside-img">
               <img src="/container-1.png" alt="Stacked Containers" style={{ height: '300px', objectFit: 'cover' }} />
            </div>
          </div>
        </div>
      </div>

      {/* Success Modal */}
      {showSuccess && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0,0,0,0.6)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000,
          backdropFilter: 'blur(4px)'
        }}>
          <div style={{
            backgroundColor: 'white',
            padding: '40px',
            borderRadius: '12px',
            textAlign: 'center',
            maxWidth: '400px',
            boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
          }}>
            <div style={{
              width: '60px',
              height: '60px',
              backgroundColor: '#e6f7ef',
              color: '#28a745',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 20px'
            }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" style={{ width: '30px', height: '30px' }}><polyline points="20 6 9 17 4 12"></polyline></svg>
            </div>
            <h2 style={{ fontSize: '24px', fontWeight: '800', marginBottom: '10px' }}>Order Successfully Sent</h2>
            <p style={{ fontSize: '14px', color: '#666', lineHeight: '1.6', marginBottom: '30px' }}>
              Your request for a **40ft High Cube Dry Container** has been successfully sent. Our team will contact you shortly to confirm logistics.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
               <a href="/pageCatalog" className="btn-primary" style={{ width: '100%' }}>Back To Catalog</a>
               <button onClick={() => setShowSuccess(false)} style={{ fontSize: '14px', color: '#888', fontWeight: '600' }}>Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
