import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header-wrapper">
      <nav className="navbar-container">
        <div className="container navbar-inner">
          <div className="navbar-brand">
            <img
              src="/assets/images/phicampus_logo.png"
              alt="PHICampus Logo"
              className="header-logo-img"
            />
            <span className="navbar-motto">...Excellence in Education</span>
          </div>

          <ul className={`nav-links ${menuOpen ? "mobile-open" : ""}`}>
            <li>
              <a href="#home" onClick={() => setMenuOpen(false)}>
                Home
              </a>
            </li>
            <li>
              <a href="#about" onClick={() => setMenuOpen(false)}>
                About Us
              </a>
            </li>
            <li>
              <a href="#philosophy" onClick={() => setMenuOpen(false)}>
                Our Philosophy
              </a>
            </li>
            <li>
              <a href="#admission" onClick={() => setMenuOpen(false)}>
                Admission
              </a>
            </li>
            <li>
              <a href="#clubs" onClick={() => setMenuOpen(false)}>
                Clubs
              </a>
            </li>
            <li>
              <a href="#contact" onClick={() => setMenuOpen(false)}>
                Contact
              </a>
            </li>
          </ul>

          <button
            className="hamburger-btn"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className={`bar ${menuOpen ? "open" : ""}`}></span>
            <span className={`bar ${menuOpen ? "open" : ""}`}></span>
            <span className={`bar ${menuOpen ? "open" : ""}`}></span>
          </button>
        </div>
      </nav>
    </header>
  );
};

const Hero = () => (
  <section className="hero-modern" id="home">
    <div className="container hero-modern-container">
      <div className="hero-modern-text" data-aos="fade-up">
        <h4
          className="hero-subtitle"
          style={{
            color: "var(--accent-color)",
            fontWeight: 700,
            letterSpacing: "1px",
          }}
        >
          Building Global Champions
        </h4>
        <h1 className="hero-title">
          Port Harcourt{" "}
          <span style={{ color: "var(--primary-color)" }}>International</span>{" "}
          Campus
        </h1>
        <p className="hero-description">
          At Port Harcourt International Campus, every child is nurtured to grow
          in confidence, knowledge, and character, ready to thrive in a rapidly
          changing world.
        </p>
      </div>

      <div
        className="hero-image-wrapper"
        data-aos="zoom-in"
        data-aos-delay="200"
      >
        <img
          src="/assets/images/banner.png"
          alt="Students"
          className="hero-main-image"
        />
      </div>
    </div>
  </section>
);

const AccordionItem = ({ title, content, isOpen, onClick }) => (
  <div className="accordion-item">
    <button
      className={`accordion-header ${isOpen ? "active" : ""}`}
      onClick={onClick}
    >
      <h3>{title}</h3>
      <span className={`accordion-icon ${isOpen ? "open" : ""}`}>&#10095;</span>
    </button>
    <div className={`accordion-content ${isOpen ? "show" : ""}`}>
      <p>{content}</p>
    </div>
  </div>
);

