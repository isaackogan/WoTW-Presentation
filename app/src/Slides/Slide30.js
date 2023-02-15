import {Component} from "react";
import styled from "styled-components";
import Stars from "../Components/Stars";

const SlideContainer = styled.div`
  animation-fill-mode: forwards;
  animation: fadeInAnimation ease 3s;
  width: 50%;
`;

const FeatherImage = styled.img`
  width: 250px;
  
  animation: rotation 120s infinite linear;

`;

const FISContainer = styled.div`
  margin-right: -20px;
  margin-top: -45px;

`;
const FeatherImageSmall = styled.img`

  width: 250px;
  filter: grayscale(1);

`;
const ScaleImage = styled.div`
  animation: flickerAnimation 120s infinite;
`;

const MarsContainer = styled.div`
  display: flex;
  width: 90%;
  justify-content: center;
`;

class Slide1 extends Component {

    constructor(props) {
        super(props);

    }

    render() {
        return <SlideContainer>
                <Stars />
                <MarsContainer>
                    <FISContainer style={{"transform": "scale(0.3) rotate(40deg)"}}>
                        <FeatherImageSmall src={"mars.gif"} style={{animation: "rotation 3s infinite linear"}} />
                    </FISContainer>
                    <ScaleImage style={{transform: "scale(1.2)", marginLeft: "50px"}}>
                        <FeatherImage src={"mars.gif"} />
                    </ScaleImage>
                    <FISContainer style={{"transform": "scale(0.2) rotate(180deg)", marginTop: "30px", marginLeft: "15px"}}>
                        <FeatherImageSmall src={"mars.gif"} style={{animation: "rotation 2s infinite linear"}}/>
                    </FISContainer>
                </MarsContainer>
        </SlideContainer>
    }
}

export default Slide1;
