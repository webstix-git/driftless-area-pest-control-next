"use client";

import { CONTACT } from "@/lib/contact";

export default function ServiceModal() {
  return (
    <div className="modal-backdrop" id="serviceModal" aria-hidden="true" role="dialog" aria-labelledby="modalTitle">
      <div className="modal-container">
        <button className="modal-close" id="closeModalBtn" aria-label="Close request service dialog">
          <svg className="icon" style={{width: '1.5rem', height: '1.5rem'}} viewBox="0 0 24 24"><path d="M18 6L6 18M6 6l12 12"/></svg>
        </button>

        <h2 className="modal-title" id="modalTitle">Request a Free Inspection</h2>
        <p className="modal-subtitle">
          Tell us about your facility or agricultural site. Prefer to reach us directly? Call{" "}
          <a href={CONTACT.phoneHref}>{CONTACT.phoneDisplay}</a> or email{" "}
          <a href={CONTACT.emailHref}>{CONTACT.emailDisplay}</a>.
        </p>

        <form id="requestForm">
          <div className="form-grid">
            <div className="form-group">
              <label className="form-label" htmlFor="fullName">Full Name *</label>
              <input type="text" id="fullName" className="form-control" placeholder="John Miller" required />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="phoneNum">Phone Number *</label>
              <input type="tel" id="phoneNum" className="form-control" placeholder="608-555-0199" required />
            </div>
          </div>

          <div className="form-grid">
            <div className="form-group">
              <label className="form-label" htmlFor="emailAddr">Email Address *</label>
              <input type="email" id="emailAddr" className="form-control" placeholder="john@farmdomain.com" required />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="facilityType">Facility / Operation Type</label>
              <select id="facilityType" className="form-control">
                <option value="dairy">Dairy Farm</option>
                <option value="hog">Hog / Swine Unit</option>
                <option value="poultry">Poultry Operation</option>
                <option value="grain">Grain Bin / Feed Mill</option>
                <option value="food">Food Processing Plant</option>
                <option value="commercial">Commercial Warehouse</option>
                <option value="other">Other / Retail</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="serviceReq">Service Needed</label>
            <select id="serviceReq" className="form-control">
              <option value="ag">Agricultural Pest Management</option>
              <option value="commercial">Commercial Facility Program</option>
              <option value="rodent">Rodent Exclusion & Control</option>
              <option value="tech">24/7 Remote Monitoring</option>
              <option value="wildlife">Humane Wildlife Removal</option>
              <option value="weed">Perimeter Weed Control</option>
            </select>
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="message">Facility Details & Location</label>
            <textarea id="message" className="form-control" rows={3} placeholder="Describe your property layout, urgency, or specific concerns..."></textarea>
          </div>

          <button type="submit" className="btn btn-accent" style={{width: '100%', padding: '1rem'}}>Submit Service Request</button>
        </form>
      </div>
    </div>
  );
}
