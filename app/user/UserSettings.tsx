"use client";
import React, { useState } from "react";
import { UserSidebar } from "@/components/organisms/UserSidebar";
import { Camera, Building, Lock, Smartphone, MonitorSmartphone, ShieldCheck, Eye, EyeOff } from "lucide-react";
import PopupSaveSetting from "./Popupsavesetting";

export default function UserSettings() {
  const [showPopup, setShowPopup] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [is2FAEnabled, setIs2FAEnabled] = useState(false);

  const handleSaveProfile = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="user-layout">
      <UserSidebar />

      {/* Render Popup if showPopup is true */}
      {showPopup && <PopupSaveSetting onClose={handleClosePopup} />}

      <main className="user-main">
        <div className="user-content" style={{paddingTop: '64px'}}>
          
          {/* Header */}
          <h1 className="user-page-title">
            <span className="dark">PROFILE</span><br/>
            <span className="red">SETTINGS</span>
          </h1>
          <p className="user-page-subtitle">
            Manage your industrial identity, corporate credentials, and secure access protocols from a centralized terminal.
          </p>

          <div className="user-settings-grid">
            
            {/* Personal Information */}
            <div className="user-card">
              <div className="user-card-header">
                <div>
                  <h2 className="user-card-title">Personal Information</h2>
                  <p className="user-card-desc">Update your digital identity and contact details.</p>
                </div>
                <div style={{color: '#94a3b8'}}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                </div>
              </div>

              <div className="user-profile-pic-container">
                <div className="user-profile-pic">
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=256&h=256" alt="Profile" />
                  <div className="user-profile-pic-btn">
                    <Camera size={14} />
                  </div>
                </div>

                <div style={{flex: 1}}>
                  <div className="user-settings-form-row">
                    <div className="user-settings-form-group">
                      <label className="user-settings-label">FULL LEGAL NAME</label>
                      <input type="text" className="user-settings-input" defaultValue="Alexander Vane" />
                    </div>
                    <div className="user-settings-form-group">
                      <label className="user-settings-label">CONTACT NUMBER</label>
                      <input type="text" className="user-settings-input" defaultValue="+1 (555) 012-3456" />
                    </div>
                  </div>
                  
                  <div className="user-settings-form-group">
                    <label className="user-settings-label">CORPORATE EMAIL ADDRESS</label>
                    <input type="email" className="user-settings-input" defaultValue="a.vane@titanlogistics.com" />
                  </div>
                </div>
              </div>
            </div>

            <div className="user-settings-two-cols">
              
              {/* Company Details */}
              <div className="user-card">
                <div className="user-card-header" style={{marginBottom: '32px'}}>
                  <div style={{display: 'flex', gap: '16px', alignItems: 'center'}}>
                    <div style={{backgroundColor: '#f1f5f9', padding: '12px', borderRadius: '8px', color: '#64748b'}}>
                      <Building size={20} />
                    </div>
                    <div>
                      <h2 className="user-card-title" style={{fontSize: '18px'}}>Company Details</h2>
                      <p className="user-card-desc">Verified corporate entity information.</p>
                    </div>
                  </div>
                </div>

                <div className="user-settings-form-row">
                  <div className="user-settings-form-group">
                    <label className="user-settings-label">ENTITY NAME</label>
                    <input type="text" className="user-settings-input" defaultValue="Steel & Cargo Solutions Ltd." readOnly />
                  </div>
                  <div className="user-settings-form-group">
                    <label className="user-settings-label">TAX IDENTIFICATION ID</label>
                    <input type="text" className="user-settings-input" defaultValue="TX-900-221-88" readOnly />
                  </div>
                </div>

                <div className="user-settings-form-group">
                  <label className="user-settings-label">REGIONAL HEADQUARTERS</label>
                  <div style={{position: 'relative'}}>
                    <div style={{position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8'}}>
                      <Building size={16} />
                    </div>
                    <input type="text" className="user-settings-input" style={{paddingLeft: '48px'}} defaultValue="Port District, Sector 7-G, Chicago IL" readOnly />
                  </div>
                </div>
              </div>

              {/* Security & Access */}
              <div className="user-card">
                <div className="user-card-header" style={{marginBottom: '32px'}}>
                  <div style={{display: 'flex', gap: '16px', alignItems: 'center'}}>
                    <div style={{backgroundColor: '#fee2e2', padding: '12px', borderRadius: '8px', color: '#e32a2f'}}>
                      <ShieldCheck size={20} />
                    </div>
                    <div>
                      <h2 className="user-card-title" style={{fontSize: '18px'}}>Security & Access</h2>
                      <p className="user-card-desc">Protect your portal access.</p>
                    </div>
                  </div>
                </div>

                {/* Password Row */}
                <div className="user-security-row">
                  <div className="user-security-info" style={{flex: 1}}>
                    <Lock className="user-security-icon" size={16} />
                    <div style={{flex: 1}}>
                      <div className="user-security-title">Password</div>
                      <div style={{position: 'relative', marginTop: '8px'}}>
                        <input 
                          type={showPassword ? "text" : "password"} 
                          className="user-settings-input" 
                          defaultValue="••••••••" 
                          style={{paddingRight: '40px', backgroundColor: '#ffffff', border: '1px solid #e2e8f0'}}
                        />
                        <button 
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          style={{position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', color: '#94a3b8', display: 'flex'}}
                        >
                          {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                        </button>
                      </div>
                      <div className="user-security-desc" style={{marginTop: '4px'}}>Last changed 4 months ago</div>
                    </div>
                  </div>
                  <button className="user-security-action" style={{marginLeft: '16px'}}>UPDATE</button>
                </div>

                {/* 2FA Row */}
                <div className="user-security-row">
                  <div className="user-security-info">
                    <Smartphone className="user-security-icon" size={16} />
                    <div>
                      <div className="user-security-title">2FA Authentication</div>
                      <div className="user-security-desc">Enhanced account protection</div>
                    </div>
                  </div>
                  <div 
                    onClick={() => setIs2FAEnabled(!is2FAEnabled)}
                    style={{
                      width: '40px', 
                      height: '20px', 
                      backgroundColor: is2FAEnabled ? '#e32a2f' : '#cbd5e1', 
                      borderRadius: '10px', 
                      position: 'relative', 
                      cursor: 'pointer',
                      transition: 'background-color 0.2s'
                    }}
                  >
                    <div style={{
                      width: '16px', 
                      height: '16px', 
                      backgroundColor: 'white', 
                      borderRadius: '50%', 
                      position: 'absolute', 
                      left: is2FAEnabled ? '22px' : '2px', 
                      top: '2px',
                      transition: 'left 0.2s'
                    }}></div>
                  </div>
                </div>

                {/* Manage Sessions */}
                <button style={{width: '100%', padding: '16px', backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '8px', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', fontSize: '13px', fontWeight: '800', color: '#475569', cursor: 'pointer', marginTop: '16px', textTransform: 'uppercase', letterSpacing: '0.5px'}}>
                  <MonitorSmartphone size={16} />
                  MANAGE ACTIVE SESSIONS
                </button>
              </div>

            </div>

            {/* Footer */}
            <div className="user-settings-footer">
              <p className="user-settings-footer-text">
                By saving these changes, you confirm that all corporate and personal data provided adheres to the TITAN Logistics data compliance policy.
              </p>
              <div className="user-settings-footer-actions">
                <button className="user-btn-discard">DISCARD</button>
                <button className="user-btn-save" onClick={handleSaveProfile}>SAVE GLOBAL PROFILE</button>
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}
