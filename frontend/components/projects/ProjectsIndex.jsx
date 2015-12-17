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
    ProjectStore.addListener(this.handleStoreChange);
    // this.addListener("Click", this.handleClick);

  },

  // componentWillMount: function () {
    // debugger
    // ProjectStore.removeListener(this.handleStoreChange);
  // },

  handleStoreChange: function () {
    this.setState({ projects: ProjectStore.all() })
  },

  buildProject: function (project, idx) {
    return (
      <div key={idx}>
        <strong>Title:</strong>
        <div className="title">{ project.title }</div>
        <strong>Description:</strong>
        <div className="description">{ project.description }</div>
        <strong>Significance:</strong>
        <div className="significance">{ project.significance }</div>
        // <strong>Project Leader:</strong>
        // <div className="leader"></div>
      </div>
    )
  },

  render: function () {
    debugger
    var proj_view = this.state.projects.map(this.buildProject);
    // console.log("ProjectsIndex");
    return (
      <div>
        <h4>ProjectsIndex</h4>
        { proj_view }
      </div>
    )
  }
});

module.exports = ProjectsIndex;
