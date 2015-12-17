var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;
var ProjectsIndex = require('./components/projects/ProjectsIndex');
var ProjectView = require('./components/projects/ProjectView');
var ProjectForm = require('./components/projects/ProjectForm');
// debugger

$(function () {
  var SciTwits = React.createClass({
    render: function (){
      console.log("inside SciTwits");
      return(
        <div>
          <h4></h4>
          { this.props.children }
        </div>
      )
    }
  });

  // var header = document.getElementById('header');

  var routes = (
    <Route path='/' component={SciTwits}>
      <IndexRoute component={ProjectsIndex} />
      <Route path='api/projects/:id' component={ProjectView}></Route>
      <Route path='api/projects/' component={ProjectForm}></Route>
    </Route>
  );
  var root = document.getElementById("root");
  debugger
  ReactDOM.render(<Router>{routes}</Router>, root);
  // ReactDOM.render("This is what I want you to see", header);
})
