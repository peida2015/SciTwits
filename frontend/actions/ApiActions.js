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
  receiveMedium: function (medium){
    Dispatcher.dispatch({
      actionType: "MEDIUM_RECEIVED",
      medium:medium
    })
  },
  receiveTwits: function (twits){
    Dispatcher.dispatch({
      actionType: "TWITS_RECEIVED",
      twits: twits
    })
  },
  receiveTwit: function (twit){
    Dispatcher.dispatch({
      actionType: "TWIT_RECEIVED",
      twit:twit
    })
  },
  receiveTags: function (tags) {
    Dispatcher.dispatch({
      actionType: "TAGS_RECEIVED",
      tags:tags
    })
  },
  receiveTag: function (tag) {
    Dispatcher.dispatch({
      actionType: "TAG_RECEIVED",
      tag:tag
    })
  }
}

module.exports = ApiAction;
