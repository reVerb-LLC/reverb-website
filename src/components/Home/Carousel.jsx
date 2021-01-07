import React, { Component } from "react";
import Slide from "./Slide";
import Arrow from "./Arrow";
import sidebar from "../../media/reverbScreenshots/sidebar.svg";
import config from "../../media/reverbScreenshots/config.svg";
import output from "../../media/reverbScreenshots/output.svg";
import watch from "../../media/reverbScreenshots/watch.svg";
import axios from "../../media/reverbScreenshots/axios.svg";
import rightClick from "../../media/reverbScreenshots/rightClick.svg";

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImageIndex: 0,
      previousImageIndex: 0,
      direction: "none",
      slideContents: [
        [
          rightClick,
          "Automatic detection of Express routes makes testing as easy as right-clicking on an endpoint definition",
        ],
        [
          config,
          "Configure and store presets for testing all routes handled by your server",
        ],
        [
          output,
          "View the header, contents, response time, and more for all requests sent to your server",
        ],
        [
          sidebar,
          "Monitor and manage all of your endpoints with a convenient sidebar menu",
        ],
        [
          axios,
          "Automatically generate pre-configured Axios request code for use by the front end team",
        ],
        [
          watch,
          "Set reVerb to dynamically monitor all of your Express routes and display the current status in-line",
        ],
      ],
    };
    this.nextSlide = this.nextSlide.bind(this);
    this.previousSlide = this.previousSlide.bind(this);
    this.createSlides = this.createSlides.bind(this);
  }

  previousSlide() {
    const { currentImageIndex, slideContents } = this.state;
    const lastIndex = slideContents.length - 1;
    const shouldResetIndex = currentImageIndex === 0;
    const index = shouldResetIndex ? lastIndex : currentImageIndex - 1;
    this.setState({
      previousImageIndex: currentImageIndex,
      currentImageIndex: index,
      direction: "left",
    });
  }

  nextSlide() {
    const { currentImageIndex, slideContents } = this.state;
    const lastIndex = slideContents.length - 1;
    const shouldResetIndex = currentImageIndex === lastIndex;
    const index = shouldResetIndex ? 0 : currentImageIndex + 1;

    this.setState({
      previousImageIndex: currentImageIndex,
      currentImageIndex: index,
      direction: "right",
    });
  }

  createSlides() {
    const output = [];
    const {
      slideContents,
      currentImageIndex,
      previousImageIndex,
      direction,
    } = this.state;
    for (let i = 0; i < slideContents.length; i++) {
      output.push(
        <Slide
          key={`slide-${i}`}
          contents={slideContents[i]}
          index={i}
          currentSlide={currentImageIndex}
          previousSlide={previousImageIndex}
          direction={direction}
        />
      );
    }
    return output;
  }

  render() {
    const slides = this.createSlides();
    return (
      <div id="carousel">
        <Arrow direction="left" clickFunction={this.previousSlide} />
        {slides}
        <Arrow direction="right" clickFunction={this.nextSlide} />
      </div>
    );
  }
}

export default Carousel;
