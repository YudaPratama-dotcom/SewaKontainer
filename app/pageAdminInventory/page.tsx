"use client";
import React, { useState } from "react";
import { AdminSidebar } from "@/components/organisms/AdminSidebar";
import { Search, Filter, ArrowUpDown, AlertTriangle, X, MoreVertical } from "lucide-react";

export default function AdminInventoryPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState("ALL"); // ALL, AVAILABLE, RENTED, MAINTENANCE

  const mockInventory = [
    {
      id: "UNIT-842",
      type: "Standard Dry Van",
      size: "40ft",
      location: "Yard A, Sec 4",
      condition: "Good",
      status: "AVAILABLE",
      img: "https://images.unsplash.com/photo-1586528116311-ad8ed745124c?auto=format&fit=crop&q=80&w=800",
      specLabel: "Condition",
      specValue: "Good"
    },
    {
      id: "UNIT-155",
      type: "High Cube",
      size: "40ft HC",
      location: "Off-site (Client)",
      condition: "Rented",
      status: "RENTED",
      img: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&q=80&w=800",
      specLabel: "Return Due",
      specValue: "Oct 12, 2023"
    },
    {
      id: "UNIT-492",
      type: "Open Top",
      size: "20ft",
      location: "Repair Bay 2",
      condition: "Maintenance",
      status: "MAINTENANCE",
      img: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80&w=800",
      specLabel: "Issue",
      specValue: "Rust Inspection",
      grayscale: true
    }
  ];

  const filteredInventory = mockInventory.filter(item => {
    const matchesSearch = item.id.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.type.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = filterStatus === "ALL" || item.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

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
              placeholder="Search inventory by ID or type..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Header Section */}
        <div className="admin-header">
          <div>
            <h1 className="admin-title">Inventory</h1>
            <p className="admin-desc">Manage container fleet status and technical specifications.</p>
          </div>
          <div className="admin-btn-group">
            <select 
              className="admin-btn" 
              style={{appearance: 'none', backgroundColor: 'transparent', border: 'none', outline: 'none', cursor: 'pointer', fontFamily: 'inherit', fontSize: 'inherit', color: 'inherit'}}
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
            >
              <option value="ALL">All Status</option>
              <option value="AVAILABLE">Available</option>
              <option value="RENTED">Rented</option>
              <option value="MAINTENANCE">Maintenance</option>
            </select>
          </div>
        </div>

        {/* Alert Banner */}
        <div className="admin-alert">
          <div className="admin-alert-content">
            <AlertTriangle className="admin-alert-icon" size={20} />
            <div>
              <h4 className="admin-alert-title">Maintenance Due</h4>
              <p className="admin-alert-desc">3 units require immediate inspection according to safety protocols.</p>
              <div className="admin-alert-actions">
                <button className="admin-alert-btn">
                  <span style={{fontWeight: '700', marginRight: '4px'}}>UNIT-492</span> Rust inspection
                </button>
                <button className="admin-alert-btn">
                  <span style={{fontWeight: '700', marginRight: '4px'}}>UNIT-108</span> Door seal check
                </button>
              </div>
            </div>
          </div>
          <button className="admin-alert-close">
            <X size={20} />
          </button>
        </div>

        {/* Inventory Grid */}
        <div className="admin-inventory-grid">
          
          {filteredInventory.length === 0 ? (
            <div style={{gridColumn: '1 / -1', padding: '48px', textAlign: 'center', color: '#64748b'}}>
              No containers found matching your criteria.
            </div>
          ) : (
            filteredInventory.map((item) => (
              <div className="admin-inventory-card" key={item.id}>
                <div className="admin-inventory-img">
                  <div className={`admin-inventory-badge ${item.status.toLowerCase()}`}>{item.status}</div>
                  <img 
                    src={item.img} 
                    alt={item.type} 
                    style={item.grayscale ? {filter: 'grayscale(100%)', opacity: 0.8} : {}} 
                  />
                </div>
                <div className="admin-inventory-info">
                  <div className="admin-inventory-header">
                    <div>
                      <h3 className="admin-inventory-title">{item.id}</h3>
                      <p className="admin-inventory-subtitle">{item.type}</p>
                    </div>
                    <button className="admin-inventory-more">
                      <MoreVertical size={20} />
                    </button>
                  </div>
                  <div className="admin-inventory-specs">
                    <div className="admin-inventory-spec">
                      <span className="admin-inventory-spec-label">Size</span>
                      <span className="admin-inventory-spec-value">{item.size}</span>
                    </div>
                    <div className="admin-inventory-spec">
                      <span className="admin-inventory-spec-label">Location</span>
                      <span className="admin-inventory-spec-value">{item.location}</span>
                    </div>
                    <div className="admin-inventory-spec">
                      <span className="admin-inventory-spec-label">{item.specLabel}</span>
                      <span className={`admin-inventory-spec-value ${item.status === 'MAINTENANCE' ? 'red' : ''}`}>{item.specValue}</span>
                    </div>
                  </div>
                  <button className="admin-inventory-action">
                    View Details
                  </button>
                </div>
              </div>
            ))
          )}

        </div>
      </main>
    </div>
  );
}
