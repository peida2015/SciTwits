var React = require("react");

var UploadButton = React.createClass({
  upload: function (e) {
    e.preventDefault();
    cloudinary.openUploadWidget(CLOUDINARY_OPTIONS, this.props.uploadCallback);
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


// RegEx to match filename at the end of full path: .match(/[^\\/]+\.[^\\/]+$/)[0];
