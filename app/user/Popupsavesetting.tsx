"use client";
import React from "react";
import { Check, Clock, ShieldCheck } from "lucide-react";

interface PopupSaveSettingProps {
  onClose: () => void;
}

export default function PopupSaveSetting({ onClose }: PopupSaveSettingProps) {
  return (
    <div className="user-popup-overlay">
      <div className="user-popup-card">
        
        <div className="user-popup-icon-container">
          <Check className="user-popup-icon" size={40} strokeWidth={3} />
        </div>

        <h2 className="user-popup-title">Profile Successfully Updated</h2>
        <p className="user-popup-desc">
          Your corporate profile and security settings have been saved to the centralized terminal.
        </p>

        <div className="user-popup-stats">
          <div className="user-popup-stat">
            <Clock className="user-popup-stat-icon" size={16} />
            <div className="user-popup-stat-info">
              <span className="user-popup-stat-label">LAST UPDATES</span>
              <span className="user-popup-stat-value">Oct 26, 2023</span>
            </div>
          </div>
          <div className="user-popup-stat">
            <ShieldCheck className="user-popup-stat-icon red" size={18} />
            <div className="user-popup-stat-info">
              <span className="user-popup-stat-label">STATUS</span>
              <span className="user-popup-stat-value">Verified</span>
            </div>
          </div>
        </div>

        <button className="user-popup-btn" onClick={onClose}>
          RETURN TO DASHBOARD
        </button>

      </div>
    </div>
  );
}
