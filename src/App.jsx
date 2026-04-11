const features = [
  {
    title: "Modern Design",
    description: "Clean layouts and engaging visuals that help your brand stand out.",
  },
  {
    title: "Fast Performance",
    description: "Optimized pages that load quickly and feel smooth on every device.",
  },
  {
    title: "Mobile Ready",
    description: "Responsive sections that adapt beautifully across desktop and mobile.",
  },
];

function App() {
  return (
    <>
      <style>{`
        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
          background: #f5f7fb;
          color: #1f2937;
        }

        #root {
          width: 100%;
          max-width: none;
          margin: 0;
          border: none;
          min-height: 100vh;
        }

        .page {
          min-height: 100vh;
        }

        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 48px;
          background: #ffffff;
          box-shadow: 0 8px 24px rgba(15, 23, 42, 0.06);
          position: sticky;
          top: 0;
          z-index: 10;
        }

        .logo {
          font-size: 24px;
          font-weight: 700;
          color: #0f172a;
        }

        .nav-links {
          display: flex;
          gap: 24px;
          align-items: center;
        }

        .nav-links a {
          text-decoration: none;
          color: #475569;
          font-size: 15px;
          font-weight: 500;
        }

        .nav-button,
        .hero-button {
          border: none;
          border-radius: 999px;
          background: #2563eb;
          color: #ffffff;
          padding: 12px 20px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
        }

        .hero {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 32px;
          align-items: center;
          padding: 72px 48px;
          background: linear-gradient(135deg, #eff6ff, #ffffff);
        }

        .hero-text h1 {
          margin: 0 0 18px;
          font-size: 52px;
          line-height: 1.1;
          color: #0f172a;
        }

        .hero-text p {
          margin: 0 0 28px;
          font-size: 18px;
          line-height: 1.7;
          color: #475569;
          max-width: 560px;
        }

        .hero-button.secondary {
          background: #e2e8f0;
          color: #0f172a;
        }

        .hero-actions {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
        }

        .hero-visual {
          background: linear-gradient(135deg, #2563eb, #38bdf8);
          border-radius: 28px;
          padding: 32px;
          color: #ffffff;
          box-shadow: 0 24px 50px rgba(37, 99, 235, 0.25);
        }

        .hero-visual h3 {
          margin: 0 0 16px;
          font-size: 24px;
        }

        .hero-visual p {
          margin: 0 0 24px;
          line-height: 1.7;
          color: rgba(255, 255, 255, 0.88);
        }

        .hero-card {
          background: rgba(255, 255, 255, 0.16);
          border: 1px solid rgba(255, 255, 255, 0.24);
          border-radius: 20px;
          padding: 18px;
          margin-top: 14px;
        }

        .hero-card strong {
          display: block;
          font-size: 28px;
          margin-bottom: 6px;
        }

        .section {
          padding: 72px 48px;
        }

        .section-heading {
          text-align: center;
          margin-bottom: 38px;
        }

        .section-heading h2 {
          margin: 0 0 12px;
          font-size: 36px;
          color: #0f172a;
        }

        .section-heading p {
          margin: 0 auto;
          max-width: 620px;
          color: #64748b;
          line-height: 1.7;
        }

        .features {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 22px;
        }

        .feature-card {
          background: #ffffff;
          padding: 28px;
          border-radius: 22px;
          box-shadow: 0 14px 30px rgba(15, 23, 42, 0.08);
        }

        .feature-card h3 {
          margin: 0 0 12px;
          font-size: 22px;
          color: #0f172a;
        }

        .feature-card p {
          margin: 0;
          color: #64748b;
          line-height: 1.7;
        }

        .about {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 28px;
          align-items: center;
        }

        .about-box {
          background: #ffffff;
          padding: 32px;
          border-radius: 24px;
          box-shadow: 0 14px 30px rgba(15, 23, 42, 0.08);
        }

        .about-box h2 {
          margin: 0 0 14px;
          font-size: 34px;
          color: #0f172a;
        }

        .about-box p {
          margin: 0;
          line-height: 1.8;
          color: #64748b;
        }

        .stats {
          display: grid;
          gap: 16px;
        }

        .stat-card {
          background: linear-gradient(135deg, #0f172a, #1d4ed8);
          color: #ffffff;
          padding: 24px;
          border-radius: 22px;
        }

        .stat-card strong {
          display: block;
          font-size: 32px;
          margin-bottom: 8px;
        }

        .footer {
          text-align: center;
          padding: 28px 20px;
          background: #0f172a;
          color: #cbd5e1;
        }

        @media (max-width: 900px) {
          .hero,
          .features,
          .about {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 640px) {
          .navbar,
          .hero,
          .section {
            padding-left: 20px;
            padding-right: 20px;
          }

          .navbar {
            flex-direction: column;
            gap: 16px;
          }

          .nav-links {
            flex-wrap: wrap;
            justify-content: center;
          }

          .hero-text h1 {
            font-size: 38px;
          }

          .hero-actions {
            flex-direction: column;
          }

          .nav-button,
          .hero-button {
            width: 100%;
          }
        }
      `}</style>

      <div className="page">
        <header className="navbar">
          <div className="logo">MyWebsite</div>

          <nav className="nav-links">
            <a href="#home">Home</a>
            <a href="#features">Features</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
            <button className="nav-button">Get Started</button>
          </nav>
        </header>

        <section className="hero" id="home">
          <div className="hero-text">
            <h1>Build a strong online presence with a simple homepage.</h1>
            <p>
              This homepage section gives your website a clean introduction with a
              clear message, modern design, and responsive layout for every screen.
            </p>

            <div className="hero-actions">
              <button className="hero-button">Explore More</button>
              <button className="hero-button secondary">Contact Us</button>
            </div>
          </div>

          <div className="hero-visual">
            <h3>Welcome to Our Website</h3>
            <p>
              We help businesses create modern digital experiences that look
              professional and connect with customers.
            </p>

            <div className="hero-card">
              <strong>10K+</strong>
              <span>Users trust our services worldwide.</span>
            </div>

            <div className="hero-card">
              <strong>24/7</strong>
              <span>Support for your business and website needs.</span>
            </div>
          </div>
        </section>

        <section className="section" id="features">
          <div className="section-heading">
            <h2>Our Features</h2>
            <p>
              Everything you need for a simple, attractive, and user-friendly
              website homepage.
            </p>
          </div>

          <div className="features">
            {features.map((feature) => (
              <article className="feature-card" key={feature.title}>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="about">
          <div className="about">
            <div className="about-box">
              <h2>About Our Company</h2>
              <p>
                We create web experiences that are simple, modern, and focused on
                helping brands present themselves clearly online. This basic homepage
                is a strong starting point for any business website.
              </p>
            </div>

            <div className="stats">
              <div className="stat-card">
                <strong>250+</strong>
                <span>Projects completed successfully.</span>
              </div>
              <div className="stat-card">
                <strong>98%</strong>
                <span>Client satisfaction across delivered work.</span>
              </div>
            </div>
          </div>
        </section>

        <footer className="footer" id="contact">
          <p>Copyright 2026 MyWebsite. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
}

export default App;
