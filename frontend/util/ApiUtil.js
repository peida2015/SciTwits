var ApiActions = require('../actions/ApiActions');
// var ProjectForm = require('../components/projects/ProjectForm');

var ApiUtil = {
  fetchAll: function () {
    $.ajax({
      type: "GET",
      url: "api/projects",
      data: "",
      success: ApiActions.receiveAllProjects
    })
  },
  saveProject: function (proj_data, callback) {
    $.ajax({
      type: "POST",
      url: "api/projects",
      data: proj_data,
      success: function (resp) {
        // debugger
        ApiActions.receiveProject(resp);
        // ProjectForm.afterSubmit(resp.id);
        callback(resp.id);
      }
    })
  },
  changeProject: function (proj_data, callback) {
    debugger
    $.ajax({
      type: "PATCH",
      url: "api/projects/"+proj_data.project.id,
      data: proj_data,
      success: function (resp) {
        // debugger
        ApiActions.receiveProject(resp);
        // ProjectForm.afterSubmit(resp.id);
        callback(resp.id);
      }
    })
  },
  destroyProject: function (proj_id) {
    $.ajax({
      type: "DELETE",
      url: "api/projects/"+proj_id,
      success: ApiActions.receiveAllProjects
    })
  }
}

module.exports = ApiUtil;
