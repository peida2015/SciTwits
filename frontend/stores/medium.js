var Dispatcher = require('../dispatcher');
var Store = require('flux/utils').Store;

var _media = [];

var MediaStore = new Store(Dispatcher);

MediaStore.all = function () {
  return _media;
};

MediaStore.getProjectMedia = function (project_id) {
  return _media.filter(function (medium) {
    return medium.project_id == project_id
  })
};

MediaStore.resetAllMedia = function (media) {
  _media = media;
};

MediaStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case "MEDIA_RECEIVED":
      // debugger
      this.resetAllMedia(payload.media);
      MediaStore.__emitChange();
      break;
  }
};
