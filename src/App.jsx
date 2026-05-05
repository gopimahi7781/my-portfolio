import './App.css'

function App() {
  return (
    <div>

      {/* Navbar */}
      <nav className="navbar">
        <h2 className="logo">My Portfolio</h2> {/* 👉 FIX */}
        
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Home */}
      <section id="home" className="home">
        <img src="/professionalme.jpeg" alt="profile" className="profile-img" />
        <h1>Hello, I'm Gopi 👋</h1>
        <h3>Frontend Developer</h3>
        <p>I build websites using React</p>
        <button className="btn">Download Resume</button>
      </section>

      {/* About */}
      <section id="about" className="about">
        <h1>About Me</h1>
        <p>I am a passionate frontend developer learning React and building projects.</p>
      </section>

      {/* Skills */}
      <section id="skills" className="skills">
        <h1>Skills</h1>
        <div className="skill-list">
          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
          <span>React</span>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="projects">
        <h1>Projects</h1>

        <div className="project-container">

          {/* E-Commerce */}
          <div className="project-card">
            <h3>E-Commerce</h3>
            <p>React + Node.js website</p>
            <div className="btn-group">
              <button>View</button>
              <button>GitHub</button>
            </div>
          </div>

          {/* Restaurant */}
          <div className="project-card">
            <h3>Restaurant</h3>
            <p>Food ordering UI</p>
            <div className="btn-group">
              <button>View</button>
              <button>GitHub</button>
            </div>
          </div>

          {/* Portfolio */}
          <div className="project-card">
            <h3>Portfolio</h3>
            <p>Personal website</p>
            <div className="btn-group">

        {/* View */}
        <a href="https://courageous-fairy-d0e77a.netlify.app" target="_blank" rel="noopener noreferrer">
        <button>View</button>
        </a>

        {/* GitHub */}
        <a href="https://github.com/gopimahi7781/my-portfolio" target="_blank" rel="noopener noreferrer">
        <button>GitHub</button>
        </a>

         </div>
          </div>

        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="contact">
  <h2>Contact Me</h2>

  <form name="contact" method="POST" data-netlify="true">
    
    {/* Hidden input (must for Netlify) */}
    <input type="hidden" name="form-name" value="contact" />

    <input type="text" name="name" placeholder="Your Name" required />
    
    <input type="email" name="email" placeholder="Your Email" required />
    
    <textarea name="message" placeholder="Your Message" required></textarea>

    <button type="submit">Send Message</button>
  </form>

  <p>📍 Hyderabad, India</p>
  </section>

    </div>
  )
}

export default App