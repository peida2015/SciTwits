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
  fetchFollowedProjects: function (user_id){
    $.ajax({
      type: "GET",
      url: "api/projects",
      data: {user_id: user_id},
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

  changeProject: function (proj_data, callback) {
    $.ajax({
      type: "PATCH",
      url: "api/projects/"+proj_data.project.id,
      data: proj_data,
      success: function (resp) {
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
      success: ApiActions.receiveTwit
      // error: function (resp){
      //   console.log(resp);
      // }
    })
  },

  deleteTwit: function (twit_id) {
    $.ajax({
      type: "DELETE",
      url: "api/twits/"+twit_id,
      success: ApiActions.receiveTwits
        // callback(resp.project_id);
      // error: function (resp){
      //   console.log(resp);
      // }
    })
  },

  fetchAllTags: function () {
    $.ajax({
      type: "GET",
      url: "api/tags",
      success: ApiActions.receiveTags
    })
  },

  fetchTags: function (project_id) {
    $.ajax({
      type: "GET",
      url: "api/tags",
      data: {project_id: project_id},
      success: ApiActions.receiveTags
    })
  },

  saveTag: function (tag_data, project_id, saveTagCallback) {
    $.ajax({
      type: "POST",
      url: "api/tags",
      data: tag_data,
      success: function (resp) {
        ApiActions.receiveTag(resp);
        // debugger
        saveTagCallback(resp, project_id)
      }
    })
  },

  saveTagging: function (tag_data, project_id) {
    var tagging = { tagging: {
      tag_id: tag_data.id,
      project_id: project_id
    }};

    $.ajax({
      type: "POST",
      url: "api/taggings",
      data: tagging,
      success: function (resp) {
        // ApiActions.receiveTag(resp);
        console.log(resp);
      }
    })
  },

  fetchFollows: function () {
    $.ajax({
      type: "GET",
      url: "api/follows",
      success: ApiActions.receiveFollows
    })
  },

  saveFollow: function (follow_data) {
    $.ajax({
      type: "POST",
      url: "api/follows",
      data: follow_data,
      success: ApiActions.receiveFollow
      // function (resp) {

        // console.log(resp);
      // }
    })
  },

  unFollow: function (follow_id) {
    $.ajax({
      type: "DELETE",
      url: "api/follows/"+follow_id,
      success: ApiActions.receiveFollows
    })
  }

}

module.exports = ApiUtil;
