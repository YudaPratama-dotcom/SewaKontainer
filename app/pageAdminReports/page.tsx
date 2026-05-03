"use client";
import React, { useState } from "react";
import { AdminSidebar } from "@/components/organisms/AdminSidebar";
import { Download, AlertTriangle } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts";

const revenueData = [
  { name: 'Apr', value: 2.4 },
  { name: 'May', value: 3.1 },
  { name: 'Jun', value: 2.8 },
  { name: 'Jul', value: 3.7 },
  { name: 'Aug', value: 4.3, isCurrent: true },
  { name: 'Sep', value: 3.3 },
];

export default function AdminReportsPage() {
  const [activePeriod, setActivePeriod] = useState("Q4");

  return (
    <div className="admin-layout">
      <AdminSidebar />
      
      <main className="admin-main">
        
        {/* Header Section */}
        <div className="admin-reports-topbar">
          <div className="admin-reports-header">
            <h1 className="admin-reports-title">Analytics Engine</h1>
            <p className="admin-reports-desc">Comprehensive operational insights and revenue modeling for global container fleet performance.</p>
          </div>
          <div style={{ display: 'flex', gap: '16px' }}>
            <div className="admin-period-toggle">
              <button 
                className={`admin-period-btn ${activePeriod === "Q3" ? "active" : ""}`}
                onClick={() => setActivePeriod("Q3")}
              >
                <span className="admin-period-main">Q3</span>
                <span className="admin-period-sub">2024</span>
              </button>
              <button 
                className={`admin-period-btn ${activePeriod === "Q4" ? "active" : ""}`}
                onClick={() => setActivePeriod("Q4")}
              >
                <span className="admin-period-main">Q4</span>
                <span className="admin-period-sub">2024</span>
              </button>
              <button 
                className={`admin-period-btn ${activePeriod === "YTD" ? "active" : ""}`} 
                style={{display: 'flex', alignItems: 'center'}}
                onClick={() => setActivePeriod("YTD")}
              >
                <span className="admin-period-main">YTD</span>
              </button>
            </div>
            <button className="admin-btn-export">
              <Download size={16} />
              EXPORT DATA
            </button>
          </div>
        </div>

        {/* Top Grid */}
        <div className="admin-reports-grid">
          
          {/* Revenue Projection Card */}
          <div className="admin-card">
            <div className="admin-projection-header">
              <div style={{ maxWidth: '300px' }}>
                <h3 className="admin-card-title" style={{marginBottom: '8px'}}>Revenue Projection</h3>
                <p className="admin-card-desc">Aggregated forecast based on active leases and historical utilization.</p>
              </div>
              <div>
                <h2 className="admin-projection-value">$4.2M</h2>
                <p className="admin-projection-trend">
                  <span>↗</span> +12.4% vs Q2
                </p>
              </div>
            </div>
            
            <div className="admin-chart-container" style={{height: '280px'}}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={revenueData} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#888' }} dy={10} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#888' }} tickFormatter={(val) => `$${val}M`} domain={[0, 5]} ticks={[1, 2, 3, 4, 5]} />
                  <Tooltip cursor={{ fill: 'transparent' }} formatter={(value) => [`$${value}M`, 'Revenue']} />
                  <Bar dataKey="value" radius={[2, 2, 0, 0]} barSize={80}>
                    {revenueData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.isCurrent ? '#e32a2f' : '#f1f5f9'} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Asset Health Matrix Card */}
          <div className="admin-card" style={{ display: 'flex', flexDirection: 'column' }}>
            <h3 className="admin-card-title" style={{marginBottom: '8px'}}>Asset Health Matrix</h3>
            <p className="admin-card-desc">Operational readiness across primary container classes.</p>
            
            <div className="admin-health-list">
              {/* Item 1 */}
              <div>
                <div className="admin-health-item-header">
                  <span className="admin-health-label">Standard 20ft Dry</span>
                  <span className="admin-health-value">92%</span>
                </div>
                <div className="admin-health-bar-bg">
                  <div className="admin-health-bar-fill red" style={{ width: '92%' }}></div>
                </div>
              </div>
              
              {/* Item 2 */}
              <div>
                <div className="admin-health-item-header">
                  <span className="admin-health-label dim">High Cube 40ft</span>
                  <span className="admin-health-value">85%</span>
                </div>
                <div className="admin-health-bar-bg">
                  <div className="admin-health-bar-fill" style={{ width: '85%' }}></div>
                </div>
              </div>
              
              {/* Item 3 */}
              <div>
                <div className="admin-health-item-header">
                  <span className="admin-health-label dim">Refrigerated (Reefer)</span>
                  <span className="admin-health-value">68%</span>
                </div>
                <div className="admin-health-bar-bg">
                  <div className="admin-health-bar-fill" style={{ width: '68%' }}></div>
                </div>
                <p className="admin-health-alert">
                  <AlertTriangle size={12} />
                  Maintenance threshold approaching
                </p>
              </div>
              
              {/* Item 4 */}
              <div>
                <div className="admin-health-item-header">
                  <span className="admin-health-label">Open Top 40ft</span>
                  <span className="admin-health-value">98%</span>
                </div>
                <div className="admin-health-bar-bg">
                  <div className="admin-health-bar-fill red" style={{ width: '98%' }}></div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Table Card */}
        <div className="admin-card admin-card-flush">
          <div style={{padding: '24px'}}>
            <div className="admin-reports-table-header">
              <div>
                <h3 className="admin-card-title" style={{marginBottom: '8px'}}>High-Value Active Leases</h3>
                <p className="admin-card-desc">Top tier contracts currently deployed globally.</p>
              </div>
              <a href="#" className="admin-link-red">
                VIEW ALL
              </a>
            </div>
            
            <div className="admin-table-wrapper">
              <table className="admin-table">
                <thead>
                  <tr>
                    <th style={{width: '15%'}}>Contract ID</th>
                    <th style={{width: '20%'}}>Client Entity</th>
                    <th style={{width: '20%'}}>Asset Type</th>
                    <th style={{width: '20%'}}>Deployment Zone</th>
                    <th style={{width: '15%'}}>Value (MO)</th>
                    <th style={{width: '10%'}}>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Row 1 */}
                  <tr>
                    <td>
                      <span className="admin-table-contract">TR-8829-A</span>
                    </td>
                    <td>
                      <span className="admin-table-value">Apex Maritime Logistics</span>
                    </td>
                    <td className="admin-table-text-sub">50x High Cube 40ft</td>
                    <td className="admin-table-text-sub">Port of Rotterdam</td>
                    <td>
                      <span className="admin-table-value">$45,000</span>
                    </td>
                    <td>
                      <span className="admin-status active" style={{backgroundColor: '#f1f5f9'}}>
                        <span className="admin-status-dot" style={{backgroundColor: '#e32a2f'}}></span>
                        <span style={{color: '#64748b'}}>Active</span>
                      </span>
                    </td>
                  </tr>

                  {/* Row 2 */}
                  <tr>
                    <td>
                      <span className="admin-table-contract">TR-9102-B</span>
                    </td>
                    <td>
                      <span className="admin-table-value">Global Fresh Produce</span>
                    </td>
                    <td className="admin-table-text-sub">120x Reefer 20ft</td>
                    <td className="admin-table-text-sub">Los Angeles Port</td>
                    <td>
                      <span className="admin-table-value">$112,500</span>
                    </td>
                    <td>
                      <span className="admin-status active" style={{backgroundColor: '#f1f5f9'}}>
                        <span className="admin-status-dot" style={{backgroundColor: '#e32a2f'}}></span>
                        <span style={{color: '#64748b'}}>Active</span>
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
}
