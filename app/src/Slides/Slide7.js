import {Component} from "react";
import styled from "styled-components";
import {Header, SubHeader, TextBox} from "../Components/Basics";
import Stars from "../Components/Stars";

const SlideContainer = styled.div`
  animation: fadeInAnimation ease 3s;
  animation-fill-mode: forwards;
  text-align: center;
  width: 70%;
  display: flex;
  justify-content: center;
`;

const LeftText = styled.div`
  text-align: left;
  display: inline-block;
`;

const WellsImage = styled.div`
  margin-top: 50px;
  display: flex;
  opacity: 0.6;
  width: 80%;
  align-content: center;
  justify-content: space-between;
  align-items: center;
  animation: flickerGrayscale 10s infinite;
`;

class Slide6 extends Component {

    render() {
        return <SlideContainer>

            <LeftText>
                <Header>
                    What is Darwinism?
                </Header>
                <TextBox>

                    <ul>
                        <li>The belief of life originating through evolution</li>
                        <li>Populations adapt through survival of the fittest</li>
                        <li>Positive heritable traits are passed on to progeny through genetics</li>
                        <li>Adaptations lead to evolution & speciation</li>
                    </ul>

                </TextBox>
                <WellsImage>
                        <img style={{width: "600px", borderRadius: "5px"}} src={"images/evolution.gif"} />
                        <img style={{marginLeft: "40px", height: "200px", borderRadius: "5px"}} src={"images/evolution-ape.gif"} />
                </WellsImage>
            </LeftText>

            <Stars />

        </SlideContainer>
    }
}

export default Slide6;
