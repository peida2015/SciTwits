var React = require('react');
var ProjectStore = require('../../stores/project');
var MediaStore = require('../../stores/medium');
var ProjectActions = require('../../actions/ProjectActions');

var ProjectView = React.createClass({
  // getProject: function () {
  //   debugger
  //   ProjectStore.getProject(1);
  // },
  componentDidMount: function () {
    this.listenerToken = MediaStore.addListener(this.fetchMedia)
  },

  componentWillUnmount: function () {
    this.listenerToken.removeListener()
  },

  fetchMedia: function () {
    debugger
    this.media = MediaStore.getProjectMedia(this.props.location.state.project_id);
  },

  buildProject: function () {
    // debugger
    var cropped_url = "http://res.cloudinary.com/"+CLOUDINARY_OPTIONS.cloud_name+"/image/upload/";
    var media_tags = this.props.location.state.media.map(function (medium) {
      return (<img src={cropped_url+ "/w_300,h_300,c_fill/"+medium.medium.link}></img>)
    });

    return (
      <div>
        <div className="project">
          <strong>Title:</strong>
          <div className="title">{ this.props.location.state.title }</div>
          <strong>Description:</strong>
          <div className="description">{ this.props.location.state.description }</div>
          <strong>Significance:</strong>
          <div className="significance">{ this.props.location.state.significance }</div>
          // <strong>Project Leader:</strong>
          // <div className="leader"></div>
          <div>{media_tags}</div>
        </div>
      </div>
    )
  },

  render: function () {
    return(
      <div>
        {this.buildProject()}
      </div>
    )
  }
});

module.exports = ProjectView;
