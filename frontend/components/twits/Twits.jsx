var React = require('react');
var TwitItem = require('./TwitItem');
// var TwitsStore = require('../../stores/twit');

var Twits = React.createClass ({

  render: function () {
    // debugger
    if (this.props.twits !== "") {
      var twits_tags = this.props.twits.map(function (twit, idx) {
        return (<TwitItem key={idx} twit={twit} />)
      });
      return (
        <div>
          {twits_tags}
        </div>
      )
    } else {
      return <div>loading...</div>
    }
  }
});

module.exports = Twits;
