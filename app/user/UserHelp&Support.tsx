"use client";
import React, { useState } from "react";
import { UserSidebar } from "@/components/organisms/UserSidebar";
import { Search, Plus, Minus } from "lucide-react";

export default function UserHelpSupport() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleTicketSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Ticket has been submitted successfully to our support team!");
    // Reset form would normally happen here
  };

  const faqs = [
    {
      question: "How do I extend an active rental contract?",
      answer: "You can extend an active rental contract from the 'Operations Control' panel on your dashboard, or navigate to the details page of the specific container and select 'Extend Rental'."
    },
    {
      question: "What are the load-bearing specifications for Class-A units?",
      answer: "Class-A units are rated for a maximum payload of 62,000 lbs (28,120 kg) and floor load of 16 lbs per square inch. Please consult the technical datasheet for detailed stress points."
    },
    {
      question: "How do I report structural damage upon delivery?",
      answer: "Immediately document the damage with photographs and use the 'Report Issue' function on your dashboard within 24 hours of delivery. A field inspector will be dispatched."
    }
  ];

  return (
    <div className="user-layout">
      <UserSidebar />

      <main className="user-main">
        {/* Red Hero Section */}
        <div className="user-help-hero">
          <h1 className="user-help-title">Help & Support</h1>
          <p className="user-help-desc">
            Technical documentation, operational FAQs, and direct lines to our logistics specialists.
          </p>
        </div>

        <div className="user-content">
          {/* Search Box overlapping hero */}
          <div className="user-help-search">
            <div className="user-help-search-input">
              <Search size={20} />
              <input type="text" placeholder="Search operational guidelines, technical specs, or billing..." />
            </div>
            <button className="user-help-search-btn">Search</button>
          </div>

          <div className="user-help-grid">
            {/* FAQ Section */}
            <div>
              <h2 className="user-faq-title">Frequently Asked Questions</h2>
              <div className="user-faq-list">
                
                {faqs.map((faq, index) => (
                  <div key={index} style={{marginBottom: '12px'}}>
                    <div 
                      className="user-faq-item" 
                      onClick={() => toggleFaq(index)}
                      style={{cursor: 'pointer', marginBottom: openFaq === index ? '0' : '0', borderBottomLeftRadius: openFaq === index ? '0' : '8px', borderBottomRightRadius: openFaq === index ? '0' : '8px'}}
                    >
                      <span className="user-faq-question">{faq.question}</span>
                      {openFaq === index ? <Minus className="user-faq-icon" size={20} /> : <Plus className="user-faq-icon" size={20} />}
                    </div>
                    {openFaq === index && (
                      <div style={{backgroundColor: '#ffffff', padding: '16px', border: '1px solid #e2e8f0', borderTop: 'none', borderBottomLeftRadius: '8px', borderBottomRightRadius: '8px', color: '#64748b', fontSize: '14px', lineHeight: '1.6'}}>
                        {faq.answer}
                      </div>
                    )}
                  </div>
                ))}

              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="user-contact-card">
                <h2 className="user-contact-title">Contact Support</h2>
                
                <form className="user-contact-form" onSubmit={handleTicketSubmit}>
                  <div className="user-contact-group">
                    <label className="user-contact-label">SUBJECT</label>
                    <select className="user-contact-select">
                      <option>Technical Issue</option>
                      <option>Billing Inquiry</option>
                      <option>Contract Extension</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div className="user-contact-group">
                    <label className="user-contact-label">MESSAGE</label>
                    <textarea 
                      className="user-contact-textarea" 
                      placeholder="Detail your issue..."
                      required
                    ></textarea>
                  </div>

                  <button type="submit" className="user-btn-submit">Submit Ticket</button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}
