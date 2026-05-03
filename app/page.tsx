import Image from 'next/image';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-background">
          <div className="container hero-container">
            <div className="hero-content">
              <h1 className="hero-title">Sewa Container Baru<br />& Bekas Ukuran 20FT<br />& 40FT</h1>
              <ul className="hero-list">
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  Beragam jenis container berkualitas tinggi
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  Pengalaman logistik sejak 1990
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  Sertifikasi ISO & Standar Internasional
                </li>
              </ul>
              <a href="/pageCatalog" className="btn-primary">Pesan Sekarang</a>
            </div>
            
            <div className="hero-form-card">
              <h3 className="form-title">Minta Penawaran Harga</h3>
              <form>
                <div className="form-group">
                  <input type="text" className="form-input" placeholder="Nama Lengkap" />
                </div>
                <div className="form-group">
                  <input type="email" className="form-input" placeholder="Email Perusahaan" />
                </div>
                <div className="form-group">
                  <input type="tel" className="form-input" placeholder="Nomor HP / WhatsApp" />
                </div>
                <div className="form-group">
                  <input type="text" className="form-input" placeholder="Lokasi Pengiriman" />
                </div>
                <div className="form-group">
                  <input type="text" className="form-input" placeholder="mm/dd/yyyy" />
                </div>
                <button type="button" className="btn-submit">Kirim Permintaan</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                {/* Tag Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line></svg>
              </div>
              <h4 className="feature-title">Harga Kompetitif</h4>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                {/* Truck Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>
              </div>
              <h4 className="feature-title">Pengiriman Cepat</h4>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                {/* Shield Check Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><polyline points="9 12 11 14 15 10"></polyline></svg>
              </div>
              <h4 className="feature-title">Kualitas Terjamin</h4>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                {/* Tool Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>
              </div>
              <h4 className="feature-title">Custom Container</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="products-section">
        <div className="container">
          <div className="section-header">
            <div>
              <p className="section-subtitle">UNIT ARMADA KAMI</p>
              <h2 className="section-title">Pilihan Tipe Container Unggulan</h2>
            </div>
            <a href="/pageCatalog" className="link-all">Lihat Semua Produk</a>
          </div>
          
          <div className="products-grid">
            <div className="product-card">
              <div className="product-image">
                 {/* Using the generated container-1.png */}
                 <img src="/container-1.png" alt="Standard 20FT" />
              </div>
              <h3 className="product-title">Standard 20FT</h3>
              <p className="product-desc">
                Dimensi: 6.0m x 2.4m x 2.6m<br />
                Kapasitas: 33.2 m³<br />
                Kondisi: New/Used Cargo Worthy
              </p>
            </div>
            <div className="product-card">
              <div className="product-image">
                 {/* Using the generated container-2.png */}
                 <img src="/container-2.png" alt="High Cube 40FT" />
              </div>
              <h3 className="product-title">High Cube 40FT</h3>
              <p className="product-desc">
                Dimensi: 12.2m x 2.4m x 2.9m<br />
                Kapasitas: 76.4 m³<br />
                Ideal untuk kargo volume besar
              </p>
            </div>
            <div className="product-card">
              <div className="product-image">
                 {/* Using the generated container-3.png */}
                 <img src="/container-3.png" alt="Reefer Unit" />
              </div>
              <h3 className="product-title">Reefer Unit</h3>
              <p className="product-desc">
                Kontrol Suhu: -30°C to +30°C<br />
                Sertifikasi: PTI Inspected<br />
                Untuk komoditas frozen/fresh
              </p>
            </div>
            <div className="product-card">
              <div className="product-image">
                 {/* Using the generated container-4.png */}
                 <img src="/container-4.png" alt="Office Portacamp" />
              </div>
              <h3 className="product-title">Office Portacamp</h3>
              <p className="product-desc">
                Insulasi: Glasswool/Sandwich Panel<br />
                Fasilitas: AC, Listrik, Flooring<br />
                Ready for Site Office
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section">
        <div className="container">
          <div className="process-header">
            <h2 className="process-title">Proses Sewa Mudah</h2>
            <p className="process-desc">
              Kami menyediakan birokrasi penyewaan agar bisnis Anda bisa segera berjalan.
            </p>
          </div>
          
          <div className="process-grid">
            <div className="process-card">
              <span className="process-number">01</span>
              <h4 className="process-card-title">Pilih Unit</h4>
              <p className="process-card-desc">
                Cari dan temukan ukuran dan tipe container yang sesuai dengan kebutuhan Anda.
              </p>
            </div>
            <div className="process-card">
              <span className="process-number">02</span>
              <h4 className="process-card-title">Konsultasi</h4>
              <p className="process-card-desc">
                Tim ahli kami memberikan saran teknis dan penawaran harga terbaik secara transparan.
              </p>
            </div>
            <div className="process-card">
              <span className="process-number">03</span>
              <h4 className="process-card-title">Pembayaran</h4>
              <p className="process-card-desc">
                Proses administrasi cepat dan pilihan pembayaran fleksibel baik jangka pendek maupun panjang.
              </p>
            </div>
            <div className="process-card">
              <span className="process-number">04</span>
              <h4 className="process-card-title">Pengiriman</h4>
              <p className="process-card-desc">
                Unit diantar langsung ke lokasi Anda menggunakan armada trailer khusus dengan aman.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="container">
          <h2 className="testimonials-title">Dipercaya Oleh Industri</h2>
          
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="stars">
                <svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                <svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                <svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                <svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                <svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
              </div>
              <p className="testimonial-quote">
                "Layanan sangat profesional. Container yang dikirim kondisinya sangat prima dan bersih. Sangat membantu untuk gudang sementara proyek kami di Kalimantan."
              </p>
              <div className="testimonial-author">
                <div className="author-avatar"></div>
                <div className="author-info">
                  <span className="author-name">Budi Santoso</span>
                  <span className="author-title">Project Manager, PT Konstruksi Jaya</span>
                </div>
              </div>
            </div>
            
            <div className="testimonial-card">
              <div className="stars">
                <svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                <svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                <svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                <svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                <svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
              </div>
              <p className="testimonial-quote">
                "Proses modifikasi office container sangat cepat. Sesuai dengan spesifikasi yang kami minta dan pengerjaannya sangat rapi. Highly recommended!"
              </p>
              <div className="testimonial-author">
                <div className="author-avatar"></div>
                <div className="author-info">
                  <span className="author-name">Sari Wijaya</span>
                  <span className="author-title">Operational Director, Pioneer Logistics</span>
                </div>
              </div>
            </div>
            
            <div className="testimonial-card">
              <div className="stars">
                <svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                <svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                <svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                <svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                <svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
              </div>
              <p className="testimonial-quote">
                "Harga paling kompetitif dibanding vendor lain. Respon CS sangat cepat saat ada kendala di lapangan. Terima kasih Steel & Cargo."
              </p>
              <div className="testimonial-author">
                <div className="author-avatar"></div>
                <div className="author-info">
                  <span className="author-name">Hendra Putra</span>
                  <span className="author-title">Logistics Manager, Prima Food Ind</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
