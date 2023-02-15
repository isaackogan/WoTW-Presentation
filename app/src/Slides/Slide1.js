import {Component} from "react";
import styled from "styled-components";
import Stars from "../Components/Stars";

const SlideContainer = styled.div`
  animation-fill-mode: forwards;
  animation: fadeInAnimation ease 3s;

`;

const FeatherImage = styled.img`
  width: 250px;
  
  animation: rotation 120s infinite linear;

`;

const ScaleImage = styled.div`
  animation: flickerAnimation 60s infinite;
`;

class Slide1 extends Component {

    constructor(props) {
        super(props);

    }

    render() {
        return <SlideContainer>
            <div className="App">
                <Stars />
                <ScaleImage>
                    <FeatherImage src={"mars.gif"} />
                </ScaleImage>
            </div>
        </SlideContainer>
    }
}

export default Slide1;
