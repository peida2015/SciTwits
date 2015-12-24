var Dispatcher = require('../dispatcher');
var Store = require('flux/utils').Store;

var _follows = [];

var FollowsStore = new Store(Dispatcher);

FollowsStore.all = function () {
  return _follows;
};

FollowsStore.getFollowId = function (project_id, user_id) {
  var follow_id = -1;
  _follows.forEach(function (follow) {
    if (follow.project_id == project_id && follow.user_id == user_id){
      follow_id = follow.id
    }
  });
  return follow_id
};

FollowsStore.getUserFollows = function (user_id) {
  return _follows.filter(function (follow) {
    // debugger
    return (follow.user_id == user_id)
  })
};

FollowsStore.resetAllFollows = function (follows) {
  _follows = follows;
};

FollowsStore.addFollow = function (follow) {
  var follow_idx = _follows.indexOf(follow)
  if (follow_idx === -1) {
    _follows.push(follow)
  }
  // debugger
};

FollowsStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case "FOLLOWS_RECEIVED":
      this.resetAllFollows(payload.follows);
      FollowsStore.__emitChange();
      break;
    case "FOLLOW_RECEIVED":
      this.addFollow(payload.follow);
      FollowsStore.__emitChange();
      break;
  }
};

module.exports = FollowsStore;
