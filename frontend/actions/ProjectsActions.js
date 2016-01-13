var ApiUtil = require('../util/ApiUtil');

var ProjectsActions = {
  fetchAllProjects: function () {
    ApiUtil.fetchAll();
  },

  fetchFollowedProjects: function (user_id) {
    // debugger
    ApiUtil.fetchFollowedProjects(user_id);
  },

  fetchTaggedProjects: function (tag_id) {
    ApiUtil.fetchTaggedProjects(tag_id);
  },

  createProject: function (data, callback) {
    ApiUtil.saveProject(data, callback);
  },

  updateProject: function (data, callback) {
    ApiUtil.changeProject(data, callback);
  },

  deleteProject: function (id, callback) {
    ApiUtil.destroyProject(id, callback);
  }

}
module.exports = ProjectsActions;
