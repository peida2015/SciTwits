var ApiUtil = require('../util/ApiUtil');

var ProjectActions = {
  fetchAllProjects: function () {
    ApiUtil.fetchAll();
  },

  createProject: function (data, callback) {
    ApiUtil.saveProject(data, callback);
  },

  deleteProject: function (id, callback) {
    ApiUtil.destroyProject(id, callback);
  }

}
module.exports = ProjectActions;
