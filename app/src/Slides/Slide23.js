import {Component} from "react";
import styled from "styled-components";
import {Header, SubHeader} from "../Components/Basics";

const SlideContainer = styled.div`
  animation: fadeInAnimation ease 3s;
  animation-fill-mode: forwards;
  text-align: center;
  width: 80%;
  height: 80%;
`;

class Slide1 extends Component {

    render() {
        return <SlideContainer>
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/YTvU9j3og5k" title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
        </SlideContainer>
    }
}

export default Slide1;
