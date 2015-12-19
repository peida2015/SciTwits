var Dispatcher = require('../dispatcher');
var Store = require('flux/utils').Store;

var _projects = [];

var ProjectStore = new Store(Dispatcher)

ProjectStore.all = function () {
  return _projects;
};

ProjectStore.find = function (id){
  return _projects.find(function (project){
    return (project.id == id)
  })
},

ProjectStore.resetAllProjects = function (projects) {
  _projects = projects;
};

ProjectStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case "PROJECTS_RECEIVED":
      // debugger
      this.resetAllProjects(payload.projects);
      ProjectStore.__emitChange();
      break;

    case "PROJECT_RECEIVED":
      this.addProject(payload.project);
      ProjectStore.__emitChange();
      break;
  }
};

ProjectStore.addProject = function (project) {
  _projects.push(project);
};

// Project.receiveAllProjects = function (projects) {
//   // projects should be an array of Project objects.
//   _projects = projects;
// };
//
//
// Project


module.exports = ProjectStore;
