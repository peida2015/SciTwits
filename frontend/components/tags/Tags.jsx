var React = require('react');
var TagsStore = require('../../stores/tag');
var TagsActions = require('../../actions/TagsActions');

var Tags = React.createClass({

  componentDidMount: function () {
    TagsActions.fetchAllTags();
    this.TagsToken = TagsStore.addListener(this.reloadTags);
  },

  reloadTags: function () {
    this.tags = TagsStore.find("PROJECT_ID !!!!!!!!!!!!!");
  },

  render: function () {
    return (
      <div>
        {this.tags}
      </div>
    )
  }
});

module.exports = Tags;
