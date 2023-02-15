import {Component} from "react";
import styled from "styled-components";
import {Header, SubHeader, TextBox} from "../Components/Basics";
import Stars from "../Components/Stars";

const SlideContainer = styled.div`
  animation: fadeInAnimation ease 3s;
  animation-fill-mode: forwards;
  text-align: center;
  height: 50%;
  width: 70%;
  display: flex;
`;

const LeftText = styled.div`
  text-align: left;
  display: inline-block;
`;

const WellsImage = styled.div`
    margin-left: 75px;
`;

class Slide6 extends Component {

    render() {
        return <SlideContainer>

            <LeftText>
                <Header>
                    Darwin's Influence
                </Header>
                <TextBox>

                    <ul>
                        <li>On The Origin of Species published in 1859</li>
                        <li>Written by Charles Darwin</li>
                        <li>A large influence on War of the Worlds was Darwinism</li>
                        <li>WoTW contrasts religious and scientific views on our own origin</li>
                    </ul>

                </TextBox>
            </LeftText>
            <WellsImage>
                <img style={{width: "300px", borderRadius: "5px"}} src={"images/otos.jpg"} />
            </WellsImage>
            <Stars />

        </SlideContainer>
    }
}

export default Slide6;
