var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router').Router;
var Route = require('react-router').Route;

// debugger

$(function () {
  var SciTwits = React.createClass({
    // console.log("inside SciTwits");

    render: function (){
      return(
        <div>
          <h3>This is SciTwits.</h3>
          { this.props.children }
        </div>
      )
    }
  });

  var routes = (
    <Route path='/' component={SciTwits} />
  );
  var root = document.getElementById("root");
  ReactDOM.render(<Router>{routes}</Router>, root);
})
