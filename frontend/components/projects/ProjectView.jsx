var React = require('react');
var ProjectStore = require('../../stores/project');
var ProjectActions = require('../../actions/ProjectActions');

var ProjectView = React.createClass({
  getProject: function () {
    debugger
    ProjectStore.getProject(1);
  },
  
  buildProject: function () {
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
        </div>
      </div>
    )
  },

  render: function () {
    debugger
    return(
      <div>
        {this.buildProject()}
      </div>
    )
  }
});

module.exports = ProjectView;
