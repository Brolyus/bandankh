import React, { Component } from "react";
import datas from "./Medias.json";
import "./Medias.css";
import Lightbox from "./Lightbox/Lightbox";

class Medias extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageDatas: [],
      currentImageIndex: 0,
      isVisible: false,
    };
  }

  componentDidMount() {
    this.setState({
      imageDatas: datas,
    });
  }

  openPreview = (index) => {
    this.setState({ isVisible: true, currentImageIndex: index });
  };

  closePreview = () => {
    this.setState({ isVisible: false });
  };

  nextImage = () => {
    if(this.state.currentImageIndex === this.state.imageDatas.length - 1){
        this.setState({currentImageIndex: 0})
    } else {
        this.setState({currentImageIndex: this.state.currentImageIndex + 1})
    }
  }

  previousImage = () => {
    if(this.state.currentImageIndex === 0){
        this.setState({currentImageIndex: this.state.imageDatas.length - 1})
    } else {
        this.setState({currentImageIndex: this.state.currentImageIndex - 1})
    }
  }

  render() {
    return (
      <>
        <div className="mediasBoard">
          <h2>Concert au Dropkick du 12/10/2019</h2>

          {this.state.imageDatas.map((photo, index) => {
            return (
              <div
                className="polaroid"
                onClick={() => this.openPreview(index)}
                key={photo.img}>
                <img
                  className="photo"
                  src={photo.img}
                  alt={photo.title}
                />
                <p>{photo.title}</p>
                <p>{photo.desc}</p>
              </div>
            );
          })}
        </div>
        {this.state.isVisible ? 
        <Lightbox 
        image={this.state.imageDatas[this.state.currentImageIndex].img} 
        closePreview={this.closePreview}
        nextImage={this.nextImage}
        previousImage={this.previousImage}
        title={this.state.imageDatas[this.state.currentImageIndex].title} 
        /> 
        : null}
      </>
    );
  }
}

export default Medias;
