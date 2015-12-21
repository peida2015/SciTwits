var Dispatcher = require('../dispatcher');


var ApiAction = {
  receiveAllProjects: function (projects){
    Dispatcher.dispatch({
      actionType: "PROJECTS_RECEIVED",
      projects: projects
    })
  },

  receiveProject: function (project) {
    Dispatcher.dispatch({
      actionType: "PROJECT_RECEIVED",
      project: project
    })
  },

  receiveMedia: function (media){
    Dispatcher.dispatch({
      actionType: "MEDIA_RECEIVED",
      media: media
    })
  },

}

module.exports = ApiAction;
