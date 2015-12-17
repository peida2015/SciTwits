var ApiActions = require('../actions/ApiActions');
// var ProjectActions = require('../actions/ProjectActions');

var ApiUtil = {
  fetchAll: function () {
    $.ajax({
      type: "GET",
      url: "api/projects",
      data: "",
      success: ApiActions.receiveAllProjects
    })
  },
  saveProject: function (proj_data) {
    $.ajax({
      type: "POST",
      url: "api/projects",
      data: proj_data,
      success: ApiActions.receiveProject
    })
  },
  deleteProject: function (proj_id) {
    $.ajax({
      type: "DELETE",
      url: "api/projects/",
      data: proj_id,
      success: ApiActions.receiveAllProjects
    })
  }
}

module.exports = ApiUtil;
