var ApiUtil = require('../util/ApiUtil');

var ProjectActions = {
  fetchAllProjects: function () {
    ApiUtil.fetchAll();
  },

  createProject: function () {
    ApiUtil.saveProject();
  },

  deleteProject: function (id) {
    ApiUtil.destroyProject();
  }

}

module.exports = ProjectActions;
