"use client";
import React from "react";
import { UserSidebar } from "@/components/organisms/UserSidebar";
import { Box, CreditCard, RotateCcw, AlertTriangle, Download, LogOut, Plus } from "lucide-react";

export default function UserDashboardOverview() {
  return (
    <div className="user-layout">
      <UserSidebar />

      <main className="user-main">
        <div className="user-content" style={{paddingTop: '48px'}}>
          
          {/* Header */}
          <div className="user-dash-header-label">
            FACILITY STATUS
          </div>
          <h1 className="user-page-title" style={{marginBottom: '48px'}}>
            Active Fleet Overview
          </h1>

          {/* Top Stats Cards */}
          <div className="user-dash-cards">
            {/* Card 1 */}
            <div className="user-stat-card">
              <div className="user-stat-header">
                <span className="user-stat-title">Active Units</span>
                <Box className="user-stat-icon" size={24} />
              </div>
              <div>
                <div style={{display: 'flex', alignItems: 'baseline', gap: '8px'}}>
                  <span className="user-stat-value">14</span>
                  <span className="user-stat-label" style={{color: '#64748b', fontSize: '12px'}}>DEPLOYED</span>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="user-stat-card dark">
              <div className="user-stat-header">
                <span className="user-stat-title">Next Invoice</span>
                <CreditCard className="user-stat-icon" size={24} />
              </div>
              <div>
                <div className="user-stat-value">$4,250.00</div>
                <div className="user-stat-label">Due in 5 days (Nov 12)</div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="user-stat-card gray">
              <div className="user-stat-header">
                <span className="user-stat-title">Lease Expiry</span>
              </div>
              <div>
                <div className="user-stat-value">12 Days</div>
                <div className="user-stat-label" style={{marginTop: '4px', marginBottom: '8px'}}>UNIT UN-8842</div>
                
                {/* Progress bar simulation */}
                <div style={{display: 'flex', gap: '4px'}}>
                  <div style={{height: '6px', width: '20px', backgroundColor: '#e32a2f', borderRadius: '2px'}}></div>
                  <div style={{height: '6px', width: '20px', backgroundColor: '#e32a2f', borderRadius: '2px'}}></div>
                  <div style={{height: '6px', width: '20px', backgroundColor: '#e32a2f', borderRadius: '2px'}}></div>
                  <div style={{height: '6px', width: '20px', backgroundColor: '#cbd5e1', borderRadius: '2px'}}></div>
                  <div style={{height: '6px', width: '20px', backgroundColor: '#cbd5e1', borderRadius: '2px'}}></div>
                </div>
              </div>
            </div>
          </div>

          <div className="user-dash-main-grid">
            {/* Current Deployment List */}
            <div>
              <div className="user-section-header">
                <h2 className="user-section-title">CURRENT DEPLOYMENT</h2>
                <a href="#" className="user-link-red">VIEW ALL →</a>
              </div>

              <div className="user-deployment-list">
                {/* Item 1 */}
                <div className="user-deployment-item">
                  <div className="user-deployment-img">
                    <div className="user-deployment-badge">ACTIVE</div>
                    <img src="https://images.unsplash.com/photo-1586528116311-ad8ed745124c?auto=format&fit=crop&q=80&w=800" alt="Container" />
                  </div>
                  <div className="user-deployment-info">
                    <div className="user-deployment-header">
                      <h3 className="user-deployment-title">40ft High Cube Container</h3>
                      <span className="user-deployment-id">UN-9921</span>
                    </div>
                    <p className="user-deployment-desc">
                      Heavy-duty storage unit suitable for industrial machinery.
                    </p>
                    <div className="user-deployment-meta">
                      <div className="user-meta-item">
                        <span className="user-meta-label">LOCATION</span>
                        <span className="user-meta-value">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                          Sector 7G
                        </span>
                      </div>
                      <div className="user-meta-item">
                        <span className="user-meta-label">START DATE</span>
                        <span className="user-meta-value">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                          Oct 01, 2023
                        </span>
                      </div>
                    </div>
                    <div className="user-deployment-actions">
                      <button className="user-btn-outline-red">VIEW DETAILS</button>
                    </div>
                  </div>
                </div>

                {/* Item 2 */}
                <div className="user-deployment-item">
                  <div className="user-deployment-img">
                    <div className="user-deployment-badge">ACTIVE</div>
                    <img src="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&q=80&w=800" alt="Container" />
                  </div>
                  <div className="user-deployment-info">
                    <div className="user-deployment-header">
                      <h3 className="user-deployment-title">20ft Standard Office</h3>
                      <span className="user-deployment-id">UN-8842</span>
                    </div>
                    <p className="user-deployment-desc">
                      Climate-controlled site office with integrated power.
                    </p>
                    <div className="user-deployment-meta">
                      <div className="user-meta-item">
                        <span className="user-meta-label">LOCATION</span>
                        <span className="user-meta-value">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                          Sector 4B
                        </span>
                      </div>
                      <div className="user-meta-item">
                        <span className="user-meta-label">START DATE</span>
                        <span className="user-meta-value">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                          Oct 12, 2023
                        </span>
                      </div>
                    </div>
                    <div className="user-deployment-actions">
                      <button className="user-btn-outline-red">VIEW DETAILS</button>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Operations Control */}
            <div>
              <div className="user-control-panel">
                <h3 className="user-control-title">Operations Control</h3>
                <div className="user-control-list">
                  
                  <div className="user-control-item">
                    <div className="user-control-info">
                      <div className="user-control-icon">
                        <RotateCcw size={20} />
                      </div>
                      <span className="user-control-text">EXTEND RENTAL</span>
                    </div>
                    <span className="user-control-arrow">→</span>
                  </div>

                  <div className="user-control-item">
                    <div className="user-control-info">
                      <div className="user-control-icon">
                        <AlertTriangle size={20} />
                      </div>
                      <span className="user-control-text">REPORT ISSUE</span>
                    </div>
                    <span className="user-control-arrow">→</span>
                  </div>

                  <div className="user-control-item">
                    <div className="user-control-info">
                      <div className="user-control-icon gray">
                        <Download size={20} />
                      </div>
                      <span className="user-control-text">DOWNLOAD DOCS</span>
                    </div>
                    <span className="user-control-arrow">→</span>
                  </div>

                </div>
              </div>
            </div>

          </div>

        </div>
      </main>
    </div>
  );
}
