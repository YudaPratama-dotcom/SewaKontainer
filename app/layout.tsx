import type { Metadata } from 'next'
import './global.css'

export const metadata: Metadata = {
  title: 'Steel & Cargo | Sewa Container Baru & Bekas',
  description: 'Sewa Container Baru & Bekas Ukuran 20FT & 40FT dengan harga kompetitif dan pengiriman cepat.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <body>
        {/* Navbar */}
        <nav className="navbar">
          <div className="container nav-container">
            <div className="logo">
              <span className="logo-text">Steel & Cargo</span>
            </div>
            <div className="nav-links">
              <a href="/" className="nav-link">Jasa</a>
              <a href="/pageCatalog" className="nav-link">Produk</a>
              <a href="/pageContactUs" className="nav-link">Kontak</a>
            </div>
            <div className="nav-icons">
               {/* Help Circle Icon */}
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
               {/* User Profile Icon */}
               <a href="/pageAuthEntry" style={{ display: 'flex', alignItems: 'center', color: 'inherit' }}>
                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
               </a>
            </div>
          </div>
        </nav>

        <main>{children}</main>

        {/* Footer */}
        <footer className="footer">
          <div className="container footer-container">
            <div className="footer-col">
              <h3 className="footer-logo">Steel & Cargo</h3>
              <p className="footer-desc">Penyedia solusi container terintegrasi terkemuka di Indonesia sejak 1990. Kualitas dan kepercayaan adalah pondasi kami.</p>
              <div className="footer-social">
                {/* Globe/Website Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
                {/* Mail Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                {/* Phone Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              </div>
            </div>
            
            <div className="footer-col">
              <h4 className="footer-title">Layanan</h4>
              <ul className="footer-links">
                <li><a href="/pageCatalog">Sewa Container</a></li>
                <li><a href="/pageCatalog">Jual Container Baru</a></li>
                <li><a href="/pageCatalog">Modifikasi Unit</a></li>
                <li><a href="/pageCatalog">Maintenance Service</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4 className="footer-title">Perusahaan</h4>
              <ul className="footer-links">
                <li><a href="/pageContactUs">Contact Us</a></li>
                <li><a href="/pageContactUs">Privacy Policy</a></li>
                <li><a href="/pageContactUs">Terms of Service</a></li>
                <li><a href="/pageContactUs">FAQ</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4 className="footer-title">Workshop Pusat</h4>
              <p className="footer-address">
                Jl. Marunda Logistik No. 45<br/>
                Jakarta Utara, DKI Jakarta<br/>
                Indonesia 14150
              </p>
              <p className="footer-copyright">
                © 2024 Steel & Cargo Logistics. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
