var Dispatcher = require('../dispatcher');
var Store = require('flux/utils').Store;

var _media = [];

var MediaStore = new Store(Dispatcher);

MediaStore.all = function () {
  return _media;
};

MediaStore.getProjectMedia = function (project_id) {
  debugger
  return _media.filter(function (medium) {
    return medium.project_id == project_id
  })
};

MediaStore.resetAllMedia = function (media) {
  _media = media;
};

MediaStore.addMedium = function (medium) {
  var medium_idx = _media.indexOf(medium)
  if (medium_idx === -1) {
    _media.push(medium)
  }
};

MediaStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case "MEDIA_RECEIVED":
      this.resetAllMedia(payload.media);
      MediaStore.__emitChange();
      break;
    case "MEDIUM_RECEIVED":
      this.addMedium(payload.medium);
      MediaStore.__emitChange();
      break;
  }
};

module.exports = MediaStore;
