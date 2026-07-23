"use client";

type ComingSoonProps = {
  message?: string;
};

export default function ComingSoon({
  message = "This page is currently being prepared. Check back soon for helpful resources and updates.",
}: ComingSoonProps) {
  return (
    <section className="coming-soon page-section">
      <div className="container">
        <div className="coming-soon-inner reveal-up active">
          <h1 className="coming-soon-title">Coming Soon</h1>
          <p className="coming-soon-message">{message}</p>
          <div className="coming-soon-actions">
            <a href="/" className="btn btn-accent">Back to Home</a>
            <a href="/contact" className="btn btn-gold">Contact Us</a>
          </div>
        </div>
      </div>
    </section>
  );
}
