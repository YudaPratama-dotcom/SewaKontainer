"use client";
import React from "react";
import { AdminSidebar } from "@/components/organisms/AdminSidebar";
import { Search, Filter, Plus, Download, ChevronDown, MoreHorizontal } from "lucide-react";

export default function AdminUserManagementPage() {
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

        {/* Header Section */}
        <div className="admin-header">
          <div>
            <h1 className="admin-title">Enterprise Users</h1>
            <p className="admin-desc">Manage platform access, roles, and enterprise contacts.</p>
          </div>
          <div className="admin-btn-group">
            <button className="admin-btn admin-btn-primary">
              <Plus size={16} />
              Add New User
            </button>
          </div>
        </div>

        {/* Filters and Table Container */}
        <div className="admin-card admin-card-flush">
          
          {/* Filters Bar */}
          <div className="admin-filters-bar">
            <div className="admin-filters-left">
              <div className="admin-filter-input">
                <Search size={16} />
                <input 
                  type="text" 
                  placeholder="Filter users by name or ID..." 
                />
              </div>
              
              <div className="admin-filter-select">
                <span>All Companies</span>
                <ChevronDown size={14} />
              </div>
              
              <div className="admin-filter-select">
                <span>All Statuses</span>
                <ChevronDown size={14} />
              </div>
            </div>
            
            <div className="admin-filters-right">
              <button className="admin-icon-btn">
                <Filter size={18} />
              </button>
              <button className="admin-icon-btn">
                <Download size={18} />
              </button>
            </div>
          </div>

          {/* Table */}
          <div className="admin-table-wrapper">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>User Details</th>
                  <th>Company & Role</th>
                  <th>Contact</th>
                  <th>Join Date</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {/* Row 1 */}
                <tr>
                  <td>
                    <div className="admin-table-user">
                      <div className="admin-table-avatar">MJ</div>
                      <div>
                        <p className="admin-table-text-main">Marcus Johnson</p>
                        <p className="admin-table-text-sub">ID: TTN-8472-A</p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <p className="admin-table-text-main">Global Freight Co.</p>
                    <p className="admin-table-text-sub">Logistics Director</p>
                  </td>
                  <td>
                    <p className="admin-table-text-main">m.johnson@globalfreight.com</p>
                    <p className="admin-table-text-sub">+1 (555) 019-2834</p>
                  </td>
                  <td>
                    <p className="admin-table-text-main">Oct 12, 2023</p>
                  </td>
                  <td>
                    <span className="admin-status active">
                      <span className="admin-status-dot"></span>
                      Active
                    </span>
                  </td>
                  <td>
                    <button className="admin-icon-btn">
                      <MoreHorizontal size={18} />
                    </button>
                  </td>
                </tr>

                {/* Row 2 */}
                <tr>
                  <td>
                    <div className="admin-table-user">
                      <div className="admin-table-avatar">SL</div>
                      <div>
                        <p className="admin-table-text-main">Sarah Lin</p>
                        <p className="admin-table-text-sub">ID: TTN-9102-B</p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <p className="admin-table-text-main">Pacific Logistics</p>
                    <p className="admin-table-text-sub">Operations Manager</p>
                  </td>
                  <td>
                    <p className="admin-table-text-main">s.lin@paclogistics.net</p>
                    <p className="admin-table-text-sub">+1 (555) 847-3920</p>
                  </td>
                  <td>
                    <p className="admin-table-text-main">Nov 04, 2023</p>
                  </td>
                  <td>
                    <span className="admin-status active">
                      <span className="admin-status-dot"></span>
                      Active
                    </span>
                  </td>
                  <td>
                    <button className="admin-icon-btn">
                      <MoreHorizontal size={18} />
                    </button>
                  </td>
                </tr>

                {/* Row 3 */}
                <tr>
                  <td>
                    <div className="admin-table-user">
                      <div className="admin-table-avatar">RT</div>
                      <div>
                        <p className="admin-table-text-main">Robert Torres</p>
                        <p className="admin-table-text-sub">ID: TTN-7731-C</p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <p className="admin-table-text-main">Independent Contractor</p>
                    <p className="admin-table-text-sub">Fleet Operator</p>
                  </td>
                  <td>
                    <p className="admin-table-text-main">r.torres@freightmail.com</p>
                    <p className="admin-table-text-sub">+1 (555) 293-1102</p>
                  </td>
                  <td>
                    <p className="admin-table-text-main">Aug 22, 2023</p>
                  </td>
                  <td>
                    <span className="admin-status suspended">
                      <span className="admin-status-dot"></span>
                      Suspended
                    </span>
                  </td>
                  <td>
                    <button className="admin-icon-btn">
                      <MoreHorizontal size={18} />
                    </button>
                  </td>
                </tr>

                {/* Row 4 */}
                <tr>
                  <td>
                    <div className="admin-table-user">
                      <div className="admin-table-avatar">EK</div>
                      <div>
                        <p className="admin-table-text-main">Elena Kravitz</p>
                        <p className="admin-table-text-sub">ID: TTN-4490-D</p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <p className="admin-table-text-main">Nordic Shipping Systems</p>
                    <p className="admin-table-text-sub">Procurement Lead</p>
                  </td>
                  <td>
                    <p className="admin-table-text-main">e.kravitz@nordicship.eu</p>
                    <p className="admin-table-text-sub">+44 20 7946 0958</p>
                  </td>
                  <td>
                    <p className="admin-table-text-main">Jan 15, 2024</p>
                  </td>
                  <td>
                    <span className="admin-status active">
                      <span className="admin-status-dot"></span>
                      Active
                    </span>
                  </td>
                  <td>
                    <button className="admin-icon-btn">
                      <MoreHorizontal size={18} />
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="admin-pagination">
            <div className="admin-pagination-text">
              Showing <span>1</span> to <span>4</span> of <span>128</span> users
            </div>
            <div className="admin-pagination-controls">
              <button className="admin-page-nav">Previous</button>
              <button className="admin-page-btn active">1</button>
              <button className="admin-page-btn">2</button>
              <button className="admin-page-btn">3</button>
              <span className="admin-page-dots">...</span>
              <button className="admin-page-nav">Next</button>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
