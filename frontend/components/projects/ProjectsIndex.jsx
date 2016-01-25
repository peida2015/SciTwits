var React = require('react');
var ProjectStore = require('../../stores/project');
var FollowsActions = require('../../actions/FollowsActions');
var ProjectsActions = require('../../actions/ProjectsActions');
var TagsActions = require('../../actions/TagsActions');
var TagStore = require('../../stores/tag');
var FollowButton = require('./FollowButton');

// var History = require('react-router').History;

var ProjectsIndex = React.createClass({

  getInitialState: function () {
    return ({ projects: [], fetchState: "See All Projects", favoriteTags:[]});
  },

  redirectToView: function (id) {
    this.props.history.pushState(this.state, 'projects/'+id, {user_id: this.props.route.user_id});
  },

  componentDidMount: function () {
    ProjectsActions.fetchFollowedProjects(this.props.route.user_id);
    this.listenerToken = ProjectStore.addListener(this.handleStoreChange);
    TagsActions.fetchFavoriteTags();
    this.TagsListerner = TagStore.addListener(this.handleTagChange);
  },

  handleToggleGet: function () {
    if (this.state.fetchState ==="Projects You Followed") {
      ProjectsActions.fetchFollowedProjects(this.props.route.user_id);
      this.setState({fetchState: "See All Projects"})
    } else {
      ProjectsActions.fetchAllProjects();
      this.setState({fetchState: "Projects You Followed"})
    }
    FollowsActions.fetchFollows();
  },
  componentWillUnmount: function () {
    this.listenerToken.remove();
    this.TagsListerner.remove();
  },

  handleStoreChange: function () {
    this.setState({ projects: ProjectStore.all() })
  },

  handleTagChange: function () {
    this.setState({ favoriteTags: TagStore.all() })
  },

  handleDelete: function (e) {
    ProjectsActions.deleteProject(e.currentTarget.id)
  },

  handleEditClick: function (e){
    var project = ProjectStore.find(e.currentTarget.id);
    if (project) {
      this.props.history.pushState(this.state, 'projects/edit', {id: e.currentTarget.id});
    } else {
      this.TagsListerner.remove();
      alert("project doesn't exist!");
    }
  },

  tagSearch: function (tag_id) {
    ProjectsActions.fetchTaggedProjects(tag_id)
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
          className='tooltip small'
          value="Delete"
          id={project.id}>
          <i className="fa fa-remove fa-2x" />
        </button>)
      var editButton =(
        <button onClick={this.handleEditClick}
          className='tooltip small'
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
    var buttons = this.buildButtons(project);

    return (
      <div key={idx} className="project five columns box">
          <div className="ten columns" onClick={this.redirectToView.bind(null, project.id)}>
            <div className="clickable">
              <strong>Title:</strong><br/>
              { project.title }
            </div>
            <br/>
            <div className="clickable">
              <strong>Significance:</strong><br/>
              { project.significance }
            </div>
          </div>

          <div className="buttons-wrapper one column">
            {this.followButton(project.id)}
            <div className='container'>
              {buttons[0]}
            </div>
            <div className='container'>
              {buttons[1]}
            </div>
          </div>
      </div>
    )
  },

  buildTags: function (tag, idx) {
    return (<strong className="tags u-pull-right clickable" key={idx} onClick={this.tagSearch.bind(null,tag.id)}>{"#"+tag.name}</strong>)
  },

  render: function () {
    console.log('render ProjectsIndex');
    var proj_view = this.state.projects.map(this.buildProject);
    var tags = this.state.favoriteTags.map(this.buildTags);
    return (
      <div>
          <div className='fit-height'>
            <div className='fit-height'>
              <button className="get-button" onClick={this.handleToggleGet}><h6>{this.state.fetchState}</h6></button>
              <div className='outline eight columns u-pull-right'>
                <div className='eight columns u-pull-right'>
                  {tags}
                </div>
                <span className="tagged u-pull-left">Explore projects tagged:</span>
              </div>
              <br></br>
            </div>
            <div className='sub-bg fit-height'>
              <div></div>
              { proj_view }
            </div>

          </div>
      </div>
    )
  }
});

module.exports = ProjectsIndex;
