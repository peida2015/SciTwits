var ApiUtil = require('../util/ApiUtil');

var FollowsActions = {
  fetchFollows: function () {
    ApiUtil.fetchFollows();
  },
  saveFollow: function (project_id, user_id) {
    var follow_data = {
      follow: {
        project_id: project_id,
        user_id: user_id
      }
    };
    ApiUtil.saveFollow(follow_data)
  },
  unFollow: function (follow_id) {
    // debugger
    ApiUtil.unFollow(follow_id)
  }
}

module.exports = FollowsActions;
