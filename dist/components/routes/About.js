import React from "react";
class About extends React.Component {
  constructor() {
    super();
    this.state = {
      experience: [],
      education: []
    };
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
    return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("h1", null, "ABOUT ME"), /*#__PURE__*/React.createElement("div", {
      className: "about-intro"
    }, /*#__PURE__*/React.createElement("img", {
      src: "./image/about.jpeg",
      width: "300",
      alt: "me"
    }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", null, "I am pursuing education in web development, I bring a diverse background from civil engineering in India. With a keen interest and passion for coding, I am eager to embark on a new journey in the world of web development. My educational pursuits have equipped me with a strong foundation in technical concepts and problem-solving skills, which I am excited to apply to real-world projects. I am dedicated to honing my coding skills and staying up-to-date with the latest industry trends to deliver high-quality, innovative solutions. My background in civil engineering has instilled in me a meticulous attention to detail and a disciplined approach to project management. With my blend of technical aptitude, creativity, and passion for coding, I am committed to making a meaningful impact in the field of web development."), /*#__PURE__*/React.createElement("button", {
      id: "resume"
    }, /*#__PURE__*/React.createElement("a", {
      href: "./Manali_Patel-Resume.pdf",
      target: "_blank",
      download: "Manali_Patel-Resume"
    }, "Download Resume")))), /*#__PURE__*/React.createElement("h1", null, "Experience"), this.state.experience.map(exp => /*#__PURE__*/React.createElement("div", {
      className: "exp-card"
    }, /*#__PURE__*/React.createElement("div", {
      className: "exp-left"
    }, /*#__PURE__*/React.createElement("h2", null, exp.title), /*#__PURE__*/React.createElement("p", null, exp.start, "-", exp.end)), /*#__PURE__*/React.createElement("div", {
      className: "exp-right"
    }, /*#__PURE__*/React.createElement("h2", null, exp.company), /*#__PURE__*/React.createElement("p", null, exp.detail)))), /*#__PURE__*/React.createElement("h1", null, "Education"), /*#__PURE__*/React.createElement("div", {
      className: "education"
    }, this.state.education.map(edu => /*#__PURE__*/React.createElement("div", {
      className: "education-card"
    }, /*#__PURE__*/React.createElement("h2", null, edu.degree, " - ", edu.field), /*#__PURE__*/React.createElement("p", null, edu.field), /*#__PURE__*/React.createElement("p", null, edu.location)))));
  }
}
export default About;