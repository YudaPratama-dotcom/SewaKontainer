"use client";
import React, { useState } from "react";
import { UserSidebar } from "@/components/organisms/UserSidebar";
import { Wallet, Clock, Box, Search, HelpCircle, CheckCircle, FileText } from "lucide-react";

export default function UserPaymentHistory() {
  const [searchQuery, setSearchQuery] = useState("");

  const transactions = [
    {
      id: "INV-2023-1042",
      title: "Rental Fee - October (2 Units)",
      date: "Oct 15, 2023",
      amount: "IDR 8,500,000",
      status: "PENDING"
    },
    {
      id: "INV-2023-0918",
      title: "Rental Fee - September (1 Unit)",
      date: "Sep 01, 2023",
      amount: "IDR 4,250,000",
      status: "SUCCESS"
    },
    {
      id: "INV-2023-0805",
      title: "Initial Deposit - Heavy Duty Unit",
      date: "Aug 12, 2023",
      amount: "IDR 15,000,000",
      status: "SUCCESS"
    }
  ];

  const filteredTransactions = transactions.filter(tx => 
    tx.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    tx.id.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="user-layout">
      <UserSidebar />

      <main className="user-main">
        {/* Topbar Search */}
        <div className="user-topbar">
          <div className="user-search">
            <Search size={16} />
            <input 
              type="text" 
              placeholder="Search invoices by ID or title..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="user-profile-widget">
            <HelpCircle className="user-profile-icon" size={20} />
            <div className="user-avatar">
              <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="User" />
            </div>
          </div>
        </div>

        <div className="user-content">
          <div className="user-pay-header">
            <h1 className="user-pay-title">Payment History</h1>
            <p className="user-page-subtitle">
              Review your transaction records, manage pending invoices, and download receipts for industrial equipment rentals.
            </p>
          </div>

          {/* Stat Cards */}
          <div className="user-pay-cards">
            {/* Card 1 */}
            <div className="user-pay-card">
              <div className="user-pay-card-header">
                <div className="user-pay-card-icon">
                  <Wallet size={20} />
                </div>
                <span className="user-pay-card-title">TOTAL SPENDING</span>
              </div>
              <div className="user-pay-card-value">IDR 45,200,000</div>
              <div className="user-pay-card-desc">Lifetime rental fees</div>
            </div>

            {/* Card 2 */}
            <div className="user-pay-card active">
              <div className="user-pay-card-header">
                <div className="user-pay-card-icon red">
                  <Clock size={20} />
                </div>
                <span className="user-pay-card-title">PENDING</span>
              </div>
              <div className="user-pay-card-value">IDR 8,500,000</div>
              <div className="user-pay-card-desc red">2 invoices require attention</div>
            </div>

            {/* Card 3 */}
            <div className="user-pay-card">
              <div className="user-pay-card-header">
                <div className="user-pay-card-icon">
                  <Box size={20} />
                </div>
                <span className="user-pay-card-title">ACTIVE RENTALS</span>
              </div>
              <div className="user-pay-card-value">4 Units</div>
              <div className="user-pay-card-desc">Currently deployed containers</div>
            </div>
          </div>

          {/* Transactions */}
          <div className="user-transaction-list">
            <div className="user-section-header">
              <h2 className="user-section-title" style={{fontSize: '16px', letterSpacing: '0'}}>Recent Transactions</h2>
              <a href="#" className="user-link-red">VIEW ALL</a>
            </div>

            <div>
              {filteredTransactions.length === 0 ? (
                <div style={{padding: '32px', textAlign: 'center', color: '#64748b'}}>
                  No invoices found matching "{searchQuery}"
                </div>
              ) : (
                filteredTransactions.map(tx => (
                  <div className="user-transaction-item" key={tx.id}>
                    <div className="user-transaction-left">
                      <div className={`user-transaction-icon ${tx.status === 'PENDING' ? 'red' : ''}`}>
                        {tx.status === 'PENDING' ? <FileText size={20} /> : <CheckCircle size={20} />}
                      </div>
                      <div className="user-transaction-info">
                        <span className="user-transaction-title">{tx.title}</span>
                        <span className="user-transaction-date">{tx.date} • {tx.id}</span>
                      </div>
                    </div>
                    <div className="user-transaction-right">
                      <span className="user-transaction-amount">{tx.amount}</span>
                      <span className={`user-transaction-status ${tx.status.toLowerCase()}`}>{tx.status}</span>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
