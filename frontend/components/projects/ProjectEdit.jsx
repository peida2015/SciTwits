var React = require('react');
var ProjectsActions = require('../../actions/ProjectsActions');
// var History = require('react-router').History;

var ProjectEdit = React.createClass({
  // mixins: [History],

  getInitialState: function () {
    var project = this.props.location.state.projects.find(function(project){
      return this.props.location.query.id == project.id
    }.bind(this));
    return ({ title: project.title,
              description: project.description,
              significance: project.significance})
  },

  handleSubmit: function(e) {
    e.preventDefault();
    var data = {
      project : {
        id: this.props.location.query.id,
        title: e.target[0].value,
        description: e.target[1].value,
        significance: e.target[2].value
      }
    };
    ProjectsActions.updateProject(data, this.redirectToShow);
  },

  handleChange: function (e) {

    // this.setState({ e.target.dataset["name"] : e.target.value});
    if (e.target.dataset["name"]==="title") {
      this.setState({title : e.target.value })
    } else if (e.target.dataset["name"]==="description") {
      this.setState({description : e.target.value })
    } else {
      this.setState({significance : e.target.value })
    }
    ;
    // this.setState(e.target.value
  },

  redirectToShow: function(id) {
    this.props.history.pushState(this.state, 'projects/'+id);
  },

  render: function () {

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h5><a href="#/">Back to Index</a></h5>
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
                  <button>Share Your Progress</button>
        </form>
      </div>
    )
  }
});

module.exports = ProjectEdit;
