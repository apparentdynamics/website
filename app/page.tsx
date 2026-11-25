const features = [
  {
    title: "Modular & Open",
    description: "Built from leading open technologies.",
    icon: "/icons/modular.svg",
  },
  {
    title: "Intelligent Out of the Box",
    description: "Language, vision and physical intelligence.",
    icon: "/icons/intelligence.svg",
  },
  {
    title: "Repairable & Extensible",
    description: "Designed for maintenance, upgrades and self-repair.",
    icon: "/icons/repair.svg",
  },
  {
    title: "Education Ready",
    description: "Hardware, curriculum and hands-on learning.",
    icon: "/icons/education.svg",
  },
];

const ecosystem = [
  {
    title: "Robots",
    description: "Humanoid platforms, configurations and ordering.",
    image: "/images/robots.jpg",
    icon: "/icons/robots.svg",
    href: "/robots/",
  },
  {
    title: "Capabilities",
    description: "See what our robots can do in the real world.",
    image: "/images/capabilities.jpg",
    icon: "/icons/capabilities.svg",
    href: "/capabilities/",
  },
  {
    title: "Learn",
    description: "Build, program and teach with our platforms.",
    image: "/images/learn.jpg",
    icon: "/icons/education.svg",
    href: "/learn/",
  },
  {
    title: "Resources",
    description: "Documentation, software, models and integrations.",
    image: "/images/resources.jpg",
    icon: "/icons/resources.svg",
    href: "/resources/",
  },
  {
    title: "Labs",
    description: "Exploring self-repair, new skills and system improvements.",
    image: "/images/labs.jpg",
    icon: "/icons/labs.svg",
    href: "/labs/",
  },
  {
    title: "Store",
    description: "Robots, kits, parts and accessories.",
    image: "/images/store.jpg",
    icon: "/icons/store.svg",
    href: "/store/",
  },
];

export default function Home() {
  return (
    <>
      {/* Navigation */}
      <header className="header">
        <div className="nav-container">
          <a href="/" className="brand">
            <img
              src="/images/logo.svg"
              alt=""
              className="brand-logo"
            />
            <span className="brand-name">
              APPARENT<br />DYNAMICS
            </span>
          </a>

          <nav className="navigation">
            {ecosystem.map((item) => (
              <a key={item.title} href={item.href}>
                {item.title}
              </a>
            ))}
          </nav>

          <div className="nav-actions">
            <a href="/search/" aria-label="Search">
              <img src="/icons/search.svg" alt="" />
            </a>
            <a href="/account/" aria-label="Account">
              <img src="/icons/account.svg" alt="" />
            </a>
            <a href="/robots/" className="button primary">
              Get Started
            </a>
          </div>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="hero">
          <div className="hero-content">
            <p className="eyebrow">HUMANOID ROBOTICS</p>

            <h1>
              Humanoid robots engineered for versatile
              real-world interactions.
            </h1>

            <p className="hero-description">
              We make and sell humanoid robots engineered
              for versatile real-world interactions.
              Our robots come out of the box with
              leading-edge language, vision, and movement
              intelligence for lifelike physical performance.
            </p>

            <div className="hero-actions">
              <a href="/robots/" className="button primary">
                Explore the Robots
              </a>
              <a
                href="/capabilities/"
                className="button secondary"
              >
                Watch Demo
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="robot-image image-placeholder">
              <img
                src="/images/humanoid.png"
                alt="Apparent Dynamics humanoid robot"
              />
            </div>

            <div className="robot-details">
              <div className="detail-image image-placeholder">
                <img src="/images/detail-hand.jpg" alt="" />
              </div>
              <div className="detail-image image-placeholder">
                <img src="/images/detail-torso.jpg" alt="" />
              </div>
              <div className="detail-image image-placeholder">
                <img src="/images/detail-leg.jpg" alt="" />
              </div>
            </div>
          </div>
        </section>

        {/* Value propositions */}
        <section className="features">
          <div className="feature-grid">
            {features.map((feature) => (
              <article className="feature" key={feature.title}>
                <img
                  className="feature-icon"
                  src={feature.icon}
                  alt=""
                />
                <div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Ecosystem */}
        <section className="ecosystem">
          <div className="section-heading">
            <h2>Explore the Apparent Dynamics Ecosystem</h2>
            <a href="/ecosystem/">See the full ecosystem</a>
          </div>

          <div className="ecosystem-grid">
            {ecosystem.map((item) => (
              <a
                className="ecosystem-card"
                href={item.href}
                key={item.title}
              >
                <div className="card-image image-placeholder">
                  <img src={item.image} alt="" />
                </div>

                <div className="card-content">
                  <img
                    className="card-icon"
                    src={item.icon}
                    alt=""
                  />

                  <div className="card-text">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>

                  <img
                    className="card-arrow"
                    src="/icons/arrow-right.svg"
                    alt=""
                  />
                </div>
              </a>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div>
            <strong>APPARENT DYNAMICS</strong>
            <p>
              Humanoid robots engineered for versatile
              real-world interactions.
            </p>
          </div>

          <div className="footer-links">
            <a href="/about/">About</a>
            <a href="/contact/">Contact</a>
            <a href="/privacy/">Privacy</a>
          </div>
        </div>

        <p className="copyright">
          © {new Date().getFullYear()} Apparent Dynamics.
        </p>
      </footer>
    </>
  );
}