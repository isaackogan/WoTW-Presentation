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
                <Header style={{fontSize: "66px"}}>
                    Themes covered thus far...
                </Header>

                <TextBox style={{fontSize: "38px"}}>
                    <ul>
                        <li><strong>Themes thus far:</strong> Religion, war, morality, evolution</li>
                        <li>Looking at it through a Freudian lens, here's another theme...</li>
                    </ul>
                </TextBox>

            </LeftText>

            <Stars />

        </SlideContainer>
    }
}

export default Slide6;
