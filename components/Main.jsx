import React from "react";
import PropTypes from 'prop-types';
// import FontAwesomeIcon from '@fortawesome/react-fontawesome'
// import faTwitter from '@fortawesome/fontawesome-free-brands/faTwitter'
// import faFacebook from '@fortawesome/fontawesome-free-brands/faFacebook'
// import faInstagram from '@fortawesome/fontawesome-free-brands/faInstagram'
// import faGithub from '@fortawesome/fontawesome-free-brands/faGithub'

class Main extends React.Component {

  state = {
    loading: false,
    success: false,
    error: null,
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    if (this.state.loading) return;

    this.setState({ loading: true, error: null, success: false });

    try {
      const formData = new FormData(e.currentTarget);

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          company: formData.get("company"),
          message: formData.get("message"),
        }),
      });

      this.setState({
        loading: false,
        success: true,
        error: null,
      });

    } catch (err) {
      console.error("Submit error:", err);

      this.setState({
        loading: false,
        success: false,
        error: err.message || "Failed to send message",
      });
    }
  };

  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

        <article id="intro" className={`${this.props.article === 'intro' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Intro</h2>
          <span className="image main"><img src="/static/images/pic01.jpg" alt="" /></span>
          <p>
            Hi, I&#x27;m Mark Dyvan Aquino, a Full Stack Developer specializing in React and .NET Core, building scalable web applications and SaaS platforms.<br /> 
            I develop high-performance backend systems, RESTful APIs, and modern frontend interfaces, with experience in SQL Server and cloud solutions on Microsoft Azure.<br />
            Explore <a href="#work" onClick={(e) => {e.preventDefault(); this.props.onOpenArticle('work');}}>my work</a> to see what I’ve built.
          </p>
          {close}
        </article>

        <article id="work" className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Work</h2>
          <span className="image main"><img src="/static/images/pic02.jpg" alt="" /></span>
          <p>Check out my pass projects and working experiences below, or you can <a href="/static/JUAN_CARLOS_PEGUERO.pdf" target="_blank">download my resume (PDF)</a>. </p>
          <h3>Projects</h3>
          <table>
            <tbody>
              <tr>
                <td>
                  <h4>AI AUTOMATION & RAG ASSISTANT SYSTEM</h4>
                </td>
                <td>Built intelligent automation pipelines using OpenAI APIs and developed a Retrieval-Augmented Generation (RAG) assistant with persistent memory. Enabled contextual task automation, structured responses, and scalable AI-driven workflows.</td>
                <td>OpenAI API, Python, JavaScript, Supabase, Full-Stack Development</td>
              </tr>
              <tr>
                <td>
                  <h4>EARN PRACTICE MANAGER</h4>
                </td>
                <td>Developed a scalable web application for managing clients, staff, workflows, and documents. Implemented role-based access control and optimized API/database performance for improved responsiveness and scalability.</td>
                <td>ASP.NET Core, React, TypeScript, PostgreSQL, REST API</td>
              </tr>
              <tr>
                <td>
                  <h4>ENTERPRISE HRMS SYSTEM</h4>
                </td>
                <td>Built a full-stack HR platform covering employee lifecycle processes including hiring, payroll, and internal operations. Developed secure backend services and ensured data integrity through efficient database design.</td>
                <td>.NET Core, C#, ASP.NET Core, Microsoft SQL Server, REST API</td>
              </tr>
            </tbody>
          </table>
          <h3>Working Experiences</h3>
          <table>
            <tbody>
              <tr>
                <td>
                  <h4>Daclan Accountant Ltd</h4>
                  <i>Dec. 2024 - Present</i>
                </td>
                <td>Developed full-stack applications using React, .NET Core, and SQL Server, while designing and implementing RESTful APIs, building scalable SaaS solutions with secure authentication and RBAC, and optimizing database queries to improve performance. </td>
                <td>React, .NET Core, ASP.NET, SQL Server, Node.js, Azure, Docker, Git, CI/CD, RESTful APIs</td>
              </tr>
              <tr>
                <td>
                  <h4>TerraBarn Inc</h4>
                  <i>Aug. 2023 - Present</i>
                </td>
                <td>Developed scalable applications using React, ASP.NET Core, and Azure, designed and implemented RESTful APIs, and built cloud-based solutions. </td>
                <td>​React, ASP.NET Core, Azure, RESTful APIs, PostgreSQL, Docker, Kubernetes, CI/CD</td>
              </tr>
              <tr>
                <td>
                  <h4>Hi-Precision Diagnostics</h4>
                  <i>Nov. 2022 - Mar. 2024</i>
                </td>
                <td>Built enterprise applications using .NET Core, React, and SQL Server, developed and maintained RESTful APIs, and optimized database queries. </td>
                <td>.NET Core, React, SQL Server, ASP.NET Core, RESTful APIs, Docker, Kubernetes, Git, Azure</td>
              </tr>
              <tr>
                <td>
                  <h4>Freelance</h4>
                  <i>Apr. 2019 - Present</i>
                </td>
                <td>Developed web applications using React, Node.js, and .NET, built custom systems including POS, dashboards, and business tools, and created automation solutions using Python. </td>
                <td>React, Node.js, .NET, Python, JavaScript, HTML5, CSS3, AWS, Firebase, Docker, Git</td>
              </tr>
            </tbody>
          </table>
          {close}
        </article>

        <article id="about" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">About</h2>
          <span className="image main"><img src="/static/images/pic03.jpg" alt="" /></span>
          <p>I’m a Full Stack Engineer with 7+ years of experience building scalable web applications and SaaS platforms. </p>
          <p>My core stack includes .NET Core, ASP.NET Core, React, SQL Server, and Microsoft Azure. I specialize in backend development with .NET Core and ASP.NET Core, designing high-performance APIs and systems that handle real-world production workloads.</p>
          <p>On the frontend, I work with React to build clean, responsive interfaces that integrate seamlessly with complex backend systems. My experience includes working with SQL Server, optimizing database performance, and deploying cloud-based solutions on Microsoft Azure.</p>
          <p>I focus on building systems that are not only functional, but reliable, maintainable, and designed to scale. I have improved system performance and reduced API response times by up to 30 percent in production environments.</p>
          
          {close}
        </article>

        <article id="contact" className={`${this.props.article === "contact" ? "active" : ""} ${this.props.articleTimeout ? "timeout" : ""}`} style={{ display: "none" }}>
          <h2 className="major">Build Systems That Scale.</h2>
          
          <p style={{ marginBottom: "1.5rem" }}>
            I build scalable, production-ready systems using .NET Core, React, and Microsoft Azure. I have improved API response times by up to 30 percent and built systems capable of handling high-traffic workloads and large-scale data processing.
          </p>

          <p style={{ fontWeight: 600 }}>
            Open to: Senior/Lead roles • Consulting • Technical Architecture • 
            High-impact product teams
          </p>

          <hr />

          <h3 style={{ marginTop: "2rem" }}>Project / Opportunity Inquiry</h3>

          <form onSubmit={this.handleSubmit}>
            <div className="field half first">
              <label htmlFor="name">Full Name</label>
              <input type="text" name="name" id="name" required />
            </div>

            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" placeholder="you@company.com" required />
            </div>

            <div className="field">
              <label htmlFor="company">Company / Organization</label>
              <input type="text" name="company" id="company" />
            </div>

            <div className="field">
              <label htmlFor="message">Project Details</label>
              <textarea
                name="message"
                id="message"
                rows="5"
                placeholder="Tell me about your product, scale, and technical challenges..."
                required
              ></textarea>
            </div>

            <ul className="actions">
              <li>
                <input
                  type="submit"
                  value={this.state.loading ? "Sending..." : "Start the Conversation"}
                  className="special"
                  disabled={this.state.loading}
                />
              </li>
            </ul>

            {this.state.error && (
              <p style={{ color: "#ff4d4f", marginTop: "1rem" }}>
                {this.state.error}
              </p>
            )}

            {this.state.success && (
              <p style={{ color: "#4CAF50", marginTop: "1rem" }}>
                Message sent successfully!
              </p>
            )}

          </form>

          <hr />
          
          <ul className="icons">
            <li>
              <a
                href="https://www.linkedin.com/in/mark-dyvan-aquino-97a2bb3b8/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontSize: "1.6rem" }}
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </li>

            <li>
              <a
                href="https://github.com/markdyvanaquino"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontSize: "1.6rem" }}
              >
                <i className="fab fa-github"></i>
              </a>
            </li>
          </ul>

          {close}
        </article>

      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool
}

export default Main;