import React, { useState } from 'react';
import { User, Globe, Github, Twitter, Instagram, Facebook, Mail, Phone, MapPin, Edit3, Camera, Save, X } from 'lucide-react';

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState('personal');

  const tabs = [
    { id: 'personal', icon: User, label: 'Personal Information' },
    { id: 'payment', icon: MapPin, label: 'Payment' },
    { id: 'password', icon: Edit3, label: 'Change Password' },
    { id: 'settings', icon: Edit3, label: 'Settings' }
  ];

  const socialData = [
    { platform: 'twitter', color: '#1da1f2', icon: Twitter },
    { platform: 'facebook', color: '#1877f2', icon: Facebook },
    { platform: 'linkedin', color: '#0077b5', icon: Edit3 }
  ];

  return (
    <>
      <style jsx>{`
        .profile-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 32px;
          background-color: #f5f5f5;
          min-height: 100vh;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        .profile-header {
          background: linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%);
          border-radius: 16px;
          padding: 32px;
          margin-bottom: 32px;
          position: relative;
          overflow: hidden;
        }

        .profile-header::before {
          content: '';
          position: absolute;
          top: -50%;
          right: -20%;
          width: 200px;
          height: 200px;
          background: rgba(25, 118, 210, 0.1);
          border-radius: 50%;
        }

        .profile-completion {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 24px;
        }

        .completion-circle {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background: conic-gradient(#1976d2 0deg 108deg, #e0e0e0 108deg 360deg);
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        .completion-circle::before {
          content: '';
          width: 60px;
          height: 60px;
          background: white;
          border-radius: 50%;
          position: absolute;
        }

        .completion-text {
          position: relative;
          z-index: 1;
          font-weight: bold;
          color: #1976d2;
        }

        .profile-main {
          display: flex;
          align-items: center;
          gap: 24px;
          flex-wrap: wrap;
        }

        .profile-avatar {
          width: 120px;
          height: 120px;
          border-radius: 50%;
          background: #1976d2;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 48px;
          font-weight: bold;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
          position: relative;
        }

        .online-indicator {
          position: absolute;
          bottom: 8px;
          right: 8px;
          width: 16px;
          height: 16px;
          background: #4caf50;
          border: 3px solid white;
          border-radius: 50%;
        }

        .profile-info {
          flex: 1;
        }

        .profile-name {
          margin: 0 0 8px 0;
          font-size: 28px;
          font-weight: 600;
          color: #212529;
        }

        .profile-subtitle {
          color: #6c757d;
          font-size: 16px;
          margin-bottom: 16px;
        }

        .social-links {
          display: flex;
          gap: 12px;
        }

        .social-link {
          width: 40px;
          height: 40px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          text-decoration: none;
          transition: all 0.2s;
          cursor: pointer;
        }

        .social-link:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        }

        .social-twitter {
          background: #1da1f2;
        }

        .social-facebook {
          background: #1877f2;
        }

        .social-linkedin {
          background: #0077b5;
        }

        .stats-row {
          display: flex;
          gap: 32px;
          margin-top: 24px;
          flex-wrap: wrap;
        }

        .stat-item {
          text-align: center;
        }

        .stat-number {
          font-size: 24px;
          font-weight: bold;
          color: #212529;
        }

        .stat-label {
          font-size: 14px;
          color: #6c757d;
          margin-top: 4px;
        }

        .content-section {
          background: white;
          border-radius: 16px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
          margin-bottom: 24px;
        }

        .content-header {
          padding: 24px 24px 0 24px;
          border-bottom: 1px solid #f0f0f0;
          margin-bottom: 24px;
        }

        .tab-nav {
          display: flex;
          gap: 24px;
          flex-wrap: wrap;
        }

        .tab-link {
          padding: 12px 0;
          color: #6c757d;
          text-decoration: none;
          border-bottom: 2px solid transparent;
          transition: all 0.2s;
          font-weight: 500;
          display: flex;
          align-items: center;
          gap: 8px;
          cursor: pointer;
        }

        .tab-link.active {
          color: #1976d2;
          border-bottom-color: #1976d2;
        }

        .tab-link:hover {
          color: #1976d2;
        }

        .content-body {
          padding: 0 24px 24px 24px;
        }

        .form-section {
          margin-bottom: 32px;
        }

        .section-title {
          font-size: 16px;
          font-weight: 600;
          margin-bottom: 16px;
          color: #212529;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          margin-bottom: 16px;
        }

        .form-group {
          margin-bottom: 16px;
        }

        .form-label {
          display: block;
          margin-bottom: 6px;
          font-weight: 500;
          color: #212529;
          font-size: 14px;
        }

        .form-control {
          width: 100%;
          padding: 12px 16px;
          border: 1px solid #e0e0e0;
          border-radius: 8px;
          font-size: 14px;
          transition: border-color 0.2s;
          outline: none;
          box-sizing: border-box;
        }

        .form-control:focus {
          border-color: #1976d2;
          box-shadow: 0 0 0 3px rgba(25, 118, 210, 0.1);
        }

        .form-control-select {
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");
          background-position: right 12px center;
          background-repeat: no-repeat;
          background-size: 16px;
          padding-right: 40px;
          appearance: none;
        }

        .date-grid {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 8px;
        }

        .phone-grid {
          display: grid;
          grid-template-columns: 80px 1fr;
          gap: 8px;
        }

        .btn {
          padding: 12px 24px;
          border-radius: 8px;
          font-weight: 500;
          font-size: 14px;
          border: none;
          cursor: pointer;
          transition: all 0.2s;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }

        .btn-primary {
          background: #1976d2;
          color: white;
        }

        .btn-primary:hover {
          background: #1565c0;
          transform: translateY(-1px);
        }

        .btn-outline {
          background: transparent;
          border: 1px solid #e0e0e0;
          color: #212529;
        }

        .btn-outline:hover {
          background: #f8f9fa;
        }

        .empty-state {
          padding: 40px;
          text-align: center;
          color: #6c757d;
        }

        .empty-state-icon {
          margin-bottom: 16px;
          opacity: 0.5;
        }

        .empty-state h4 {
          margin-bottom: 8px;
          color: #212529;
        }

        .button-group {
          margin-top: 32px;
        }

        .ml-12 {
          margin-left: 12px;
        }

        @media (max-width: 768px) {
          .profile-container {
            padding: 16px;
          }

          .form-row {
            grid-template-columns: 1fr;
          }

          .profile-main {
            flex-direction: column;
            text-align: center;
          }

          .stats-row {
            justify-content: center;
            gap: 16px;
          }

          .tab-nav {
            gap: 12px;
          }

          .date-grid {
            grid-template-columns: 1fr;
            gap: 8px;
          }

          .phone-grid {
            grid-template-columns: 1fr;
            gap: 8px;
          }
        }
      `}</style>

      <div className="profile-container">
        {/* Profile Header */}
        <div className="profile-header">
          <div className="profile-completion">
            <div className="completion-circle">
              <div className="completion-text">30%</div>
            </div>
            <div>
              <h3 style={{ margin: '0 0 8px 0', color: '#212529' }}>Edit Your Profile</h3>
              <p style={{ margin: 0, color: '#6c757d' }}>Complete your profile to unlock all features</p>
            </div>
          </div>

          <div className="profile-main">
            <div className="profile-avatar">
              SB
              <div className="online-indicator"></div>
            </div>
            <div className="profile-info">
              <h2 className="profile-name">Stebin Ben</h2>
              <div className="profile-subtitle">Full Stack Developer</div>
              <div className="social-links">
                {socialData.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <div
                      key={social.platform}
                      className={`social-link social-${social.platform}`}
                    >
                      <IconComponent size={18} />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="stats-row">
            <div className="stat-item">
              <div className="stat-number">86</div>
              <div className="stat-label">Post</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">40</div>
              <div className="stat-label">Project</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">4.5K</div>
              <div className="stat-label">Members</div>
            </div>
          </div>
        </div>

        {/* Profile Content */}
        <div className="content-section">
          <div className="content-header">
            <div className="tab-nav">
              {tabs.map((tab) => {
                const IconComponent = tab.icon;
                return (
                  <div
                    key={tab.id}
                    className={`tab-link ${activeTab === tab.id ? 'active' : ''}`}
                    onClick={() => setActiveTab(tab.id)}
                  >
                    <IconComponent size={16} />
                    {tab.label}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="content-body">
            {activeTab === 'personal' && (
              <>
                {/* Personal Information Section */}
                <div className="form-section">
                  <div className="section-title">Personal Information</div>

                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">First Name</label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue="Stebin"
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Last Name</label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue="Ben"
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">Email Address</label>
                      <input
                        type="email"
                        className="form-control"
                        defaultValue="stebin.ben@gmail.com"
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Date of Birth (+18)</label>
                      <div className="date-grid">
                        <select className="form-control form-control-select">
                          <option>March</option>
                          <option>January</option>
                          <option>February</option>
                          <option>April</option>
                        </select>
                        <select className="form-control form-control-select">
                          <option>10</option>
                          <option>15</option>
                          <option>20</option>
                          <option>25</option>
                        </select>
                        <input type="text" className="form-control" defaultValue="1993" />
                      </div>
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">Phone Number</label>
                      <div className="phone-grid">
                        <select className="form-control form-control-select">
                          <option>+91</option>
                          <option>+1</option>
                          <option>+44</option>
                        </select>
                        <input type="tel" className="form-control" defaultValue="9652364852" />
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="form-label">Designation</label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue="Full Stack Developer"
                      />
                    </div>
                  </div>
                </div>

                {/* Address Section */}
                <div className="form-section">
                  <div className="section-title">Address</div>

                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">Address 01</label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue="3801 Chalk Butte Rd, Cut Bank, MT 59427, United States"
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Address 02</label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue="301 Chalk Butte Rd, Cut Bank, NY 96572, New York"
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">Country</label>
                      <select className="form-control form-control-select">
                        <option>United States</option>
                        <option>Canada</option>
                        <option>United Kingdom</option>
                        <option>India</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label className="form-label">State</label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue="California"
                      />
                    </div>
                  </div>

                  <div className="button-group">
                    <button className="btn btn-primary">
                      <Save size={16} />
                      Update Profile
                    </button>
                    <button className="btn btn-outline ml-12">
                      Cancel
                    </button>
                  </div>
                </div>
              </>
            )}

            {activeTab === 'payment' && (
              <div className="empty-state">
                <div className="empty-state-icon">
                  <MapPin size={48} />
                </div>
                <h4>Payment Settings</h4>
                <p>Manage your payment methods and billing information.</p>
              </div>
            )}

            {activeTab === 'password' && (
              <div className="empty-state">
                <div className="empty-state-icon">
                  <Edit3 size={48} />
                </div>
                <h4>Change Password</h4>
                <p>Update your password and security settings.</p>
              </div>
            )}

            {activeTab === 'settings' && (
              <div className="empty-state">
                <div className="empty-state-icon">
                  <Edit3 size={48} />
                </div>
                <h4>Account Settings</h4>
                <p>Manage your account preferences and privacy settings.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
