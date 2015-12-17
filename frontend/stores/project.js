var Dispatcher = require('../dispatcher');
var Store = require('flux/utils').Store;

var _projects = [];

var ProjectStore = new Store(Dispatcher)

ProjectStore.all = function () {
  return _projects;
};

ProjectStore.resetAllProjects = function (projects) {
  _projects = projects;
};

ProjectStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case "PROJECTS_RECEIVED":
      debugger
      this.resetAllProjects(payload.projects);
      ProjectStore.__emitChange();
      break;

    case "PROJECTS_RECEIVED":
      this.addProject(payload.project);
      ProjectStore.__emitChange();
      break;
    // default:
  }
};

// Project.receiveAllProjects = function (projects) {
//   // projects should be an array of Project objects.
//   _projects = projects;
// };
//
// Project.addProject = function (project) {
//   _projects.push(project)
// };
//
// Project


module.exports = ProjectStore;
