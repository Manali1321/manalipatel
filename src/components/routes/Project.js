import React from "react";
import Projects from "../../api/projects.json";

class Project extends React.Component {
  constructor() {
    super();
    this.state = Projects[2].data;
    console.log(this.state);

  }
  render() {
    return (
      <main>
        <div>
          {this.state.map(item => (
            <img src={item.image} alt="i am image" width="300" />
          ))}
        </div>

      </main>
    )
  }
}
export default Project;