import React from "react";

class About extends React.Component {
  constructor() {
    super();
    this.state = { experience: [], education: [] };
  }
  async componentDidMount() {
    try {
      const experienceResponse = await fetch('https://admin.codemanali.ca/api/experiences');
      const educationResponse = await fetch('https://admin.codemanali.ca/api/qualifications');
      const experienceData = await experienceResponse.json();
      const educationData = await educationResponse.json();

      // Assuming there is an 'id' field in the response data
      const sortedExperienceData = experienceData.sort((a, b) => a.id - b.id);

      this.setState({
        experience: sortedExperienceData,
        education: educationData
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
          <div>
            <p>I am pursuing education in web development, I bring a diverse background from civil engineering in India. With a keen interest and passion for coding, I am eager to embark on a new journey in the world of web development. My educational pursuits have equipped me with a strong foundation in technical concepts and problem-solving skills, which I am excited to apply to real-world projects. I am dedicated to honing my coding skills and staying up-to-date with the latest industry trends to deliver high-quality, innovative solutions. My background in civil engineering has instilled in me a meticulous attention to detail and a disciplined approach to project management. With my blend of technical aptitude, creativity, and passion for coding, I am committed to making a meaningful impact in the field of web development.</p>
            <button id="resume"><a href="./Manali_Patel-Resume.pdf" target="_blank" download="Manali_Patel-Resume">Download Resume</a></button>
          </div>
        </div>

        <h1>Experience</h1>
        {this.state.experience.map(exp => (
          <div className="exp-card">
            <div className="exp-left">
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