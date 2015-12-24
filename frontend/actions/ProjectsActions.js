var ApiUtil = require('../util/ApiUtil');

var ProjectsActions = {
  fetchAllProjects: function () {
    ApiUtil.fetchAll();
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
