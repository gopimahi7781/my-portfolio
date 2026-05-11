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
        <p>I build modern and responsive web applications using HTML, CSS, JavaScript & React.</p>
        <a href="/Gopi_Krishna_Reddy_Resume.pdf" download className="btn"> Download Resumde</a>
      </section>

      {/* About */}
      <section id="about" className="about">
        <h1>About Me</h1>
        <p>I am a passionate frontend developer focused on creating modern, responsive and user-friendly web applications.</p>
      </section>

      {/* Skills */}
      <section id="skills" className="skills">
        <h1>Skills</h1>
        <div className="skill-list">
          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
          <span>React</span>
          <span>Tailwind CSS</span>
          <span>Responsive Design</span>
          <span>Bootstrap</span>
          <span>Java</span>
          <span>Problem Solving</span>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="projects">
        <h1>Projects</h1>

        <div className="project-container">

          {/* QuickChat App */}
      <div className="project-card">
      <h3>QuickChat App</h3>
      <p>Real-time Chat Application</p>

      <div className="btn-group">

    <a href="https://idyllic-twilight-80531c.netlify.app" target="_blank"  rel="noopener noreferrer">
      <button>View</button>
    </a>

    <a href="https://github.com/gopimahi7781/quickchat.git" target="_blank" rel="noopener noreferrer">
      <button>GitHub</button>
    </a>

  </div>
</div>

          {/* Restaurant */}
          <div className="project-card">
            <h3>Restaurant</h3>
            <p>Responsive Restaurant Website</p>
            <div className="btn-group">
           <a href="https://playful-lily-0ad2bf.netlify.app"  target="_blank" rel="noopener noreferrer">
              <button>View</button>
            </a>
            <a href="https://github.com/gopimahi7781/restaurant-website.git" target="_blank" rel="noopener noreferrer">
              <button>GitHub</button>
            </a>
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

  <p>📧 Email: gopikrishnareddyt@gmail.com</p>
  <p>📞 Phone: +91 8978959469</p>
  <p>📍 Hyderabad, India</p>

  <div className="contact-links">
    <a href="https://github.com/gopimahi7781" target="_blank">GitHub</a>
    <a href="https://www.linkedin.com/in/your-linkedin" target="_blank">LinkedIn</a>
  </div>
</section>

    </div>
  )
}

export default App