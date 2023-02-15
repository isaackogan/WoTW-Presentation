import {Component} from "react";
import styled from "styled-components";
import {Header, SubHeader, TextBox} from "../Components/Basics";
import Stars from "../Components/Stars";

const SlideContainer = styled.div`
  animation: fadeInAnimation ease 3s;
  animation-fill-mode: forwards;
  text-align: center;
  width: 60%;
  display: flex;
`;

const LeftText = styled.div`
  text-align: left;
  display: inline-block;
`;

class Slide6 extends Component {

    render() {
        return <SlideContainer>

            <LeftText>
                <Header style={{marginBottom: "15px"}}>
                    We <i>are</i> the Martians
                </Header>
                <TextBox>

                    There are a number of frightening similarities:

                    <ul style={{fontSize: "28px"}}>
                        <li>We destroy the Earth; They destroy the Earth</li>
                        <li>We kill 'lesser' species; They kill 'lesser' species</li>
                        <li>We are more intelligent than real-life species; They are more intelligent than us</li>
                    </ul>

                </TextBox>
            </LeftText>
            <Stars />

        </SlideContainer>
    }
}

export default Slide6;
