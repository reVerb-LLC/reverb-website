import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import {
  fadeOutLeft,
  fadeOutRight,
  fadeInLeft,
  fadeInRight,
} from "react-animations";

const FadeOutLeftAnimation = keyframes`${fadeOutLeft}`;
const FadeOutRightAnimation = keyframes`${fadeOutRight}`;
const FadeInLeftAnimation = keyframes`${fadeInLeft}`;
const FadeInRightAnimation = keyframes`${fadeInRight}`;

const FadeOutLeftDiv = styled.div`
  position: absolute;
  display: block;
  animation: 1s ease-out 0s 1 ${FadeOutLeftAnimation} forwards;
`;
const FadeOutRightDiv = styled.div`
  position: absolute;
  display: block;
  animation: 1s ease-out 0s 1 ${FadeOutRightAnimation} forwards;
`;
const FadeInLeftDiv = styled.div`
  position: absolute;
  display: block;
  animation: 1s ease-out 0s 1 ${FadeInLeftAnimation} forwards;
`;
const FadeInRightDiv = styled.div`
  position: absolute;
  display: block;
  animation: 1s ease-out 0s 1 ${FadeInRightAnimation} forwards;
`;
const HiddenDiv = styled.div`
  position: absolute;
  display: none;
`;

class Slide extends Component {
  render() {
    const url = this.props.contents[0];
    const description = this.props.contents[1];
    const { index, currentSlide, previousSlide, direction } = this.props;
    if (currentSlide === index) {
      if (direction === "right") {
        return (
          <FadeInRightDiv>
            <img src={url} id="picture" alt="Feature" />
            <p id="description">{description}</p>
          </FadeInRightDiv>
        );
      }
      if (direction === "left") {
        return (
          <FadeInLeftDiv>
            <img src={url} id="picture" alt="Feature" />
            <p id="description">{description}</p>
          </FadeInLeftDiv>
        );
      }
    } else if (previousSlide === index) {
      if (direction === "right") {
        return (
          <FadeOutLeftDiv>
            <img src={url} id="picture" alt="Feature" />
            <p id="description">{description}</p>
          </FadeOutLeftDiv>
        );
      }
      if (direction === "left") {
        return (
          <FadeOutRightDiv>
            <img src={url} id="picture" alt="Feature" />
            <p id="description">{description}</p>
          </FadeOutRightDiv>
        );
      }
    } else {
      return (
        <HiddenDiv>
          <img src={url} id="picture" alt="Feature" />
          <p id="description">{description}</p>
        </HiddenDiv>
      );
    }
    return (
      <div id="slide">
        <img src={url} id="picture" alt="Feature" />
        <p id="description">{description}</p>
      </div>
    );
  }
}

export default Slide;
