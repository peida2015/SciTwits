var React = require('react');
var ProjectStore = require('../../stores/project');
var ProjectActions = require('../../actions/ProjectActions');
// var History = require('react-router').History;

var ProjectsIndex = React.createClass({
  // mixins:[History],

  getInitialState: function () {
    return ({ projects: [] });
  },

  redirectToView: function (e) {
    // debugger
    e.preventDefault();
    var project_id =e.target.parentElement.dataset.project_id
    this.props.history.pushState(this.state, 'projects/'+project_id);
  },

  componentDidMount: function () {
    // debugger
    ProjectActions.fetchAllProjects();
    this.listenerToken = ProjectStore.addListener(this.handleStoreChange);
  },

  componentWillUnmount: function () {
    this.listenerToken.remove();
  },

  handleStoreChange: function () {
    // console.log("Store changed");
    this.setState({ projects: ProjectStore.all() })
  },

  handleDelete: function (e) {
    // console.log("Clicked Remove");
    ProjectActions.deleteProject(e.target.id)
  },

  handleEditClick: function (e){
    var project = ProjectStore.find(e.target.id);
    if (project) {
      // debugger
      this.props.history.pushState(this.state, 'projects/edit', {id: e.target.id});
    } else {
      alert("project doesn't exist!");
    }
  },

  buildButtons: function (project) {
    if (this.props.route.user_id == project.owner_id) {
      var removeButton =(
        <button onClick={this.handleDelete}
          id={project.id}>
          Remove Project</button>)
      var editButton =(
        <button onClick={this.handleEditClick}
          id={project.id}>
          Edit Project</button>)
    } else {
      var removeButton = "";
      var editButton = ""
    }
    return [removeButton, editButton];
  },

  buildProject: function (project, idx) {
    // debugger
    var buttons = this.buildButtons(project);

    return (
      <div key={idx} >
          <div className="project" onClick={this.redirectToView} data-project_id={project.id}>
            <strong>Title:</strong>
            <div className="title">{ project.title }</div>
            <strong>Description:</strong>
            <div className="description">{ project.description }</div>
            <strong>Significance:</strong>
            <div className="significance">{ project.significance }</div>

          </div>
        {buttons[0]}
        {buttons[1]}
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

        <h4>Projects Index</h4>
        { proj_view }
      </div>
    )
  }
});

module.exports = ProjectsIndex;
