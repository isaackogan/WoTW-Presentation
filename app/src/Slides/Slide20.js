import {Component} from "react";
import styled from "styled-components";
import {Header, LeftText, SubHeader, TextBox} from "../Components/Basics";
import Stars from "../Components/Stars";

const SlideContainer = styled.div`
  animation: fadeInAnimation ease 3s;
  animation-fill-mode: forwards;
  text-align: center;
  width: 60%;
  display: flex;
`;

class Slide1 extends Component {

    render() {
        return <SlideContainer>

            <LeftText>
                <Header>
                    Another Theme
                </Header>
                <TextBox>
                    <ul>
                        <li><strong>Another Theme:</strong> Civilization & Repression</li>
                        <li><strong>Freud:</strong> Civilization <i>imposes</i> repression on our instincts</li>
                        <li>Some characters maintain rationality, others revert to primal instincts </li>
                    </ul>
                </TextBox>
            </LeftText>
            <Stars />
        </SlideContainer>
    }
}

export default Slide1;
