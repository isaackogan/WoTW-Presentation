import {Component} from "react";
import styled from "styled-components";
import {Header, LeftText, SubHeader, TextBox} from "../Components/Basics";
import Questions from "../Components/Questions";

const SlideContainer = styled.div`
  animation: fadeInAnimation ease 3s;
  animation-fill-mode: forwards;
  text-align: center;
  width: 60%;
`;

class Slide1 extends Component {

    render() {
        return <SlideContainer>
            <LeftText>
                <TextBox>
                    <Header>
                        Additional Questions
                    </Header>

                    <ol>
                        <li>Would our morals still hold any value during an apocalypse (the 'end' of the world)?</li>
                        <li>Is it morally justified for propaganda to lie to us if it benefits us?</li>
                        <li>Do we have the right to our own existence at the cost of 'inferior' species?</li>
                    </ol>
                </TextBox>

                <Questions />
            </LeftText>

        </SlideContainer>
    }
}

export default Slide1;
