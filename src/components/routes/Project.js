import React from "react";

class Project extends React.Component {
  constructor() {
    super();
    this.state = { project: [], skill: [], project_skill: [] };
  }

  async componentDidMount() {
    try {
      const projectResponse = await fetch('/api/projects.json');
      const skillResponse = await fetch('/api/skills.json');
      const projectSkillResponse = await fetch('/api/project_skill.json');

      const projectData = await projectResponse.json();
      const skillData = await skillResponse.json();
      const projectSkillData = await projectSkillResponse.json();

      this.setState({
        project: projectData[2].data,
        skill: skillData[2].data,
        project_skill: projectSkillData[2].data
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  render() {
    return (
      <main>
        {this.state.project.map(item => (
          <div key={item.id} id="project-card">
            <div className="project-one">
              <h2>{item.title}</h2>
              <p>{item.content}</p>
              <h3>Skill:
                {this.state.project_skill
                  .filter(ps => ps.project_id === item.id)
                  .map(ps => (
                    <span key={ps.id}>
                      {this.state.skill.find(s => s.id === ps.skill_id).title},
                    </span>
                  ))}
              </h3>
            </div>
            <div className="project-other">
              <img src={item.image} alt="project" width="300" />
              <button><a href={item.live} target="_blank">Live Website</a></button>
              <button><a href={item.source} target="_blank">Source Code</a></button>
            </div>
          </div>
        ))}
      </main>
    );
  }
}

export default Project;
