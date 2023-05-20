import React from "react";
class Project extends React.Component {
  constructor() {
    super();
    this.state = {
      project: [],
      skill: [],
      project_skill: [],
      mouseEntered: false
    }; //, mouseLeave: true
  }

  async componentDidMount() {
    try {
      const projectResponse = await fetch('https://admin.codemanali.ca/api/projects');
      const skillResponse = await fetch('https://admin.codemanali.ca/api/skills');
      const projectSkillResponse = await fetch('/api/project_skill.json');
      const projectData = await projectResponse.json();
      const skillData = await skillResponse.json();
      const projectSkillData = await projectSkillResponse.json();
      this.setState({
        project: projectData,
        skill: skillData,
        project_skill: projectSkillData
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  handleMouseEnter = () => {
    this.setState({
      mouseEntered: true
    });
  };
  // handleMouseLeave = () => {
  //   this.setState({ mouseLeave: false });
  // }

  render() {
    const {
      mouseEntered
    } = this.state;
    const live = mouseEntered ? 'block' : 'hide';
    const source = mouseEntered ? 'block' : 'hide';
    // const { mouseLeave } = this.state;
    // const liveBack = mouseLeave ? 'hide' : 'block';
    // const sourceBack = mouseLeave ? 'hide' : 'block';
    return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("h1", null, "Welcome to Project Galary"), /*#__PURE__*/React.createElement("div", {
      className: "project"
    }, this.state.project.map(item => /*#__PURE__*/React.createElement("div", {
      key: item.id,
      id: "project-card"
    }, /*#__PURE__*/React.createElement("div", {
      className: "project-one"
    }, /*#__PURE__*/React.createElement("h2", null, item.title), /*#__PURE__*/React.createElement("p", null, item.content), /*#__PURE__*/React.createElement("div", {
      className: "skill"
    }, "Skill:", this.state.project_skill.filter(ps => ps.project_id === item.id).map(ps => /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("img", {
      src: this.state.skill.find(s => s.id === ps.skill_id).image,
      width: "50",
      alt: "skill"
    }))))), /*#__PURE__*/React.createElement("div", {
      id: "project-other",
      onMouseEnter: this.handleMouseEnter
    }, /*#__PURE__*/React.createElement("img", {
      src: item.image,
      alt: "project",
      width: "300",
      height: "200"
    }), /*#__PURE__*/React.createElement("button", {
      className: `${live}`
    }, /*#__PURE__*/React.createElement("a", {
      href: item.live,
      target: "_blank",
      rel: "noreferrer"
    }, "Live Website")), /*#__PURE__*/React.createElement("button", {
      className: `${source}`
    }, /*#__PURE__*/React.createElement("a", {
      href: item.source,
      target: "_blank",
      rel: "noreferrer"
    }, "Source Code")))))));
  }
}
export default Project;