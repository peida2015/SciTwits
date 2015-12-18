var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;
// var Link = require('react-router').Link;
var ProjectsIndex = require('./components/projects/ProjectsIndex');
var ProjectView = require('./components/projects/ProjectView');
var ProjectForm = require('./components/projects/ProjectForm');
// debugger

$(function () {
  var SciTwits = React.createClass({
    render: function (){
      // console.log("inside SciTwits");
      return(
        <div>
          { this.props.children }
        </div>
      )
    }
  });

  // var header = document.getElementById('header');

  var routes = (
    <Route path='/' component={SciTwits}>
      <IndexRoute component={ProjectsIndex}>
      </IndexRoute>
      <Route path='projects/form' component={ProjectForm}></Route>
      <Route path='projects/:id' component={ProjectView}></Route>
    </Route>
  );
  var root = document.getElementById("root");
  if (root) {
    ReactDOM.render(<Router>{routes}</Router>, root);
  }
  // ReactDOM.render(<div>"This is what I want you to see"</div>, header);
})
