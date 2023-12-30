import React from "react";

class Project extends React.Component {
  constructor() {
    super();
    this.state = { project: [], skill: [], project_skill: [], mouseEntered: false };//, mouseLeave: true
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
    this.setState({ mouseEntered: true });
  }
  // handleMouseLeave = () => {
  //   this.setState({ mouseLeave: false });
  // }

  render() {
    const { mouseEntered } = this.state;
    const live = mouseEntered ? 'block' : 'hide';
    const source = mouseEntered ? 'block' : 'hide';
    // const { mouseLeave } = this.state;
    // const liveBack = mouseLeave ? 'hide' : 'block';
    // const sourceBack = mouseLeave ? 'hide' : 'block';
    return (
      <main>
        <h1>Welcome to Project Galary</h1>
        <div className="project">
          {this.state.project.map(item => (
            <div key={item.id} id="project-card">
              <div className="project-one">
                <h2>{item.title}</h2>
                <p>{item.content}</p>
                <div className="skill">Skills:
                  {item.skill}
                </div>
              </div>
              <div id="project-other" onMouseEnter={this.handleMouseEnter}>
                <img src={item.image && item.image.replace("localhoststorage", "admin.codemanali.ca/storage")} alt="project" width="300" height="200" />
                <button className={`${live}`}><a href={item.live} target="_blank" rel="noreferrer">Live Website</a></button>
                <button className={`${source}`}><a href={item.source} target="_blank" rel="noreferrer">Source Code</a></button>
              </div>
            </div>
          ))}
        </div>
      </main>
    );
  }
}

export default Project;
