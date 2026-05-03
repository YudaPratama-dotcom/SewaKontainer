import Image from 'next/image';

export default function Catalog() {
  return (
    <div className="bg-light">
      <div className="page-header">
        <div className="container">
          <h1 className="page-title">Unit Katalog</h1>
          <p className="page-desc">
            Solusi ruang modular dan logistik baja premium. Pilih unit yang sesuai dengan kebutuhan operasional Anda dengan standar industri global.
          </p>
        </div>
      </div>

      <div className="container pb-20">
        <div className="catalog-grid">
          {/* Card 1 */}
          <div className="catalog-card">
            <div className="catalog-img-wrapper">
              <span className="catalog-badge">READY STOCK</span>
              <img src="/container-1.png" alt="20ft Dry Standard" />
            </div>
            <div className="catalog-content">
              <div className="catalog-header-row">
                <div>
                  <h3 className="catalog-card-title">20ft Dry Standard</h3>
                  <p className="catalog-condition">Kondisi: Baru (One Way)</p>
                </div>
                <div className="catalog-price-box">
                  <div className="catalog-price-label">MULAI DARI</div>
                  <div className="catalog-price">Rp 450rb<span>/hari</span></div>
                </div>
              </div>
              <div className="catalog-specs">
                <div className="catalog-spec">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect></svg>
                  6.05m x 2.44m x 2.59m
                </div>
                <div className="catalog-spec">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path></svg>
                  Max Payload: 28,000kg
                </div>
              </div>
              <div className="catalog-actions">
                <a href="/pageProductDetail" className="btn-outline">Detail</a>
                <a href="/pageRentalBookingForm" className="btn-primary" style={{ width: '100%' }}>Sewa</a>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="catalog-card">
            <div className="catalog-img-wrapper">
              <span className="catalog-badge dark">PREMIUM UNIT</span>
              <img src="/container-3.png" alt="40ft Reefer High Cube" />
            </div>
            <div className="catalog-content">
              <div className="catalog-header-row">
                <div>
                  <h3 className="catalog-card-title">40ft Reefer High Cube</h3>
                  <p className="catalog-condition">Kondisi: Baru</p>
                </div>
                <div className="catalog-price-box">
                  <div className="catalog-price-label">MULAI DARI</div>
                  <div className="catalog-price">Rp 1.2jt<span>/hari</span></div>
                </div>
              </div>
              <div className="catalog-specs">
                <div className="catalog-spec">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
                  -30°C to +30°C
                </div>
                <div className="catalog-spec">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path></svg>
                  Volume: 76.4 m³
                </div>
              </div>
              <div className="catalog-actions">
                <a href="/pageProductDetail" className="btn-outline">Detail</a>
                <a href="/pageRentalBookingForm" className="btn-primary" style={{ width: '100%' }}>Sewa</a>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="catalog-card">
            <div className="catalog-img-wrapper">
              <span className="catalog-badge gray">VALUE OPTION</span>
              <img src="/container-2.png" alt="20ft Cargo Worthy" />
            </div>
            <div className="catalog-content">
              <div className="catalog-header-row">
                <div>
                  <h3 className="catalog-card-title">20ft Cargo Worthy</h3>
                  <p className="catalog-condition">Kondisi: Bekas (Grade B)</p>
                </div>
                <div className="catalog-price-box">
                  <div className="catalog-price-label">MULAI DARI</div>
                  <div className="catalog-price">Rp 300rb<span>/hari</span></div>
                </div>
              </div>
              <div className="catalog-specs">
                <div className="catalog-spec">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                  Wind & Water Tight
                </div>
                <div className="catalog-spec">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path></svg>
                  Dry Storage Grade
                </div>
              </div>
              <div className="catalog-actions">
                <a href="/pageProductDetail" className="btn-outline">Detail</a>
                <a href="/pageRentalBookingForm" className="btn-primary" style={{ width: '100%' }}>Sewa</a>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="catalog-card">
            <div className="catalog-img-wrapper">
              <span className="catalog-badge">LIMITED</span>
              <img src="/container-1.png" alt="40ft Open Top Unit" style={{ objectPosition: 'top' }} />
            </div>
            <div className="catalog-content">
              <div className="catalog-header-row">
                <div>
                  <h3 className="catalog-card-title">40ft Open Top Unit</h3>
                  <p className="catalog-condition">Kondisi: Bekas (Grade A)</p>
                </div>
                <div className="catalog-price-box">
                  <div className="catalog-price-label">MULAI DARI</div>
                  <div className="catalog-price">Rp 850rb<span>/hari</span></div>
                </div>
              </div>
              <div className="catalog-specs">
                <div className="catalog-spec">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>
                  Top Loading Support
                </div>
                <div className="catalog-spec">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>
                  Removable Header
                </div>
              </div>
              <div className="catalog-actions">
                <a href="/pageProductDetail" className="btn-outline">Detail</a>
                <a href="/pageRentalBookingForm" className="btn-primary" style={{ width: '100%' }}>Sewa</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
