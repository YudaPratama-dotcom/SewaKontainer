export default function Register() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#e5e5e5' }}>
      <div style={{ padding: '40px', flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ display: 'flex', width: '100%', maxWidth: '1000px', backgroundColor: 'var(--white)', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}>
          {/* Left Sidebar */}
          <div style={{ 
            flex: '0 0 400px', 
            backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.8)), url("/hero-bg.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            padding: '40px',
            color: 'var(--white)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}>
            <div className="auth-logo">STEEL & CARGO</div>
            <div>
              <h2 style={{ fontSize: '32px', fontWeight: '800', lineHeight: '1.1', marginBottom: '20px' }}>GLOBAL<br/>LOGISTICS<br/>NETWORK.</h2>
              <p style={{ fontSize: '13px', lineHeight: '1.6', color: '#ccc' }}>
                Join our network to manage your industrial fleet, track inventory, and scale your operations globally.
              </p>
            </div>
          </div>

          {/* Right Form */}
          <div style={{ flex: 1, padding: '60px' }}>
            <h1 className="auth-title">Create Account</h1>
            <p className="auth-desc">Enter your details to register a new organizational profile.</p>

            <form>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
                <div>
                  <label className="auth-label">Full Name</label>
                  <input type="text" className="auth-input" placeholder="Jane Doe" style={{ backgroundColor: '#f0f0f0' }} />
                </div>
                <div>
                  <label className="auth-label">Company Name</label>
                  <input type="text" className="auth-input" placeholder="Heavy Industries LLC" style={{ backgroundColor: '#f0f0f0' }} />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
                <div>
                  <label className="auth-label">Email Address</label>
                  <input type="email" className="auth-input" placeholder="jane@company.com" style={{ backgroundColor: '#f0f0f0' }} />
                </div>
                <div>
                  <label className="auth-label">Phone Number</label>
                  <input type="tel" className="auth-input" placeholder="+1 (555) 000-0000" style={{ backgroundColor: '#f0f0f0' }} />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
                <div>
                  <label className="auth-label">Password</label>
                  <input type="password" className="auth-input" placeholder="••••••••" style={{ backgroundColor: '#f0f0f0' }} />
                </div>
                <div>
                  <label className="auth-label">Confirm Password</label>
                  <input type="password" className="auth-input" placeholder="••••••••" style={{ backgroundColor: '#f0f0f0' }} />
                </div>
              </div>

              <label className="checkbox-wrapper">
                <input type="checkbox" />
                <span>I agree to the <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.</span>
              </label>

              <button type="button" className="auth-btn" style={{ padding: '18px', fontSize: '16px' }}>
                Create Account
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </button>

              <div className="auth-footer-text" style={{ marginTop: '30px' }}>
                Already have an account? <a href="/pageLogin" className="auth-link">Log In Here</a>
              </div>
            </form>
          </div>
        </div>
      </div>

      <footer className="auth-simple-footer">
        <div className="auth-simple-footer-container">
          <div className="auth-simple-footer-left">
            <div className="auth-simple-footer-logo">STEEL &<br/>CARGO</div>
            <div>© 2024 STEEL & CARGO LOGISTICS. ALL RIGHTS RESERVED.</div>
          </div>
          <div className="auth-simple-footer-links">
            <a href="#">TERMS OF SERVICE</a>
            <a href="#">PRIVACY POLICY</a>
            <a href="#">FLEET SPECIFICATIONS</a>
            <a href="#">CONTACT TERMINAL</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
