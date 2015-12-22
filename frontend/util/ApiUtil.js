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
        // this.saveMedia(proj_data, resp.id)
        callback(resp.id);
      }
      // error: function (resp){
      //   console.log(resp);
      // }
    })
  },
  fetchMedia: function (project_id) {
    $.ajax({
      type: "GET",
      url: "api/media",
      data: {project_id: project_id},
      success: ApiActions.receiveMedia
    })
  },
  saveMedium: function (medium_data, callback) {
    $.ajax({
      type: "POST",
      url: "api/media",
      data: medium_data,
      success: function (resp) {
        ApiActions.receiveMedium(resp);
        callback(resp.project_id);
      }
      // error: function (resp){
      //   console.log(resp);
      // }
    })
  },

  fetchTwits: function (project_id) {
    $.ajax({
      type: "GET",
      url: "api/twits",
      data: {project_id: project_id},
      success: ApiActions.receiveTwits
    })
  },

  saveTwit: function (twit_data) {
    $.ajax({
      type: "POST",
      url: "api/twits",
      data: twit_data,
      success: function (resp) {
        // debugger
        ApiActions.receiveTwit(resp);
        // callback(resp.project_id);
      }
      // error: function (resp){
      //   console.log(resp);
      // }
    })
  },

  // deleteTwit: function (twit_id, callback) {
  //   $.ajax({
  //     type: "DELETE",
  //     url: "api/twits",
  //     id: twit_id,
      // success: function (resp) {
        // debugger
        // ApiActions.deleteTwit(resp);
        // callback(resp.project_id);
      // }
      // error: function (resp){
      //   console.log(resp);
      // }
  //   })
  // },

  changeProject: function (proj_data, callback) {
    // debugger
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
