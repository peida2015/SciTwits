var React = require('react');
var TwitItem = require('./TwitItem');
// var TwitsStore = require('../../stores/twit');

var Twits = React.createClass ({

  render: function () {
    // debugger
    if (this.props.twits !== "") {
      var twits_tags = this.props.twits.reverse().map(function (twit, idx) {
        return (
          <TwitItem key={idx} twit={twit} user_id={this.props.user_id}/>
          )
      }.bind(this));
      return (
        <div className='twits-box'>
          {twits_tags}
        </div>
      )
    } else {
      return <div>loading...</div>
    }
  }
});

module.exports = Twits;