const About = () => {
  const [openIndex, setOpenIndex] = useState(1);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  const accordionData = [
    {
      title: "Our Vision",
      content:
        "To become one of Africa's leading international primary schools by nurturing confident learners who positively impact their communities and the world.",
    },
    {
      title: "Our Mission",
      content:
        "Our mission is to mould the total child in an environment that promotes strong spiritual backing, emotional stability, exceptional mannerism, using knowledgeable and experienced personnel with up to date teaching skills.",
    },
    {
      title: "Our Core Values",
      content:
        "Excellence, Integrity, Compassion, Curiosity, and Global Citizenship.",
    },
  ];

  return (
    <section className="section" id="about">
      <div className="container">
        <div className="split-layout align-start">
          <div className="about-text-section" data-aos="fade-right">
            <h2
              className="section-title-left"
              style={{ fontSize: "3rem", fontWeight: 800 }}
            >
              About <span style={{ color: "var(--primary-color)" }}>us</span>
            </h2>
            <p
              style={{
                marginBottom: "2rem",
                fontSize: "1.1rem",
                color: "#444",
              }}
            >
              The founding of Port Harcourt International Campus was motivated
              by the desire to provide top-notch instruction. Our bond is our
              word, or what we pledge to our parents. The school is the pinnacle
              of achievement, teamwork, intelligence, discipline, and devotion.
            </p>
            <div className="accordion-container">
              {accordionData.map((item, index) => (
                <AccordionItem
                  key={index}
                  title={item.title}
                  content={item.content}
                  isOpen={openIndex === index}
                  onClick={() => toggleAccordion(index)}
                />
              ))}
            </div>
          </div>
          <div
            className="about-image-section"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "1.5rem",
            }}
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <img
              src="/assets/images/icon.png"
              alt="PHICampus Icon"
              className="about-icon-only-img"
              style={{ maxWidth: "300px", width: "100%", height: "auto" }}
            />
            <p
              style={{
                fontSize: "1.05rem",
                color: "#333",
                textAlign: "center",
                lineHeight: "1.6",
                maxWidth: "400px",
              }}
            >
              Our mission is to mould the total child in an environment that
              promotes strong spiritual backing, emotional stability,
              exceptional mannerism, using knowledgeable and experienced
              personnel with up to date teaching skills.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const Philosophy = () => (
  <section className="section" id="philosophy" style={{ background: "white" }}>
    <div className="container">
      <div className="section-title" data-aos="fade-up">
        <h2>
          Our <span style={{ color: "var(--accent-color)" }}>Philosophy</span>
        </h2>
        <p
          style={{
            color: "var(--primary-color)",
            fontWeight: "600",
            letterSpacing: "0.5px",
          }}
        >
          CHILD-CENTRED LEARNING
        </p>
      </div>
      <div className="split-layout align-start" style={{ gap: "3rem" }}>
        <div
          className="philosophy-text"
          data-aos="fade-right"
          data-aos-delay="100"
        >
          <p
            style={{
              fontWeight: "bold",
              fontSize: "1.2rem",
              marginBottom: "1.5rem",
            }}
          >
            Child-centred learning, which puts children at the centre of the
            learning process, is a fundamental teaching principle throughout the
            school. It helps us to achieve 3 main goals:
          </p>
          <ol
            style={{
              paddingLeft: "1.5rem",
              marginBottom: "2rem",
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            <li>
              To increase the children's knowledge, experience and
              understanding;
            </li>
            <li>
              To produce life-long learners with high self-esteem, a strong
              sense of self, a commitment to community and the skills to live a
              full and happy life;
            </li>
            <li>
              To provide the children with an opportunity to confront new
              information and challenges, with the result that they gain
              self-confidence and develop a love of learning.
            </li>
          </ol>
          <p style={{ marginBottom: "1.5rem" }}>
            The child-centred approach also acknowledges the fact that not every
            child learns in the same way: some children learn through listening,
            some through reading and others by doing. Our school offers
            differentiated programmes of work to cater for different levels of
            ability.
          </p>
          <p>
            Finally, child-centred teaching provides the children with the
            social skills and self-knowledge they need in order to become whole,
            happy, successful human beings.
          </p>
        </div>
        <div
          className="philosophy-images"
          style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
          data-aos="fade-left"
          data-aos-delay="200"
        >
          <img
            src="/assets/images/club3.jpg"
            alt="Philosophy 1"
            style={{
              width: "100%",
              borderRadius: "8px",
              boxShadow: "var(--shadow-sm)",
            }}
          />
          <img
            src="/assets/images/phil4.jpg"
            alt="Philosophy 2"
            style={{
              width: "100%",
              borderRadius: "8px",
              boxShadow: "var(--shadow-sm)",
            }}
          />
        </div>
      </div>
    </div>
  </section>
);

const Features = () => (
  <section className="section" style={{ background: "#faf5ff" }}>
    <div className="container">
      <div className="section-title" data-aos="fade-up">
        <h2>
          Why Choose <span style={{ color: "var(--primary-color)" }}>Us?</span>
        </h2>
        <p>Our child-centred approach ensures every pupil thrives.</p>
      </div>
      <div className="grid">
        <div className="card" data-aos="fade-up" data-aos-delay="100">
          <h3>Academic Excellence</h3>
          <p>
            Helping every child achieve their highest academic potential through
            dedicated support.
          </p>
        </div>
        <div className="card" data-aos="fade-up" data-aos-delay="200">
          <h3>Global Awareness</h3>
          <p>
            Encouraging curiosity about different cultures and the wider world.
          </p>
        </div>
        <div className="card" data-aos="fade-up" data-aos-delay="300">
          <h3>Creative Development</h3>
          <p>
            Promoting creativity through arts, sports and co-curricular
            activities.
          </p>
        </div>
      </div>
    </div>
  </section>
);

const Admission = () => (
  <section className="section" id="admission" style={{ background: "white" }}>
    <div className="container">
      <div className="split-layout">
        <div data-aos="fade-right">
          <h2 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
            Simple{" "}
            <span style={{ color: "var(--accent-color)" }}>Admissions</span>
          </h2>
          <p
            style={{
              color: "var(--text-muted)",
              marginBottom: "2rem",
              fontSize: "1.1rem",
            }}
          >
            Join our vibrant learning community in just a few straightforward
            steps.
          </p>
          <ul style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <li style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <div className="step-circle">1</div>
              <span>Submit previous academic records</span>
            </li>
            <li style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <div className="step-circle">2</div>
              <span>Attend an assessment (if necessary)</span>
            </li>
            <li style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <div className="step-circle">3</div>
              <span>Receive admission confirmation</span>
            </li>
            <li style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <div className="step-circle">4</div>
              <span>Parent orientation & welcome</span>
            </li>
          </ul>
        </div>
        <div
          className="image-wrapper admission-img"
          data-aos="fade-left"
          data-aos-delay="200"
        >
          <img
            src="/assets/images/welcome.png"
            alt="Welcome to PHICampus"
            style={{ objectFit: "cover", width: "100%", height: "100%" }}
          />
        </div>
      </div>
    </div>
  </section>
);

const Clubs = () => (
  <section className="section" id="clubs" style={{ background: "#faf5ff" }}>
    <div className="container">
      <div className="section-title" data-aos="fade-up">
        <h2>
          After School{" "}
          <span style={{ color: "var(--primary-color)" }}>Activities</span>
        </h2>
        <p>Engaging activities to develop diverse talents.</p>
      </div>
      <div
        className="grid"
        style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}
      >
        <div
          className="card"
          style={{ padding: "1rem" }}
          data-aos="zoom-in"
          data-aos-delay="100"
        >
          <img
            src="/assets/images/club.jpg"
            alt="Club 1"
            style={{
              width: "100%",
              height: "200px",
              objectFit: "cover",
              borderRadius: "8px",
              marginBottom: "1rem",
            }}
          />
          <h3>Sports & Athletics</h3>
          <p>Football, Taekwondo, Tennis, Basketball and Swimming.</p>
        </div>
        <div
          className="card"
          style={{ padding: "1rem" }}
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          <img
            src="/assets/images/club2.jpg"
            alt="Club 2"
            style={{
              width: "100%",
              height: "200px",
              objectFit: "cover",
              borderRadius: "8px",
              marginBottom: "1rem",
            }}
          />
          <h3>Creative & Performing Arts</h3>
          <p>
            Singing, Drama, and Dance clubs to explore creative expressions.
          </p>
        </div>
        <div
          className="card"
          style={{ padding: "1rem" }}
          data-aos="zoom-in"
          data-aos-delay="300"
        >
          <img
            src="/assets/images/phil2.jpg"
            alt="Academics"
            style={{
              width: "100%",
              height: "200px",
              objectFit: "cover",
              borderRadius: "8px",
              marginBottom: "1rem",
            }}
          />
          <h3>Academic Clubs</h3>
          <p>Chess, Computer Clubs, and interactive learning environments.</p>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="site-footer" id="contact">
    <div className="footer-top-line"></div>
    <div className="container">
      <div className="footer-grid">
        <div className="footer-col">
          <h4>ABOUT US</h4>
          <ul>
            <li>
              <a href="#about">Our Vision</a>
            </li>
            <li>
              <a href="#about">Our Mission</a>
            </li>
            <li>
              <a href="#about">Core Values</a>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>ADMISSIONS</h4>
          <ul>
            <li>
              <a href="#admission">Process</a>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>QUICK INFO</h4>
          <p
            style={{ color: "#a0a0a0", fontSize: "11px", marginTop: "0.5rem" }}
          >
            <strong>Email:</strong>
            <br />
            <a
              href="mailto:school@heliconiapark.com"
              style={{ color: "#ff8c00" }}
            >
              school@heliconiapark.com
            </a>
          </p>
        </div>

        <div className="footer-address">
          <img
            src="/assets/images/map.png"
            alt="World Map"
            className="footer-map"
          />
          <p>
            Port Harcourt International
            <br />
            Campus,
            <br />
            P.O. Box 10895,
            <br />
            Heliconia Park,
            <br />
            Adjacent to NLNG,
            <br />
            Eastern Bypass,
            <br />
            Port Harcourt, 500101,
            <br />
            Rivers State, Nigeria.
          </p>
        </div>
      </div>
      <div className="footer-copyright">
        <p>©Copyright 2013 Port Harcourt International Campus</p>
      </div>
    </div>
  </footer>
);

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Philosophy />
      <Features />
      <Admission />
      <Clubs />
      <Footer />
    </>
  );
}

export default App;
