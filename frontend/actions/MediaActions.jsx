var ApiUtil = require('../util/ApiUtil');

var MediaActions = {
  saveMedia: function (media_data, callback) {
    var proj_id = media_data[1];

    media_data[0].forEach(function (medium){
      medium.medium.project_id = proj_id;
      debugger
      ApiUtil.saveMedium(medium, function(proj_id){ console.log("medium saved for: "+proj_id);});
      callback(proj_id)
    })
  }
}

module.exports = MediaActions;
