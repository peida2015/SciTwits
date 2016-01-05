var React = require('react');
var TagsStore = require('../../stores/tag');
var TagsActions = require('../../actions/TagsActions');

var Tags = React.createClass({

  getInitialState: function () {
    return ({ tags: [] })
  },
  componentDidMount: function () {
    TagsActions.fetchTags(this.props.project_id);
    this.TagsToken = TagsStore.addListener(this.reloadTags);
  },

  componentWillUnmount: function () {
    this.TagsToken.remove()
  },

  reloadTags: function () {
    this.setState({ tags: TagsStore.all() });
  },

  render: function () {
    // debugger
    var tags_elements = this.state.tags.map(function (tag, idx) {
      if (this.state.tags.length -1 === idx) {
        return (<span key={idx}>{"#" + tag.name}</span>)
      } else {
        return (<span key={idx}>{"#" + tag.name + ", "}</span>)
      }
    }.bind(this));

    var tags_title = "";

    if (this.state.tags.length !==0) {
      tags_title = (<strong>Tags:</strong>)
    }

    return (
      <div>
        {tags_title}
        <div>
          {tags_elements}
        </div>
      </div>
    )
  }
});

module.exports = Tags;
