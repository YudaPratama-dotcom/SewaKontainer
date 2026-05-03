"use client";
import React from "react";
import { AdminSidebar } from "@/components/organisms/AdminSidebar";
import { Search, Users, Box, DollarSign, Truck, AlertTriangle, CheckCircle2 } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts";

const data = [
  { name: 'Jan', value: 28 },
  { name: 'Feb', value: 50 },
  { name: 'Mar', value: 45 },
  { name: 'Apr', value: 78, isCurrent: true },
  { name: 'May', value: 50 },
  { name: 'Jun', value: 62 },
  { name: 'Jul', value: 68 },
];

export default function AdminDashboardPage() {
  return (
    <div className="admin-layout">
      <AdminSidebar />
      
      <main className="admin-main">
        {/* Top Search Bar */}
        <div className="admin-topbar">
          <div className="admin-search">
            <Search size={18} />
            <input 
              type="text" 
              placeholder="Search inventory..." 
            />
          </div>
        </div>

        {/* Header */}
        <div className="admin-header">
          <div>
            <h1 className="admin-title">Overview</h1>
            <p className="admin-desc">System operations and active metrics.</p>
          </div>
        </div>

        {/* Metric Cards */}
        <div className="admin-dashboard-cards">
          {/* Card 1 */}
          <div className="admin-stat-card">
            <div>
              <div className="admin-stat-header">
                <div>
                  <p className="admin-stat-title">Total Active Users</p>
                  <h3 className="admin-stat-value">1,492</h3>
                </div>
                <div className="admin-stat-icon">
                  <Users size={20} />
                </div>
              </div>
            </div>
            <p className="admin-stat-footer">
              <span style={{marginRight: '4px'}}>↗</span> +12% this month
            </p>
          </div>

          {/* Card 2 */}
          <div className="admin-stat-card red">
            <div>
              <div className="admin-stat-header">
                <div>
                  <p className="admin-stat-title">Active Container Rentals</p>
                  <h3 className="admin-stat-value">845</h3>
                </div>
                <div className="admin-stat-icon">
                  <Box size={20} />
                </div>
              </div>
            </div>
            <p className="admin-stat-footer">
              <span style={{marginRight: '4px'}}>↕</span> 92% Utilization Rate
            </p>
          </div>

          {/* Card 3 */}
          <div className="admin-stat-card">
            <div>
              <div className="admin-stat-header">
                <div>
                  <p className="admin-stat-title">Monthly Revenue</p>
                  <h3 className="admin-stat-value">$1.2M</h3>
                </div>
                <div className="admin-stat-icon slate">
                  <DollarSign size={20} />
                </div>
              </div>
            </div>
            <p className="admin-stat-footer">
              <span style={{marginRight: '4px'}}>↗</span> +5.4% vs last month
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="admin-dashboard-bottom">
          {/* Chart */}
          <div className="admin-card">
            <div className="admin-card-header">
              <div>
                <h3 className="admin-card-title">Container Occupancy Trends</h3>
                <p className="admin-card-desc">Volume utilization across all global yards.</p>
              </div>
              <div className="admin-chart-filters">
                <button className="admin-chart-filter">Weekly</button>
                <button className="admin-chart-filter active">Monthly</button>
              </div>
            </div>
            <div className="admin-chart-container">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#888' }} dy={10} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#888' }} tickFormatter={(val) => `${val}%`} />
                  <Tooltip cursor={{ fill: 'transparent' }} />
                  <Bar dataKey="value" radius={[2, 2, 0, 0]}>
                    {data.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.isCurrent ? '#e32a2f' : '#f1f5f9'} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Activity Feed */}
          <div className="admin-card">
            <h3 className="admin-card-title" style={{marginBottom: '24px'}}>System Activity</h3>
            <div className="admin-activity-list">
              
              {/* Activity 1 */}
              <div className="admin-activity-item">
                <div className="admin-activity-icon red">
                  <Truck size={16} />
                </div>
                <div className="admin-activity-content">
                  <h4 className="admin-activity-title">Unit #C-8491 Dispatched</h4>
                  <p className="admin-activity-desc">To: Nexus Industrial Park,<br/>Sector 4</p>
                  <span className="admin-activity-time">10 mins ago</span>
                </div>
              </div>

              {/* Activity 2 */}
              <div className="admin-activity-item">
                <div className="admin-activity-icon blue">
                  <AlertTriangle size={16} />
                </div>
                <div className="admin-activity-content">
                  <h4 className="admin-activity-title">Maintenance Alert</h4>
                  <p className="admin-activity-desc">Yard B crane requires<br/>scheduled inspection.</p>
                  <span className="admin-activity-time">45 mins ago</span>
                </div>
              </div>

              {/* Activity 3 */}
              <div className="admin-activity-item">
                <div className="admin-activity-icon green">
                  <CheckCircle2 size={16} />
                </div>
                <div className="admin-activity-content">
                  <h4 className="admin-activity-title">Contract Approved</h4>
                  <p className="admin-activity-desc">Apex Logistics renewed 50<br/>units for 12 mo.</p>
                  <span className="admin-activity-time">2 hours ago</span>
                </div>
              </div>

            </div>
          </div>
        </div>

      </main>
    </div>
  );
}
