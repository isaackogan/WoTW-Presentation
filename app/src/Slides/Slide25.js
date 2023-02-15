import {Component} from "react";
import styled from "styled-components";
import {Header, LeftText, SubHeader, TextBox} from "../Components/Basics";
import Stars from "../Components/Stars";

const SlideContainer = styled.div`
  animation: fadeInAnimation ease 3s;
  animation-fill-mode: forwards;
  text-align: center;
`;

class Slide1 extends Component {

    render() {
        return <SlideContainer>
            <LeftText>
                <TextBox>
                    <Header>
                        Martian Propaganda
                    </Header>

                    <ul>
                        <li>Propaganda is <i>any</i> communication used to influence/persuade an audience to further an agenda</li>
                        <li>The Martians choose to make humans believe they are omnipotent FROM the start, to crush their spirit</li>
                        <li>They have no <i>need</i> to kill people when the first cylinder opens. It's about sending a message.</li>
                    </ul>
                </TextBox>
            </LeftText>
            <Stars/>
        </SlideContainer>
    }
}

export default Slide1;
