var Dispatcher = require('../dispatcher');
var Store = require('flux/utils').Store;

var _tags = [];

var TagsStore = new Store(Dispatcher);

TagsStore.all = function () {
  return _tags;
};

TagsStore.getProjectTags = function (project_id) {
  return _tags.filter(function (tag) {
    debugger
    return (tag.project_id == project_id)
  })
};

TagsStore.resetAllTags = function (tags) {
  // debugger
  _tags = tags;
};

TagsStore.addTwit = function (tag) {
  var tag_idx = _tags.indexOf(tag)
  if (tag_idx === -1) {
    _tags.push(tag)
  }
};

TagsStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case "TAGS_RECEIVED":
      this.resetAllTags(payload.tags);
      TagsStore.__emitChange();
      break;
    case "TAG_RECEIVED":
      this.addTwit(payload.tag);
      TagsStore.__emitChange();
      break;
  }
};

module.exports = TagsStore;
