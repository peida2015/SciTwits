var React = require('react');

var TwitItem = React.createClass ({

  render: function () {
    // debugger
    return (<div>
      {this.props.twit.body} <br></br>
    by: {this.props.twit.user}<br></br>

    </div>)
  }
});

module.exports = TwitItem;
