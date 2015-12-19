var React = require("react");

var UploadButton = React.createClass({
  upload: function (e) {
    e.preventDefault();
    debugger
    cloudinary.openUploadWidget(CLOUDINARY_OPTIONS, function(error, results){
      debugger
      results.public
      console.log(results);
      // if(!error){
      //   this.props.postImage(results[0]);
      // }
    }.bind(this));
  },
  render: function () {
    return (
      <div className="upload-form">
        <button onClick={this.upload}>Upload new medium!</button>
      </div>
    );
  }
});

module.exports = UploadButton;
