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
          <p>Hi there, I&#x27;m David and welcome to my site. I&#x27;m a full-stack web developer based in West LA. I’ve worked on various projects such as cross-platform mobile application, full-stack web application, and .NET web application. If you want to learn more about my previous projects, please check out my <a href="#work" onClick={(e) => {e.preventDefault(); this.props.onOpenArticle('work');}}>awesome work</a>. </p>
          {close}
        </article>

        <article id="work" className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Work</h2>
          <span className="image main"><img src="/static/images/pic02.jpg" alt="" /></span>
          <p>Check out my pass projects and working experiences below, or you can <a href="/static/David Wu Resume.pdf" target="_blank">download my resume (PDF)</a>. </p>
          <h4>Projects</h4>
          <table>
            <tbody>
              <tr>
                <td>
                  <h4>
                    <a href="https://poolpal.wudavid.com/">PoolPal</a>
                  </h4>
                </td>
                <td>Cross-platform mobile application for easily arranging carpool rides. Generates the quickest and easiest route to a final destination while allowing the driver to pick up all the passengers along the way.</td>
                <td>​ionic Framework, Firebase, HTML, CSS, JavaScript, Google Maps API</td>
              </tr>
              <tr>
                <td>
                  <h4>NEST</h4>
                </td>
                <td>Award-winning senior design project developing an Airline Operations Center System. Provides a front-end interface for a real-world control center in monitoring 100+ UAVs at the same time.</td>
                <td>C#, ASP.NET framework, REST API, Microsoft SQL</td>
              </tr>
            </tbody>
          </table>
          <h4>Working Experiences</h4>
          <table>
            <tbody>
              <tr>
                <td>
                  <h4>Freelance Web Developer</h4>
                  <i>Sep. 2017 - Present</i>
                </td>
                <td>Developed and deployed <a href="http://st_life.singtaola.com">st_life.singtaola.com</a> on a remote server for Sing Tao Daily Newspapers using the MERN stack. Includes a control center for their staff to manage and monitor contents on the main site. </td>
                <td>HTML, CSS, MERN (MongoDB, Express.js, React, and Node.js) stack, IaaS (Linux Ubuntu Server deployed on DigitalOcean)</td>
              </tr>
              <tr>
                <td>
                  <h4>Princess Cruises</h4>
                  <i>Jun. 2016 - Aug. 2016</i>
                </td>
                <td>Collaborated with the financial support team in developing offline functionality to an online web application.</td>
                <td>​HTML, CSS, JavaScript, ServiceWorker, IndexedDB, Oracle Application Express (APEX), Oracle Database Express.</td>
              </tr>
            </tbody>
          </table>
          {close}
        </article>

        <article id="about" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">About</h2>
          <span className="image main"><img src="/static/images/pic03.jpg" alt="" /></span>
          <p>I am a Senior Full-Stack Software Engineer with over 7 years of experience building scalable, production-grade systems. I specialize in architecting modern web applications using React, Node.js, and AWS, with a strong focus on distributed systems, performance optimization, and secure cloud-native infrastructure.</p>
          <p>I have designed microservices architectures, built high-traffic APIs, implemented DevSecOps-driven CI/CD pipelines, and optimized both SQL and NoSQL databases for reliability and speed. My approach goes beyond feature delivery — I build systems that are secure, maintainable, and engineered to scale.</p>
          <p>I take ownership across the full lifecycle, from architecture and development to deployment and operational stability. I value clean design, automation, and long-term engineering excellence.</p>
          {close}
        </article>

        <article id="contact" className={`${this.props.article === "contact" ? "active" : ""} ${this.props.articleTimeout ? "timeout" : ""}`} style={{ display: "none" }}>
          <h2 className="major">Build Systems That Scale.</h2>

          <p style={{ marginBottom: "1.5rem" }}>
            I design and lead the development of production-grade systems used in real-world environments. <br />
            From architecture and microservices to cloud infrastructure and CI/CD, I build software engineered for reliability, performance, and long-term scale.
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
                href="https://www.linkedin.com/in/davidwaynewu"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontSize: "1.6rem" }}
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </li>

            <li>
              <a
                href="https://github.com/davidwwu"
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