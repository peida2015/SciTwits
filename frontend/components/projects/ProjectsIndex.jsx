var React = require('react');
var ProjectStore = require('../../stores/project');
var ProjectActions = require('../../actions/ProjectActions');

var ProjectsIndex = React.createClass({
  getInitialState: function () {
    return ({ projects: [] });
  },

  componentDidMount: function () {
    debugger
    ProjectActions.fetchAllProjects();
    this.listenerToken = ProjectStore.addListener(this.handleStoreChange);
    // document.addListener("Click", this.handleClick);
  },

  componentWillUnmount: function () {
    this.listenerToken.remove();
  },

  handleStoreChange: function () {
    console.log("Store changed");
    this.setState({ projects: ProjectStore.all() })
  },

  handleDelete: function (e) {
    debugger;
    console.log("Clicked Remove");
    ProjectActions.deleteProject(e.target.id)
  },

  buildProject: function (project, idx) {
    return (
      <div key={idx}>
        <div className="project">
          <strong>Title:</strong>
          <div className="title">{ project.title }</div>
          <strong>Description:</strong>
          <div className="description">{ project.description }</div>
          <strong>Significance:</strong>
          <div className="significance">{ project.significance }</div>
          // <strong>Project Leader:</strong>
          // <div className="leader"></div>
        </div>
        <button onClick={this.handleDelete} id={project.id}>Remove Project</button>
      </div>
    )
  },

  render: function () {
    // debugger
    var proj_view = this.state.projects.map(this.buildProject);
    // console.log("ProjectsIndex");
    return (
      <div>
        <a href="#projects/form"><h5>Create New</h5></a>

        <h4>ProjectsIndex</h4>
        { proj_view }
      </div>
    )
  }
});

module.exports = ProjectsIndex;
