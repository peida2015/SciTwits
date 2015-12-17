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

  deleteProject: function (project_id) {
    Dispatcher.dispatch({
      actionType: "PROJECT_DELETED",
      id: project_id
    })
  }
}

module.exports = ApiAction;
