var ApiUtil = require('../util/ApiUtil');

var TwitsActions = {
  saveTwit: function (data) {
    ApiUtil.saveTwit(data)
  },

  fetchTwits : function (project_id) {
    ApiUtil.fetchTwits(project_id);
  }

  // deleteTwit: function (id) {
  //   ApiUtil.deleteTwit
  // }

}

module.exports = TwitsActions;
