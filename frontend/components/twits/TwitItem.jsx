var React = require('react');
var TwitsActions = require('../../actions/TwitsActions');

var TwitItem = React.createClass ({

  handleDelete: function (e) {
    TwitsActions.deleteTwit(e.target.id);
  },

  render: function () {
    if (this.props.twit.user_id == this.props.user_id) {
      var deleteButton = <button className="small" onClick={this.handleDelete}
          id={this.props.twit.id}>
          <i className="fa fa-remove fa-2x" /></button>
    } else {
      var deleteButton = "";
    }
    // debugger
    return (<div className="twit">
      {this.props.twit.body}
      <div className="container one column twit-delete">
        {deleteButton}
      </div>
      <br></br>

    by: {this.props.twit.user}<br></br>

    </div>)
  }
});

module.exports = TwitItem;
