import {Component} from "react";
import styled from "styled-components";
import {Header, SubHeader, TextBox} from "../Components/Basics";
import Questions from "../Components/Questions";

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
                <SubHeader>
                    How can one believe in a God when there is so much suffering?
                </SubHeader>
            </LeftText>

            <Questions />
        </SlideContainer>
    }
}

export default Slide6;
