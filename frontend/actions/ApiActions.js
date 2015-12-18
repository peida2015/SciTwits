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

}

module.exports = ApiAction;
