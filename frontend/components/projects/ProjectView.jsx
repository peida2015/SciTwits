var React = require('react');
var ProjectStore = require('../../stores/project');
var MediaStore = require('../../stores/medium');
var TwitsStore = require('../../stores/twit');
var ProjectActions = require('../../actions/ProjectActions');
var TwitForm = require('../twits/TwitForm');
var Twits = require('../twits/Twits');
var TwitsActions = require('../../actions/TwitsActions');
var MediaActions = require('../../actions/MediaActions');

var ProjectView = React.createClass({

  getInitialState: function () {
    return ({title: "", description: "", significance: "", media:"", twits: ""})
  },
  //return find result from store using this.props.params.id

  // getProject: function () {
  // },
  //fetch projects on mount

  componentDidMount: function () {
    this.MediaToken = MediaStore.addListener(this.fetchMedia);
    this.TwitsToken = TwitsStore.addListener(this.fetchTwits);
    this.ProjectToken = ProjectStore.addListener(this.parseProject);

      // }.bind(this));
    TwitsActions.fetchTwits(this.props.params.id);
    ProjectActions.fetchAllProjects();
    MediaActions.fetchMedia(this.props.params.id);
    // this.fetchTwits();
    // this.fetchMedia();
  },

  parseProject: function () {
    var project = ProjectStore.find(this.props.params.id);
    this.setState({
      title: project.title,
      description: project.description,
      significance: project.significance
    })
  },

  componentWillUnmount: function () {
    this.MediaToken.remove();
    this.TwitsToken.remove();
  },

  fetchMedia: function () {
    console.log("Fetched");
    this.setState ({ media: MediaStore.getProjectMedia(this.props.params.id) });
    // this.render()
  },

  fetchTwits: function () {

    this.setState({ twits: TwitsStore.getProjectTwits(this.props.params.id) });
    // this.render()
  },

  buildProject: function () {

    var cropped_url = "http://res.cloudinary.com/"+CLOUDINARY_OPTIONS.cloud_name+"/image/upload/";
    if (this.props.location.state.media) {
      var media_tags = this.props.location.state.media.map(function (medium, idx) {
        return (<img key={idx} src={cropped_url+ "/w_300,h_300,c_fill/"+medium.medium.link}></img>)
      });
    }

    return (
      <div>
        <div className="project">
          <strong>Title:</strong>
          <div className="title">{ this.state.title }</div>
          <strong>Description:</strong>
          <div className="description">{ this.state.description }</div>
          <strong>Significance:</strong>
          <div className="significance">{ this.state.significance }</div>
          <div>{media_tags}</div>
        </div>
      </div>
    )
  },

  render: function () {
// console.log("ProjectView");
    // debugger
    return(
      <div className="container">
        <a href="#/"><h5>Back to Index</h5></a>
        {this.buildProject()}
        <TwitForm project_id={this.props.params.id}/>
        <Twits twits={this.state.twits} user_id={this.props.routes[0].indexRoute.user_id}/>
      </div>
    )
  }
});

module.exports = ProjectView;
