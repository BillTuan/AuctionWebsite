import React, { Component } from "react";
import ImageGallery from "react-image-gallery";

class Slideshow extends Component {
  state = {};
  render() {
    const { images } = this.props;
    return <ImageGallery items={images} />;
  }
}

export default Slideshow;
