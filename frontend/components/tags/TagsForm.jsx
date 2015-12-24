var React = require('react');
var TagsActions = require('../../actions/TagsActions');

var TagsForm = React.createClass({
  this._tags_text: "",
  // this._tags: [],

  handleChange: function (e) {
    this._tags_text = e.target.value
  },

  handleSubmit: function (e) {
    e.preventDefault();
    var tags = this._tags_text.split(","),map(function (segment)){
      return segment.trim();
    });
    TagsActions.saveTags(tags);
  },

  render: function () {

    return (
      <form className="TagsForm" onSubmit={this.handleSubmit}>
        <label>Tags:</label>
        <input type="text" onChange={this.handleChange}
          placeholder:"Ex: energy, promising, mindblowing">
        </input>
        <input type="submit" className="add">Add</input>
      </form>
    )
  }
});

module.exports = TagsForm;
