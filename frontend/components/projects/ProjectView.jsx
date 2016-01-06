var React = require('react');
var ProjectStore = require('../../stores/project');
var MediaStore = require('../../stores/medium');
var TwitsStore = require('../../stores/twit');
var FollowsStore = require('../../stores/follow');
var ProjectsActions = require('../../actions/ProjectsActions');
var Twits = require('../twits/Twits');
var FollowsActions = require('../../actions/FollowsActions');
var TwitsActions = require('../../actions/TwitsActions');
var MediaActions = require('../../actions/MediaActions');
var TwitForm = require('../twits/TwitForm');
var Tags = require('../tags/Tags');
var FollowButton = require('./FollowButton');


var ProjectView = React.createClass({

  getInitialState: function () {
    return ({title: "", description: "", significance: "", media:"", twits: "", follows: [], hiddenPic: "" })
  },

  componentDidMount: function () {
    this.MediaToken = MediaStore.addListener(this.fetchMedia);
    this.TwitsToken = TwitsStore.addListener(this.fetchTwits);
    this.FollowsToken = FollowsStore.addListener(this.fetchFollows);
    this.ProjectToken = ProjectStore.addListener(this.parseProject);

      // }.bind(this));
    TwitsActions.fetchTwits(this.props.params.id);
    ProjectsActions.fetchAllProjects();
    MediaActions.fetchMedia(this.props.params.id);
    FollowsActions.fetchFollows();
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
    this.ProjectToken.remove();
    this.FollowsToken.remove();
  },

  fetchMedia: function () {
    this.setState ({ media: MediaStore.getProjectMedia(this.props.params.id) });
  },

  fetchTwits: function () {
    this.setState({ twits: TwitsStore.getProjectTwits(this.props.params.id) });
  },

  fetchFollows: function () {
    this.setState({ follows: FollowsStore.getProjectFollows(this.props.params.id) });
  },

  hideImage: function (e) {
    $(".hidden-pic").css({display: "none"});
    $(".fake-bg").css({display: "none"});
    this.setState({ hiddenPic:""})
  },

  showImage: function(e) {
    console.log('clicked');
    $(".hidden-pic").css({display: "block"});
    $(".fake-bg").css({display: "block", opacity: 0.2});
    var img_tag = (<img onClick={this.hideImage}  className="u-max-full-width" id="hidden-pic" src= {e.target.src.replace(e.target.src.match("w_100,h_100,c_fill/")[0],"")}/>);
    this.setState({ hiddenPic: img_tag})
  },

  buildProject: function () {
    var cropped_url = "http://res.cloudinary.com/"+CLOUDINARY_OPTIONS.cloud_name+"/image/upload/";

    if (this.state.media !== "") {
      var media_tags = this.state.media.map(function (medium, idx) {
        // debugger
        return (
          <img key={idx} src={cropped_url+ "w_100,h_100,c_fill/"+medium.link}></img>
        )
      });
    }

    return (
        <div className="project six columns box">
          <div className="center-align follow-box">
            <h6>{ this.state.follows.length + " followers" }</h6>
          </div>
          <strong>Title:</strong>
          <div className="title">{ this.state.title }</div><br/>
          <strong>Description:</strong>
          <div className="description">{ this.state.description }</div><br/>
          <strong>Significance:</strong>
          <div className="significance">{ this.state.significance }</div><br/>
          <div className="media-file"  onClick={this.showImage}>{media_tags}</div>
          <Tags project_id={this.props.params.id} />
        </div>
    )
  },

  render: function () {
// console.log("ProjectView");

    return(
      <div className="container">

        <FollowButton project_id={this.props.params.id}
          user_id={this.props.routes[0].indexRoute.user_id}/>
        <div className="ten columns">
          <h5><a className="back-button" href="#/">&#xf00a; Back to Index</a></h5>
        </div>
        <br></br><br></br>
        {this.buildProject()}

        <div className="five columns">
          <div className="hidden-pic u-max-full-width">
            {this.state.hiddenPic}
          </div>
          <TwitForm project_id={this.props.params.id}/>
          <Twits twits={this.state.twits} user_id={this.props.routes[0].indexRoute.user_id}/>
        </div>
        <div className="fake-bg" onClick={this.hideImage}></div>
      </div>
    )
  }
});

module.exports = ProjectView;
