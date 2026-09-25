import { useEffect } from 'react';
import './index.css';

function App() {
  useEffect(() => {
    const items = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    items.forEach(item => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <header className="topbar">
        <div className="wrap">
          <nav>
            <a className="brand" href="#top">ABHAY PATEL<span>.</span></a>
            <div className="navlinks">
              <a href="#about">About</a>
              <a href="#projects">Projects</a>
              <a href="#experience">Experience</a>
              <a href="#skills">Skills</a>
              <a className="nav-cta" href="#contact">Let's Connect</a>
            </div>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="floating-bg">
            <span className="float-text float-1">ENGINEER</span>
            <span className="float-text float-2">SCALE</span>
            <span className="float-text float-3">BUILD</span>
          </div>
          <div className="wrap hero-grid">
            <div className="hero-text-content">
              <div className="eyebrow reveal" style={{ transitionDelay: '0.1s' }}><span className="dot"></span> Full-Stack Software Engineer</div>
              <h1 className="reveal" style={{ transitionDelay: '0.2s' }}>
                I engineer <span className="gradient">high-performance</span>
                systems and scalable architectures.
              </h1>
              <p className="hero-copy reveal" style={{ transitionDelay: '0.3s' }}>
                As a Full-Stack Engineer with a track record in fast-paced product startups, I drive end-to-end feature delivery, optimize complex backend systems, and design resilient microservices that scale.
              </p>

              <div className="hero-actions reveal" style={{ transitionDelay: '0.4s' }}>
                <a className="btn btn-primary" href="#projects">View My Work ↗</a>
                <a className="btn btn-ghost" href="#contact">Contact Me</a>
              </div>
            </div>

            <aside className="reveal" style={{ transitionDelay: '0.5s' }}>
              <div className="avatar reveal" style={{ transitionDelay: '0.6s' }}><img src="/Profile.png" alt="Abhay Patel profile photo" /></div>

              <div className="pill-row">
                <span className="pill reveal" style={{ transitionDelay: '1.0s' }}>Java</span>
                <span className="pill reveal" style={{ transitionDelay: '1.1s' }}>React.js</span>
                <span className="pill reveal" style={{ transitionDelay: '1.2s' }}>Spring Boot</span>
                <span className="pill reveal" style={{ transitionDelay: '1.3s' }}>Node.js</span>
                <span className="pill reveal" style={{ transitionDelay: '1.4s' }}>AWS</span>
                <span className="pill reveal" style={{ transitionDelay: '1.5s' }}>Apache Kafka</span>
              </div>
            </aside>
          </div>
        </section>

        <section>
          <div className="wrap">
            <div className="section-head reveal">
              <div>
                <div className="section-kicker">Impact at a glance</div>
                <h2>Proven impact at scale.</h2>
              </div>
              <div className="section-note">
                Quantified engineering outcomes that drive business value and system reliability.
              </div>
            </div>

            <div className="metrics">
              <div className="metric reveal" style={{ transitionDelay: '0s' }}><strong>300+</strong><span>LeetCode problems solved</span></div>
              <div className="metric reveal" style={{ transitionDelay: '0.1s' }}><strong>500K+</strong><span>User records migrated with zero downtime</span></div>
              <div className="metric reveal" style={{ transitionDelay: '0.2s' }}><strong>50%</strong><span>Improvement in app performance via caching</span></div>
              <div className="metric reveal" style={{ transitionDelay: '0.3s' }}><strong>60%</strong><span>Reduction in manual effort via workspace automation</span></div>
            </div>
          </div>
        </section>

        <section id="about">
          <div className="wrap">
            <div className="section-head reveal">
              <div>
                <div className="section-kicker">About</div>
                <h2>Product-focused engineering.</h2>
              </div>
            </div>

            <div className="about-grid">
              <div className="panel reveal">
                <p>
                  I’m Abhay Patel, a Full-Stack Software Engineer who bridges the gap between complex business requirements and scalable technical solutions.
                </p>
                <p>
                  With a strong bias for action in product-based environments, I take ownership of the entire software development lifecycle—from low-level system design and architecture to deploying resilient, zero-downtime microservices.
                </p>
                <p>
                  I thrive on solving high-stakes backend scaling challenges, orchestrating event-driven architectures, and elevating code quality across the stack.
                </p>
              </div>

              <div className="panel reveal">
                <div className="section-kicker">Core Expertise</div>
                <div className="tag-list">
                  <span className="tag">System Design</span>
                  <span className="tag">Microservices Architecture</span>
                  <span className="tag">RESTful APIs</span>
                  <span className="tag">Event-Driven Architecture</span>
                  <span className="tag">Frontend Performance</span>
                  <span className="tag">Database Optimization</span>
                  <span className="tag">Caching Strategies</span>
                  <span className="tag">CI/CD & DevOps</span>
                  <span className="tag">Cloud Infrastructure</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="projects">
          <div className="wrap">
            <div className="section-head reveal">
              <div>
                <div className="section-kicker">Selected Projects</div>
                <h2>Architecting for scale and reliability.</h2>
              </div>
              <div className="section-note">
                Highlighting complex distributed systems and high-availability architectures I have engineered.
              </div>
            </div>

            <div className="cases">
              <article className="case reveal">
                <div className="num">01 / MICROSERVICES</div>
                <h3>AI-Powered Fitness Microservices</h3>
                <p>
                  Architected a highly scalable event-driven microservices ecosystem using Java 17, Spring Boot, and Kafka, orchestrating seamless inter-service communication.
                </p>
                <div className="case-stat">
                  <strong>Scalable</strong>
                  <span>Decoupled fitness-event processing with Kafka</span>
                </div>
              </article>

              <article className="case reveal">
                <div className="num">02 / SECURITY</div>
                <h3>Centralized Authentication Gateway</h3>
                <p>
                  Spearheaded the integration of Keycloak with JWT-based authentication at the API Gateway, enforcing robust role-based access control across all microservices.
                </p>
                <div className="case-stat">
                  <strong>Secure</strong>
                  <span>Role-based access enforcement</span>
                </div>
              </article>

              <article className="case reveal">
                <div className="num">03 / REAL-TIME</div>
                <h3>Real-time Alerting System</h3>
                <p>
                  Developed a real-time alerting mechanism leveraging Redis to monitor system health and broadcast immediate alerts during incidents.
                </p>
                <div className="case-stat">
                  <strong>50%</strong>
                  <span>Reduction in incident detection time</span>
                </div>
              </article>

              <article className="case reveal">
                <div className="num">04 / AUTOMATION</div>
                <h3>Workspace Automation Workflows</h3>
                <p>
                  Built automation solutions using Google Workspace APIs (Gmail, Sheets, Drive, Forms) to streamline manual operations and hiring processes.
                </p>
                <div className="case-stat">
                  <strong>60%</strong>
                  <span>Reduction in manual administrative effort</span>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section id="experience">
          <div className="wrap">
            <div className="section-head reveal">
              <div>
                <div className="section-kicker">Experience</div>
                <h2>Career timeline.</h2>
              </div>
            </div>

            <div className="timeline">
              <article className="job reveal">
                <div>
                  <div className="job-date">MAY 2026 — PRESENT</div>
                  <div className="job-company">Punjab, India</div>
                </div>
                <div>
                  <div className="job-role">Full Stack Engineer</div>
                  <div className="job-company">LPU ONLINE</div>
                  <ul>
                    <li>Spearhead the development of full-stack recruitment platforms, driving end-to-end delivery of automated workflows using React.js, Spring Boot, and Node.js.</li>
                    <li>Architected workflow automation solutions utilizing Google Workspace APIs, eliminating manual operational overhead by 60%.</li>
                    <li>Design and scale high-throughput RESTful APIs, optimizing complex database queries to significantly reduce latency and improve UX.</li>
                    <li>Lead cross-functional collaboration across the SDLC, managing deployments, rigorous testing, and resolving critical production incidents.</li>
                  </ul>
                </div>
              </article>

              <article className="job reveal">
                <div>
                  <div className="job-date">DEC 2024 — APR 2026</div>
                  <div className="job-company">New Delhi</div>
                </div>
                <div>
                  <div className="job-role">Software Engineer</div>
                  <div className="job-company">OTPless</div>
                  <ul>
                    <li>Engineered mission-critical customer applications and internal dashboards, optimizing React.js architectures to boost frontend performance by 30%.</li>
                    <li>Orchestrated the design and integration of resilient, scalable RESTful APIs using Java and Spring Boot.</li>
                    <li>Championed component-driven modular architecture, accelerating development velocity and reducing UI-related production defects by 25%.</li>
                    <li>Designed a real-time distributed alerting system using Redis, slashing incident detection and resolution time by 50%.</li>
                  </ul>
                </div>
              </article>

              <article className="job reveal">
                <div>
                  <div className="job-date">MAR 2024 — MAY 2024</div>
                  <div className="job-company">Greater Noida, UP</div>
                </div>
                <div>
                  <div className="job-role">Full Stack Engineer Intern</div>
                  <div className="job-company">Agami Technologies</div>
                  <ul>
                    <li>Improved application performance by 50% through caching strategies, indexing, and query optimization.</li>
                    <li>Executed a backend migration of 500,000+ user records maintaining data integrity and availability.</li>
                    <li>Enhanced logging, monitoring, and error-tracking systems to improve reliability.</li>
                  </ul>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section id="skills">
          <div className="wrap">
            <div className="section-head reveal">
              <div>
                <div className="section-kicker">Skills & Stack</div>
                <h2>Tools I work with.</h2>
              </div>
            </div>

            <div className="skills-grid">
              <div className="skill-card reveal">
                <h3>Languages</h3>
                <p>Java, JavaScript, Python</p>
              </div>
              <div className="skill-card reveal">
                <h3>Frontend</h3>
                <p>React.js, Redux Toolkit, Tailwind CSS, Bootstrap, TypeScript</p>
              </div>
              <div className="skill-card reveal">
                <h3>Backend</h3>
                <p>Spring Boot, Spring MVC, Spring Data JPA, Node.js, Express.js, REST APIs, Apache Kafka</p>
              </div>
              <div className="skill-card reveal">
                <h3>Databases</h3>
                <p>MySQL, PostgreSQL, MongoDB, Redis</p>
              </div>
              <div className="skill-card reveal">
                <h3>Cloud & DevOps</h3>
                <p>AWS (EC2, S3, IAM, Lambda, CloudWatch), Docker, Jenkins, GitHub Actions</p>
              </div>
              <div className="skill-card reveal">
                <h3>Core Concepts</h3>
                <p>Data Structures & Algorithms, OOP, Design Patterns, System Design, Scalability, Microservices</p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="wrap">
            <div className="section-head reveal">
              <div>
                <div className="section-kicker">Education & Certifications</div>
                <h2>Continuous learning.</h2>
              </div>
            </div>

            <div className="edu-grid">
              <div className="edu-item reveal">
                <div className="eyebrow-mini">Education</div>
                <h3>B.Tech – Computer Science and Engineering</h3>
                <p>Noida Institute of Engineering and Technology (NIET) · 2020–2024</p>
              </div>
              <div className="edu-item reveal">
                <div className="eyebrow-mini">Education</div>
                <h3>Senior Secondary (Class XII)</h3>
                <p>Sarvajanik Inter College · 2020</p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact">
          <div className="wrap contact">
            <div className="contact-box reveal">
              <div className="section-kicker">Let's Connect</div>
              <h2>Have an engineering challenge? Let's talk.</h2>
              <p>
                Open to conversations around full-stack development, system architecture, performance optimization, and new opportunities.
              </p>
              <div className="hero-actions">
                <a className="btn btn-primary" href="mailto:abhaypatel6794@gmail.com">Email Me ↗</a>
                <a className="btn btn-ghost" href="https://github.com/patelabhay12" target="_blank" rel="noopener noreferrer">GitHub ↗</a>
              </div>
            </div>

            <div className="panel reveal">
              <div className="contact-list">
                <div className="contact-item"><b>Email</b><a href="mailto:abhaypatel6794@gmail.com">abhaypatel6794@gmail.com</a></div>
                <div className="contact-item"><b>LinkedIn</b><a href="https://www.linkedin.com/in/abhay-patel-8b671921a/" target="_blank" rel="noopener noreferrer">linkedin.com/in/abhay-patel-8b671921a</a></div>
                <div className="contact-item"><b>GitHub</b><a href="https://github.com/patelabhay12" target="_blank" rel="noopener noreferrer">github.com/patelabhay12</a></div>
                <div className="contact-item"><b>Phone</b><a href="tel:+917525858518">+91-7525858518</a></div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="wrap footer-inner">
          <span>© 2026 Abhay Patel. All rights reserved.</span>
          <span>Full-Stack • Microservices • System Design</span>
        </div>
      </footer>
    </>
  );
}

export default App;
