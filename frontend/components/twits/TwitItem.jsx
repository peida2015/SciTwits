var React = require('react');
var TwitsActions = require('../../actions/TwitsActions');

var TwitItem = React.createClass ({

  handleDelete: function (e) {
    TwitsActions.deleteTwit(e.target.id)
  },

  render: function () {
    return (<div className="twit">
      {this.props.twit.body}
      <button className="delete" onClick={this.handleDelete}
        id={this.props.twit.id}>
        Delete</button>
      <br></br>

    by: {this.props.twit.user}<br></br>

    </div>)
  }
});

module.exports = TwitItem;
