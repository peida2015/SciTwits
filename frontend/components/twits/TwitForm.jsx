var React = require('react');
var TwitsActions = require('../../actions/TwitsActions');
var TagsActions = require('../../actions/TagsActions');

var TwitForm = React.createClass ({
  getInitialState: function () {
    return ({ body: "" , project_id: this.props.project_id, tags: ""})
  },

  changeHandler: function (e) {
    // debugger
    this.setState({ body: e.target.value })
    if (e.target.value.length <= 150) {
      $('.twit-error').hide()
    } else {
      $('.twit-error').show()
    }
  },

  handleTagChange: function (e) {
    this.setState({ tags: e.target.value})
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
    var tags = this.state.tags.split(",").map(function (tag){
      return tag.trim();
    });
    if (this.state.body.length <=150) {
      TagsActions.saveTags(tags, this.state.project_id);
      TwitsActions.saveTwit(twit);
      this.setState({ body: "", tags: ""})
    } else {
      $('.twit-error').show();
    }
  },

  render: function () {
    return (
      <div>
        <form  className="center-align" onSubmit={this.handleSubmit}>
          <input className="twit-input" type="text" onChange={this.changeHandler}
                  value={this.state.body}
                  placeholder="Be brief: max 150 chars">
          </input>
          <div className="twit-error"><strong>Cannot exceed 150 chars. It's {this.state.body.length} chars long.</strong></div>
          <label>Tags:</label>
          <input type="text" onChange={this.handleTagChange}
            value={this.state.tags}
            placeholder="Ex: energy, promising, mindblowing">
          </input>
          <input type="submit" value="Submit Twit"></input>
        </form>
      </div>
    )
  }
});

module.exports = TwitForm;
