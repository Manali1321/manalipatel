import React from "react";

class About extends React.Component {
  constructor() {
    super();
    this.state = { experience: [], education: [] };
  }
  async componentDidMount() {
    try {
      const experienceResponse = await fetch('/api/experiences.json');
      const educationResponse = await fetch('/api/qualifications.json');
      const experienceData = await experienceResponse.json();
      const educationData = await educationResponse.json();
      this.setState({
        experience: experienceData[2].data,
        education: educationData[2].data
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  render() {
    return (
      <main>
        <h1>ABOUT ME</h1>
        <div className="about-intro">
          <img src="./image/about.jpeg" width="300" alt="me"></img>
          <p>I am pursuing education in web development, I bring a diverse background from civil engineering in India. With a keen interest and passion for coding, I am eager to embark on a new journey in the world of web development. My educational pursuits have equipped me with a strong foundation in technical concepts and problem-solving skills, which I am excited to apply to real-world projects. I am dedicated to honing my coding skills and staying up-to-date with the latest industry trends to deliver high-quality, innovative solutions. My background in civil engineering has instilled in me a meticulous attention to detail and a disciplined approach to project management. With my blend of technical aptitude, creativity, and passion for coding, I am committed to making a meaningful impact in the field of web development.</p>
        </div>

        <h1>Experience</h1>
        {this.state.experience.map(exp => (
          <div class="exp-card">
            <div class="exp-left">
              <h2>{exp.title}</h2>
              <p>{exp.start}-{exp.end}</p>
            </div>
            <div className="exp-right">
              <h2>
                {exp.company}
              </h2>
              <p>{exp.detail}</p>
            </div>
          </div>

        ))}

        <h1>Education</h1>
        <div className="education">
          {this.state.education.map(edu => (
            <div className="education-card">
              <h2>{edu.degree} - {edu.field}</h2>
              <p>{edu.field}</p>
              <p>{edu.location}</p>
            </div>
          ))}
        </div>
      </main>
    )
  }
}
export default About;