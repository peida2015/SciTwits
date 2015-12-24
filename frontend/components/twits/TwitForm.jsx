var React = require('react');
var TwitsActions = require('../../actions/TwitsActions');
var TagsActions = require('../../actions/TagsActions');

var TwitForm = React.createClass ({
  getInitialState: function () {
    return ({ body: "" , project_id: this.props.project_id, tags: ""})
  },

  changeHandler: function (e) {
    this.setState({ body: e.target.value})
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

    TagsActions.saveTags(tags, this.state.project_id);
    TwitsActions.saveTwit(twit);
    this.setState({ body: "", tags: ""})
  },

  render: function () {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.changeHandler}
                  value={this.state.body}
                  placeholder="Be brief: max 150 chars">
          </input>
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
