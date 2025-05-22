import "./style.css";
import React, { useState } from "react";
import htm from '../assets/qwerty.jpg'
import html from '../assets/asdfg.png'
import css from '../assets/zxcvbn.png'

const skills = [
  { name: "HTML/CSS", level: 95, category: "frontend" },
  { name: "JavaScript", level: 90, category: "frontend" },
  { name: "React", level: 90, category: "frontend" },
  { name: "TypeScript", level: 85, category: "frontend" },
  { name: "Tailwind CSS", level: 90, category: "frontend" },
  { name: "Next.js", level: 80, category: "frontend" },

  { name: "Node.js", level: 80, category: "backend" },
  { name: "Express", level: 75, category: "backend" },
  { name: "MongoDB", level: 70, category: "backend" },
  { name: "PostgreSQL", level: 65, category: "backend" },
  { name: "GraphQL", level: 60, category: "backend" },

  { name: "Git/GitHub", level: 90, category: "tools" },
  { name: "Docker", level: 70, category: "tools" },
  { name: "Figma", level: 85, category: "tools" },
  { name: "VS Code", level: 95, category: "tools" },
];

const categories = ["all", "frontend", "backend", "tools"];

const HomePage = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  function home() {
    const homeSection = document.querySelector(".home");
    const aboutSection = document.querySelector(".about-me");
    if (homeSection && aboutSection) {
      homeSection.scrollIntoView({ behavior: "smooth" });
    }
  }
  function about() {
    const homeSection = document.querySelector(".home");
    const aboutSection = document.querySelector(".about-me");
    if (homeSection && aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  }
  function skill() {
    const aboutSection = document.querySelector(".about-me");
    const skillSection = document.querySelector(".skills-container");
    if (aboutSection && skillSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  }
  function project() {
    const projectSection = document.querySelector(".project");
    const aboutSection = document.querySelector(".about-me");
    if (projectSection && aboutSection) {
      projectSection.scrollIntoView({ behavior: "smooth" });
    }
  }
  function contact() {
    const contactSection = document.querySelector(".contact");
    const aboutSection = document.querySelector(".about-me");
    if (contactSection && aboutSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  }
  function handleModeChange() {
    const body = document.body;
    const currentMode = body.getAttribute("data-mode");
    if (currentMode === "dark") {
      body.setAttribute("data-mode", "light");
    } else {
      body.setAttribute("data-mode", "dark");
    }
  }
  return (
    <>
      <header className="header">
        <h1>Portfolio</h1>
        <nav>
          <a onClick={home}>Home</a>
          <a onClick={about}>about</a>
          <a onClick={skill}>skill</a>
          <a onClick={project}>project</a>
          <a onClick={contact}>Contact</a>
          <button className="mode-btn" onClick={handleModeChange}>
            Mode
          </button>
        </nav>
      </header>

      <main>
        <section className="home">
          <div className="home-text">
            <h1>Hi, I’m Myrzabek Kaisar</h1>
            <button className="primary-btn">View My Work</button>
          </div>
          <div className="scroll">
            Scroll
            <img
              src="https://www.svgrepo.com/show/522520/down.svg"
              alt="down-arrow"
            />
          </div>
        </section>

        <section className="about-me">
          <h1 className="section-title">About Me</h1>
          <div className="about-container">
            <div className="about-left">
              <h2>Passionate Web Developer & Tec Creator</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
                accusamus debitis placeat dolorem voluptates magnam eum quas!
                Fugiat facilis sed velit dignissimos doloribus temporibus
                doloremque explicabo.
              </p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio
                a illo, maxime doloremque, iste sed quod nobis laudantium, eos
                suscipit quisquam et eius reprehenderit iusto laboriosam. Omnis
                voluptas sunt ducimus.
              </p>
              <div className="about-buttons">
                <button className="primary-btn">Get In Touch</button>
                <button className="secondary-btn">Download CV</button>
              </div>
            </div>

            <div className="about-right">
              <div className="card">
                <div className="icon-circle">
                  <img
                    src="https://www.svgrepo.com/show/447394/html.svg"
                    alt="code"
                  />
                </div>
                <div>
                  <strong>Web Development</strong>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing. Lorem
                    ipsum dolor sit.
                  </p>
                </div>
              </div>

              <div className="card">
                <div className="icon-circle">
                  <img
                    src="https://www.svgrepo.com/show/418973/avatar-people-profile.svg"
                    alt="ui/ux"
                  />
                </div>
                <div>
                  <strong>UI/UX Design</strong>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing. Lorem
                    ipsum dolor sit amet consectetur.
                  </p>
                </div>
              </div>

              <div className="card">
                <div className="icon-circle">
                  <img
                    src="https://www.svgrepo.com/show/533454/suitcase.svg"
                    alt="management"
                  />
                </div>
                <div>
                  <strong>Project Management</strong>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Lorem, ipsum dolor.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="skills-section">
          <div className="container">
            <h2 className="skills-title">
              My <span className="highlight">Skills</span>
            </h2>

            <div className="categories">
              {categories.map((category, i) => (
                <button
                  key={i}
                  onClick={() => setActiveCategory(category)}
                  className={`category-btn ${
                    activeCategory === category ? "active" : ""
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="skills-grid">
              {filteredSkills.map((skill, i) => (
                <div className="skill-card" key={i}>
                  <h3>{skill.name}</h3>
                  <div className="progress-bar-bg">
                    <div
                      className="progress-bar-fill"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  <div className="percent-label">{skill.level}%</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="projects-section">
          <div className="container">
            <h2 className="section-title">
              Featured <span className="highlight">Projects</span>
            </h2>
            <p className="section-description">
              Here are some of my recent projects. Each project was carefully
              crafted with attention to detail, performance, and user
              experience.
            </p>

            <div className="projects-grid">
              <div className="project-card">
                <img src={htm} />
                <div className="tags">
                  <span className="tag">React</span>
                  <span className="tag">TailwindCSS</span>
                  <span className="tag">Supabase</span>
                </div>
                <h3 className="project-title">HTML/css</h3>
                <p className="project-description">
                  A beautiful landing page app using React and Tailwind.
                </p>
                <div className="project-links">
                  <a href="#">🔗 GitHub</a>
                  <a href="#">🌐 Live</a>
                </div>
              </div>

              <div className="project-card">
                <img
                  src={css}
                  alt="Analytics Dashboard"
                />
                <div className="tags">
                  <span className="tag">TypeScript</span>
                  <span className="tag">D3.js</span>
                  <span className="tag">Next.js</span>
                </div>
                <h3 className="project-title">Orbit Analytics Dashboard</h3>
                <p className="project-description">
                  Interactive analytics dashboard with data visualization and
                  filtering capabilities.
                </p>
                <div className="project-links">
                  <a href="#">🔗 GitHub</a>
                  <a href="#">🌐 Live</a>
                </div>
              </div>

              <div className="project-card">
                <img
                  src={html}
                  alt="E-commerce Platform"
                />
                <div className="tags">
                  <span className="tag">React</span>
                  <span className="tag">Node.js</span>
                  <span className="tag">Stripe</span>
                </div>
                <h3 className="project-title">Java Script</h3>
                <p className="project-description">
                  Full-featured e-commerce platform with user authentication and
                  payment processing.
                </p>
                <div className="project-links">
                  <a href="#">🔗 GitHub</a>
                  <a href="#">🌐 Live</a>
                </div>
              </div>
            </div>

            <div className="github-button-wrapper">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="github-button"
              >
                Check My Github →
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default HomePage;
