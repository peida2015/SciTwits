var React = require('react');
var TwitsActions = require('../../actions/TwitsActions');

var TwitForm = React.createClass ({
  getInitialState: function () {
    return ({ body: "" , project_id: this.props.project_id })
  },

  changeHandler: function (e) {
    this.setState({ body: e.target.value})
  },

  handleSubmit: function (e) {
    // debugger
    e.preventDefault();
    var twit = {
      twit: {
        body: this.state.body,
        project_id: this.state.project_id
      }
    };
    TwitsActions.saveTwit(twit);
  },

  render: function () {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.changeHandler} value={this.state.body} placeholder="Be brief: max 150 chars">
          </input>
          <input type="submit" value="Submit Twit"></input>
        </form>
      </div>
    )
  }
});

module.exports = TwitForm;
