var React = require('react');
var ProjectStore = require('../../stores/project');
var ProjectsActions = require('../../actions/ProjectsActions');
var FollowButton = require('./FollowButton');
// var History = require('react-router').History;

var ProjectsIndex = React.createClass({
  // mixins:[History],

  getInitialState: function () {
    return ({ projects: [] });
  },

  redirectToView: function (id) {
    // debugger;
    // e.preventDefault();
    this.props.history.pushState(this.state, 'projects/'+id, {user_id: this.props.route.user_id});
  },

  componentDidMount: function () {
    // debugger
    ProjectsActions.fetchAllProjects();
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
    ProjectsActions.deleteProject(e.target.id)
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

  followButton: function (project_id) {
    if (this.props.route.user_id) {
      return (<FollowButton project_id={project_id}
                user_id={this.props.route.user_id}/>)
    } else {
      return ""
    }
  },

  buildButtons: function (project) {
    if (this.props.route.user_id == project.owner_id) {
      var removeButton =(
        <button onClick={this.handleDelete}
          className='tooltip'
          value="Delete"
          id={project.id}>
          <i className="fa fa-remove fa-2x" />
        </button>)
      var editButton =(
        <button onClick={this.handleEditClick}
          className='tooltip'
          value="Edit"
          id={project.id}>
          <i className="fa fa-edit fa-2x" />
        </button>)
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
      <div key={idx} className="project five columns box">
          <div className="ten columns" onClick={this.redirectToView.bind(null, project.id)}>
            <div className="title">
              <strong>Title:</strong><br/>
              { project.title }
            </div>

            <div className="description">
              <strong>Description:</strong><br/>
              { project.description }
            </div>

            <div className="significance">
              <strong>Significance:</strong><br/>
              { project.significance }
            </div>
          </div>

          <div className="buttons-wrapper one column">
            {this.followButton(project.id)}
            {buttons[0]}
            {buttons[1]}
          </div>
      </div>
    )
  },

  render: function () {
    // debugger
    var proj_view = this.state.projects.map(this.buildProject);
    // console.log("ProjectsIndex");

    return (
      <div>
        <h5><a href="#projects/form">Create New</a></h5>

        <h4>Projects Index</h4>
        { proj_view }
      </div>
    )
  }
});

module.exports = ProjectsIndex;
