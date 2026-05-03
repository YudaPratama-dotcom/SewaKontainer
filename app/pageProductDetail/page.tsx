export default function ProductDetail() {
  return (
    <div className="product-detail-section">
      <div className="container">
        <div className="breadcrumb">
          <a href="/">Home</a> &gt; <a href="/pageCatalog">Produk</a> &gt; <span>Dry Storage Container 40ft HC</span>
        </div>

        <div className="detail-layout">
          {/* Gallery Side */}
          <div>
            <div className="gallery-main">
              <span className="gallery-badge">NEW ARRIVAL</span>
              <img src="/container-1.png" alt="Dry Storage Container 40ft HC Main" />
            </div>
            <div className="gallery-thumbs">
              <div className="thumb active"><img src="/container-1.png" alt="Thumb 1" /></div>
              <div className="thumb"><img src="/container-4.png" alt="Thumb 2" /></div>
              <div className="thumb"><img src="/container-3.png" alt="Thumb 3" /></div>
              <div className="thumb more"><img src="/container-2.png" alt="Thumb 4" /></div>
            </div>
          </div>

          {/* Details Side */}
          <div>
            <h1 className="detail-title">Dry Storage<br/>Container 40ft HC</h1>
            <div className="detail-sku">SKU: SC-40HC-PRM</div>

            <div className="price-box">
              <div className="detail-price-label">Mulai Dari</div>
              <div className="detail-price">Rp 4.500.000</div>
              <span>/ Bulan</span>
              <div className="price-note">*Harga sewa tidak termasuk biaya pengiriman dan penempatan.</div>
            </div>

            <div className="specs-grid">
              <div className="spec-box">
                <div className="spec-label">UKURAN</div>
                <div className="spec-value">12.19 x 2.44 x 2.89 m</div>
              </div>
              <div className="spec-box">
                <div className="spec-label">KAPASITAS</div>
                <div className="spec-value">76.4 m³</div>
              </div>
              <div className="spec-box">
                <div className="spec-label">MATERIAL</div>
                <div className="spec-value">Corten Steel Grade A</div>
              </div>
              <div className="spec-box">
                <div className="spec-label">BERAT KOSONG</div>
                <div className="spec-value">3,900 kg</div>
              </div>
            </div>

            <a href="/pageRentalBookingForm" className="btn-primary btn-large">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
              Sewa Sekarang
            </a>

            <div className="trust-badges">
              <div className="trust-badge">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                <span>ISO CERTIFIED</span>
              </div>
              <div className="trust-badge">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>
                <span>FAST DELIVERY</span>
              </div>
              <div className="trust-badge">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                <span>24/7 SUPPORT</span>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="detail-tabs">
          <div className="tab active">Deskripsi</div>
          <div className="tab">Spesifikasi Teknis</div>
          <div className="tab">Syarat & Ketentuan</div>
        </div>

        <div className="tab-content">
          <div className="tab-text">
            <p>
              High Cube Dry Container 40ft kami dirancang untuk beban kargo yang membutuhkan kapasitas volume lebih besar. Dengan tinggi ekstra satu kaki dibandingkan standar 40ft, unit ini sangat ideal untuk pengiriman barang-barang ringan dengan volume besar.
            </p>
            <p>
              Terbuat dari baja Corten berkualitas tinggi yang tahan terhadap korosi, setiap unit kami menjalani inspeksi ketat untuk memastikan standar "Cargo Worthy". Lantai interior menggunakan kayu lapis marinir (marine plywood) tebal yang mampu menahan beban forklift dan alat berat lainnya.
            </p>
            <ul className="tab-list">
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                Pintu ganda dengan segel kedap air dan udara.
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                Ventilasi pasif untuk menjaga sirkulasi udara internal.
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                Struktur rangka diperkuat untuk penumpukan vertikal hingga 9 susun.
              </li>
            </ul>
          </div>
          
          <div>
            <div className="ideal-use-box">
              <h4 className="ideal-title">Penggunaan Ideal</h4>
              <ul className="ideal-list">
                <li>
                  <div className="ideal-list-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                  </div>
                  Gudang Penyimpanan
                </li>
                <li>
                  <div className="ideal-list-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>
                  </div>
                  Logistik Industri
                </li>
                <li>
                  <div className="ideal-list-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>
                  </div>
                  Kantor Proyek
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Recommendations */}
        <div style={{ marginTop: '80px' }}>
          <h2 className="section-title" style={{ fontSize: '24px', marginBottom: '30px' }}>Rekomendasi Lainnya</h2>
          <div className="catalog-grid" style={{ paddingTop: '0' }}>
            <div className="catalog-card">
              <div className="catalog-img-wrapper" style={{ height: '200px' }}>
                <img src="/container-3.png" alt="Reefer Container 20ft" />
              </div>
              <div className="catalog-content">
                <h3 className="catalog-card-title" style={{ fontSize: '16px' }}>Reefer Container 20ft</h3>
                <p className="catalog-condition" style={{ marginBottom: '15px' }}>Penyimpanan beku hingga -30°C.</p>
                <div className="catalog-price" style={{ fontSize: '16px' }}>Rp 7.200.000 / Bln</div>
              </div>
            </div>
            
            <div className="catalog-card">
              <div className="catalog-img-wrapper" style={{ height: '200px' }}>
                <img src="/container-2.png" alt="Standard Dry 20ft" />
              </div>
              <div className="catalog-content">
                <h3 className="catalog-card-title" style={{ fontSize: '16px' }}>Standard Dry 20ft</h3>
                <p className="catalog-condition" style={{ marginBottom: '15px' }}>Solusi penyimpanan ringkas & efisien.</p>
                <div className="catalog-price" style={{ fontSize: '16px' }}>Rp 2.800.000 / Bln</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
