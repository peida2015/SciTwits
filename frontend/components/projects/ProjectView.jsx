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
    return ({title: "", description: "", significance: "", media:"", twits: "", follows: [], hiddenPic:"" })
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

  showImage: function(e) {
    console.log("clicked");
    $("body").css({opacity:0.7});


    //   .css({ content:"", position:"fixed", left: "0px", top: "0px",
    //   border:"1px solid black", width:"auto", height: "auto", margin: "auto", opacity: 0.7
    // })
  },

  buildProject: function () {
    var cropped_url = "http://res.cloudinary.com/"+CLOUDINARY_OPTIONS.cloud_name+"/image/upload/";

    if (this.state.media !== "") {
      var media_tags = this.state.media.map(function (medium, idx) {
        // debugger
        return (
          <a className='thumbnail' href={cropped_url+medium.link}>
            <img key={idx} src={cropped_url+ "/w_300,h_300,c_fill/"+medium.link}></img>
          </a>
        )
      });
    }

    return (
        <div className="project six columns box">
          <div className="center-align follow-box">
            <h6>{ this.state.follows.length + " followers" }</h6>
          </div>
          <strong onClick={this.showImage}>Title:</strong>
          <div className="title">{ this.state.title }</div><br/>
          <strong>Description:</strong>
          <div className="description">{ this.state.description }</div><br/>
          <strong>Significance:</strong>
          <div className="significance">{ this.state.significance }</div><br/>
          <div className="media-file">{media_tags}</div>
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
          <TwitForm project_id={this.props.params.id}/>
          <Twits twits={this.state.twits} user_id={this.props.routes[0].indexRoute.user_id}/>
        </div>
        <div className="hidden-pic">
          {this.state.hiddenPic}
        </div>
      </div>
    )
  }
});

module.exports = ProjectView;
