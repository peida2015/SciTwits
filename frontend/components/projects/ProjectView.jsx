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
    this.ProjectToken = ProjectStore.addListener(function () {
      var project = ProjectStore.find(this.props.params.id);
      this.setState({
        title: project.title,
        description: project.description,
        significance: project.significance
      })
    }.bind(this));
      // debugger
      // }.bind(this));
    TwitsActions.fetchTwits(this.props.params.id);
    ProjectActions.fetchAllProjects();
    MediaActions.fetchMedia(this.props.params.id);
    debugger
    // this.fetchTwits();
    // this.fetchMedia();
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
    // debugger
    this.setState({ twits: TwitsStore.getProjectTwits(this.props.params.id) });
    // this.render()
  },

  buildProject: function () {
    // debugger
    var cropped_url = "http://res.cloudinary.com/"+CLOUDINARY_OPTIONS.cloud_name+"/image/upload/";
    if (this.props.location.state.media) {
      var media_tags = this.props.location.state.media.map(function (medium, idx) {
        return (<img key={idx} src={cropped_url+ "/w_300,h_300,c_fill/"+medium.medium.link}></img>)
      });
    }
    //get project info from this.state.project
    //check if this.state.project is undefined
    //if so return empty div or loading or spinner
    return (
      <div>
        <div className="project">
          <strong>Title:</strong>
          <div className="title">{ this.state.title }</div>
          <strong>Description:</strong>
          <div className="description">{ this.state.description }</div>
          <strong>Significance:</strong>
          <div className="significance">{ this.state.significance }</div>
          // <strong>Project Leader:</strong>
          // <div className="leader"></div>
          <div>{media_tags}</div>
        </div>
      </div>
    )
  },

  // sendTwits: function () {
  //   return this.state.twits !== undefined ? this.state.twits : (<div>loading...</div>)
  // },

  render: function () {
console.log("ProjectView");
    return(
      <div>
        {this.buildProject()}
        <TwitForm project_id={this.props.params.id}/>
        <Twits twits={this.state.twits}/>
      </div>
    )
  }
});

module.exports = ProjectView;
