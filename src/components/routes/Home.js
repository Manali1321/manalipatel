import React from "react";


class Home extends React.Component {

  render() {
    return (
      <main>
        <div id="intro">
          <div className="intro-left">
            <p className="profession">Web Developer</p>
            <h1>Manali A. <br></br>Patel</h1>
            <p className="about-me">I bring a wealth of expertise in full stack development, usability, testing, design software, and project management. With a strong motivation for success, I am committed to creating professional and innovative web solutions that exceed expectations.</p>
          </div>
          <div className="intro-right">
            <img src="./image/myphoto.png" width="300" alt="me"></img>
          </div>
        </div>
        <div id="home-about">
          <div className="home-about-me">
            <img src="./image/skill/inspire.png" width="100" alt="img"></img>
            <div className="home-about-detail">
              <h2>Curiosity Driven</h2>
              <p>I possess a deep curiosity and a constant desire to learn more. I enjoy probing safely but steadily to find out the "why" behind things, and I am always open to new ideas and approaches.</p>
            </div>
          </div>
          <div className="home-about-me">
            <img src="./image/skill/inspire.png" width="100" alt="img"></img><div>
              <div className="home-about-detail">
                <h2>Being Present</h2>
                <p>I believe in being present in the moment, fully engaged in the task at hand.</p>
              </div>
            </div>
          </div>
          <div className="home-about-me">
            <img src="./image/skill/inspire.png" width="100" alt="img"></img>
            <div className="home-about-detail">
              <h2>Hands-On-Mentality</h2>
              <p>Practice makes me improve. So I like to sharpen my skills and search for the right opportunities. I learn well by observing, but it stays best when I do it.</p></div>
          </div>
          <div className="home-about-me">
            <img src="./image/skill/inspire.png" width="100" alt="img"></img>
            <div className="home-about-detail">
              <h2>Empathetic</h2>
              <p>I approach my work with compassion and strive to foster a positive and inclusive environment.</p></div>
          </div>
        </div>
      </main >
    )
  }
}
export default Home;