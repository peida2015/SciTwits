var Dispatcher = require('../dispatcher');
var Store = require('flux/utils').Store;

var _twits = [];

var TwitsStore = new Store(Dispatcher);

TwitsStore.all = function () {
  return _twits;
};

TwitsStore.getProjectTwits = function (project_id) {
  return _twits.filter(function (twit) {
    // debugger
    return (twit.project_id == project_id)
  })
};

TwitsStore.resetAllTwits = function (twits) {
  _twits = twits;
};

TwitsStore.addTwit = function (twit) {
  var twit_idx = _twits.indexOf(twit)
  if (twit_idx === -1) {
    _twits.push(twit)
  }
};

TwitsStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case "TWITS_RECEIVED":
      this.resetAllTwits(payload.twits);
      TwitsStore.__emitChange();
      break;
    case "TWIT_RECEIVED":
      this.addTwit(payload.twit);
      TwitsStore.__emitChange();
      break;
  }
};

module.exports = TwitsStore;
