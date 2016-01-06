var ApiUtil = require('../util/ApiUtil');

var MediaActions = {
  saveMedia: function (media_data, callback) {
    var proj_id = media_data[1];

//This iterates through each uploaded image and get ApiUtil to send POST request to DB through saveMedium.  Should receive the object back after save.
    media_data[0].forEach(function (medium){
      medium.medium.project_id = proj_id;
      ApiUtil.saveMedium(medium, function(proj_id){
        console.log("medium saved for: "+proj_id);
        callback(proj_id)
      });
    })
  },
  fetchMedia: function (project_id) {
    ApiUtil.fetchMedia(project_id);
  }
}

module.exports = MediaActions;
