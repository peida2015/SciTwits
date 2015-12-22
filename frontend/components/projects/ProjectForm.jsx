var React = require('react');
var ProjectActions = require('../../actions/ProjectActions');
var History = require('react-router').History;
var MediaActions = require('../../actions/MediaActions');
var UploadButton = require('./UploadButton');

var ProjectForm = React.createClass({
  mixins: [History],

  getInitialState: function () {
    return ({ uploadResult: "", title: "", description: "", significance: "", media: []})
  },

  // componentDidMount: function () {
  //   debugger
  //   this.addListener("");
  // },

  handleSubmit: function(e) {
    e.preventDefault();
    var that = this;
    var data = {
      project : {
        title: e.target[0].value,
        description: e.target[1].value,
        significance: e.target[2].value,
        media: this.state.media
      }
    };
    ProjectActions.createProject(data, function (proj_id) {
      MediaActions.saveMedia([that.state.media, proj_id], that.redirectToView)
      debugger
    });
  },

  handleChange: function (e) {
    // debugger
    // this.setState({ e.target.dataset["name"] : e.target.value});
    if (e.target.dataset["name"]==="title") {
      this.setState({title : e.target.value })
    } else if (e.target.dataset["name"]==="description") {
      this.setState({description : e.target.value })
    } else {
      this.setState({significance : e.target.value })
    }
    // debugger;
    // this.setState(e.target.value
  },

  redirectToView: function(id) {
    this.props.history.pushState(this.state, 'projects/'+id);
  },

  uploadCallback: function(error, results){
    if(!error){
      // debugger
      results.forEach(function (result) {
        var data = { medium: {
          public_id: result.public_id,
          original_filename: result.original_filename,
          link: result.url.match(/[^\\/]+\.[^\\/]+$/)[0],
          medium_type: result.resource_type
        } };
        this.state.media.push(data);
      }.bind(this));
      this.setState({ uploadResult: "Successfully uploaded: "+results.length+" files"});
      // this.props.postImage(results[0]);
    } else {
      this.setState({ uploadResult: "Something happened during upload.  Try again!"});
    }
    // debugger
    // this.render();
          // console.log(results);
  },

  uploadedTag: function (medium, idx) {
    // debugger
    var cropped_url = "http://res.cloudinary.com/"+CLOUDINARY_OPTIONS.cloud_name+"/image/upload/";

    return (
      <div key={idx}>
        {medium.medium.original_filename}
        <img src={cropped_url+ "/w_150,h_150,c_fill/"+medium.medium.link} />
        <br></br>
      </div>)
  },

  render: function () {
    console.log("Form rendered");

    if (this.state.media.length !== 0) {
      var uploaded = "Uploaded so far:";
      var media_tags = this.state.media.map(this.uploadedTag)
    } else {
      var uploaded = "";
      var media_tags = ""
    }

    // debugger
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <a href="#/"><h5>Back to Index</h5></a>
          <label>Title:</label>
          <input type="text" value={this.state.title}
                  onChange={this.handleChange}
                  placeholder="Your AMAZING research deserves something AMAZING"
                  data-name="title"></input>
          <br></br>
          <label>Description:</label>
          <textarea placeholder="Share your experiment or theory emphasis."
                    onChange={this.handleChange}
                    value={this.state.description}
                    data-name="description"></textarea>
          <br></br>
          <label>Significance:</label>
          <textarea placeholder="Why it matters? *Optional"
                    value={this.state.significance}
                    data-name="significance"
                    onChange={this.handleChange}></textarea>
          <br></br>
          <label>Upload a photo!</label>
          <UploadButton uploadCallback={this.uploadCallback}/>
                {this.state.uploadResult}<br></br>
                {uploaded}<br></br>
                {media_tags}
          <br></br>
          <button>Share Your Progress</button>
        </form>
      </div>
    )
  }
});

module.exports = ProjectForm;
