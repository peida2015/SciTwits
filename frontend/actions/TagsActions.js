var ApiUtil = require('../util/ApiUtil');
var TagsStore = require('../stores/tag');

var TagsActions = {
  fetchAllTags: function () {
    ApiUtil.fetchAllTags();
  },

  fetchFavoriteTags: function () {
    ApiUtil.fetchFavoriteTags();
  },

  fetchTags: function (project_id) {
    ApiUtil.fetchTags(project_id);
  },

  saveTags: function (tags, project_id) {
    // debugger
    tags.forEach(function (tag){
      var tag_data = {tag: {name: tag}}
      ApiUtil.saveTag(tag_data, project_id, this.saveTagging)
    }.bind(this));
  },
  saveTagging: function (tag, project_id) {
    // debugger
    ApiUtil.saveTagging(tag, project_id);
  }
}

module.exports = TagsActions;
