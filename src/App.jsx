import "./App.css";

function App() {
  return (
    <>
      {/* NAVBAR */}
      <nav className="navbar">
        <h2 className="logo">My Portfolio</h2>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* HERO */}
      <section id="home" className="hero">
        <img src="/professionalme.jpeg" alt="me" className="profile" />
        <h1>Hello, I'm Gopi 👋</h1>
        <h2>Frontend Developer</h2>
        <p>I build websites using React</p>
        <button className="btn">Download Resume</button>
      </section>

      {/* ABOUT */}
      <section id="about" className="section">
        <h1>About Me</h1>
        <p>
          I am a passionate frontend developer learning React and building projects.
        </p>
      </section>

      {/* SKILLS */}
      <section id="skills" className="section">
        <h1>Skills</h1>
        <div className="skills">
          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
          <span>React</span>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="section">
        <h1>Projects</h1>

        <div className="projects">
          <div className="card">
            <h3>E-Commerce</h3>
            <p>React + Node.js website</p>
            <button>View</button>
            <button>GitHub</button>
          </div>

          <div className="card">
            <h3>Restaurant</h3>
            <p>Food ordering UI</p>
            <button>View</button>
            <button>GitHub</button>
          </div>

          <div className="card">
            <h3>Portfolio</h3>
            <p>Personal website</p>
            <button>View</button>
            <button>GitHub</button>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section">
        <h1>Contact</h1>
        <p>Email: gopikrishnareddyt@gmail.com</p>
        <p>Phone: +91 8978959469</p>
      </section>
    </>
  );
}

export default App;