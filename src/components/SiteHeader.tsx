"use client";

import { CONTACT } from "@/lib/contact";

export default function SiteHeader() {
  return (
    <>
      <header className="site-header" id="siteHeader">
        <div className="container header-inner">
          <a href="/" className="brand-logo" aria-label="Driftless Area Pest Control Home">
            <div className="logo-badge">D</div>
            <div className="logo-text-group">
              <span className="logo-title">Driftless Area</span>
              <span className="logo-subtitle">Pest Control</span>
            </div>
          </a>

          <nav aria-label="Main Navigation">
            <ul className="nav-menu">
              <li className="nav-item"><a href="/" className="nav-link">Home</a></li>
              <li className="nav-item">
                <a href="/about" className="nav-link">
                  About
                  <svg className="icon" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg>
                </a>
                <ul className="dropdown-menu" aria-label="About Submenu">
                  <li><a href="/about" className="dropdown-link">About Us</a></li>
                  <li><a href="/team" className="dropdown-link">Our Team</a></li>
                  <li><a href="/service-area" className="dropdown-link">Service Area</a></li>
                  <li><a href="/case-studies" className="dropdown-link">Case Studies</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a href="/services" className="nav-link">
                  Services
                  <svg className="icon" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg>
                </a>
                <ul className="dropdown-menu" aria-label="Services Submenu">
                  <li><a href="/services" className="dropdown-link">Services Overview</a></li>
                  <li><a href="/commercial-pest-control" className="dropdown-link">Commercial Pest Control</a></li>
                  <li><a href="/agricultural-pest-control" className="dropdown-link">Agricultural Pest Control</a></li>
                  <li><a href="/rodent-control" className="dropdown-link">Rodent Control & Exclusion</a></li>
                  <li><a href="/wildlife-removal" className="dropdown-link">Wildlife Removal</a></li>
                  <li><a href="/weed-control" className="dropdown-link">Perimeter Weed Control</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a href="/resources" className="nav-link">
                  Resources
                  <svg className="icon" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg>
                </a>
                <ul className="dropdown-menu" aria-label="Resources Submenu">
                  <li><a href="/resources" className="dropdown-link">Resources</a></li>
                  <li><a href="/pest-library" className="dropdown-link">Pest Library</a></li>
                  <li><a href="/cockroach-guide" className="dropdown-link">Cockroach Guide</a></li>
                  <li><a href="/homeowner-faq" className="dropdown-link">Homeowner FAQ</a></li>
                  <li><a href="/blog" className="dropdown-link">Blog</a></li>
                </ul>
              </li>
              <li className="nav-item"><a href="/contact" className="nav-link">Contact Us</a></li>
            </ul>
          </nav>

          <div className="header-actions">
            <a href={CONTACT.phoneHref} className="phone-link">
              <svg className="icon" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              {CONTACT.phoneDisplay}
            </a>
            <a href="/contact" className="btn btn-accent">Get a Free Quote</a>
            <button className="mobile-toggle" id="mobileToggle" aria-label="Toggle navigation menu" aria-expanded="false">
              <span></span><span></span><span></span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Off-Canvas Drawer */}
      <div className="drawer-overlay" id="drawerOverlay"></div>
      <div className="mobile-drawer" id="mobileDrawer">
        <div>
          <a href="/" className="brand-logo" style={{marginBottom: '2rem'}}>
            <div className="logo-badge">D</div>
            <div className="logo-text-group">
              <span className="logo-title">Driftless Area</span>
              <span className="logo-subtitle">Pest Control</span>
            </div>
          </a>
          <ul className="mobile-nav-list">
            <li><a href="/" className="mobile-nav-link close-drawer">Home</a></li>
            <li><a href="/about" className="mobile-nav-link close-drawer">About Us</a></li>
            <li><a href="/team" className="mobile-nav-link close-drawer" style={{paddingLeft: '1.5rem', fontSize: '0.9rem'}}>Our Team</a></li>
            <li><a href="/service-area" className="mobile-nav-link close-drawer" style={{paddingLeft: '1.5rem', fontSize: '0.9rem'}}>Service Area</a></li>
            <li><a href="/case-studies" className="mobile-nav-link close-drawer" style={{paddingLeft: '1.5rem', fontSize: '0.9rem'}}>Case Studies</a></li>
            <li><a href="/services" className="mobile-nav-link close-drawer">Services Overview</a></li>
            <li><a href="/commercial-pest-control" className="mobile-nav-link close-drawer" style={{paddingLeft: '1.5rem', fontSize: '0.9rem'}}>Commercial Pest Control</a></li>
            <li><a href="/agricultural-pest-control" className="mobile-nav-link close-drawer" style={{paddingLeft: '1.5rem', fontSize: '0.9rem'}}>Agricultural Pest Control</a></li>
            <li><a href="/rodent-control" className="mobile-nav-link close-drawer" style={{paddingLeft: '1.5rem', fontSize: '0.9rem'}}>Rodent Control & Exclusion</a></li>
            <li><a href="/wildlife-removal" className="mobile-nav-link close-drawer" style={{paddingLeft: '1.5rem', fontSize: '0.9rem'}}>Wildlife Removal</a></li>
            <li><a href="/weed-control" className="mobile-nav-link close-drawer" style={{paddingLeft: '1.5rem', fontSize: '0.9rem'}}>Perimeter Weed Control</a></li>
            <li><a href="/resources" className="mobile-nav-link close-drawer">Resources</a></li>
            <li><a href="/pest-library" className="mobile-nav-link close-drawer" style={{paddingLeft: '1.5rem', fontSize: '0.9rem'}}>Pest Library</a></li>
            <li><a href="/cockroach-guide" className="mobile-nav-link close-drawer" style={{paddingLeft: '1.5rem', fontSize: '0.9rem'}}>Cockroach Guide</a></li>
            <li><a href="/homeowner-faq" className="mobile-nav-link close-drawer" style={{paddingLeft: '1.5rem', fontSize: '0.9rem'}}>Homeowner FAQ</a></li>
            <li><a href="/blog" className="mobile-nav-link close-drawer" style={{paddingLeft: '1.5rem', fontSize: '0.9rem'}}>Blog</a></li>
            <li><a href="/contact" className="mobile-nav-link close-drawer">Contact Us</a></li>
          </ul>
        </div>
        <div style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
          <a href={CONTACT.phoneHref} className="btn btn-gold" style={{width: '100%'}}>
            <svg className="icon" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            Call {CONTACT.phoneDisplay}
          </a>
          <a href="/contact" className="btn btn-accent close-drawer" style={{width: '100%'}}>Get a Free Quote</a>
        </div>
      </div>
    </>
  );
}
