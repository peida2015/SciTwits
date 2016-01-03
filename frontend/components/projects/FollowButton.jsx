var React = require("react");
var FollowsActions = require('../../actions/FollowsActions');
var FollowsStore = require('../../stores/follow');

var FollowButton = React.createClass({
  getInitialState: function () {
    return ({ followed: false })
  },

  componentDidMount: function () {
    this.FollowsToken = FollowsStore.addListener(this._onChange)
    FollowsActions.fetchFollows();
  },

  componentWillUnmount: function () {
    this.FollowsToken.remove()
  },

  _onChange: function () {
    var follow_id = FollowsStore.getFollowId(this.props.project_id, this.props.user_id);
    // console.log("_onChange");

    if (follow_id === -1) {
      this.setState({ followed: false })
    } else {
      this.setState({ followed: true })
    }
    // console.log(this.state.followed);
  },

  toggleFollowButton: function (e) {
    e.preventDefault();
    // debugger
    // return;
    if (this.state.followed) {
      var follow_id = FollowsStore.getFollowId(this.props.project_id, this.props.user_id);
      FollowsActions.unFollow(follow_id);
    } else {
      FollowsActions.saveFollow(this.props.project_id, this.props.user_id);
    }
    // console.log("clicked");
  },

  buildButton: function () {
    if (this.state.followed) {
      return (<button className='icon fa-plus fa-2x tooltip'
                      value="Unfollow Project"
                      onClick={this.toggleFollowButton}>
              </button>)
    } else {
      return (<button className='icon fa-plus fa-2x tooltip'
                      value="Follow Project"
                      onClick={this.toggleFollowButton}>
              </button>)
    }
  },

  render: function () {
    return (
      <div className="container follow">
        {this.buildButton()}
      </div>
    );
  }
});

module.exports = FollowButton;
