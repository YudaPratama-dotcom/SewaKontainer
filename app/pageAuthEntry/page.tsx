export default function ProfileEntry() {
  return (
    <div className="profile-entry-container">
      <div className="profile-entry-content">
        <div className="profile-entry-left">
          <h1 className="title">Access Your Industrial<br/>Dashboard</h1>
          <div className="desc">
            Manage your container fleet and logistics with precision. High-performance tools for heavy-duty operations.
          </div>
        </div>
        <div className="profile-entry-right">
          <a href="/pageLogin" className="entry-card">
            <div className="entry-card-icon-box">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path><polyline points="10 17 15 12 10 7"></polyline><line x1="15" y1="12" x2="3" y2="12"></line></svg>
            </div>
            <div className="entry-card-content">
              <div className="entry-card-title">Login to Account</div>
              <div className="entry-card-desc">Access your existing fleet tracking and rental agreements.</div>
            </div>
            <div className="entry-card-arrow">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </div>
          </a>

          <a href="/pageRegister" className="entry-card gray">
            <div className="entry-card-icon-box">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
            </div>
            <div className="entry-card-content">
              <div className="entry-card-title">Register New Business</div>
              <div className="entry-card-desc">Establish a new account for enterprise-grade logistics solutions.</div>
            </div>
            <div className="entry-card-arrow">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </div>
          </a>
        </div>
      </div>

      <footer className="auth-simple-footer">
        <div className="auth-simple-footer-container">
          <div className="auth-simple-footer-left">
            <div className="auth-simple-footer-logo">STEEL &<br/>CARGO</div>
            <div className="auth-simple-footer-links">
              <a href="#">TERMS OF SERVICE</a>
              <a href="#">PRIVACY POLICY</a>
              <a href="#">FLEET SPECIFICATIONS</a>
              <a href="#">CONTACT TERMINAL</a>
            </div>
          </div>
          <div>© 2024 STEEL & CARGO LOGISTICS. ALL RIGHTS RESERVED.</div>
        </div>
      </footer>
    </div>
  )
}
