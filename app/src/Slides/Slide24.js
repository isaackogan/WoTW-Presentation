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
                        The Power of Propaganda
                    </Header>

                    <ul>
                        <li>Broadcast shows the power of propaganda</li>
                        <li>Theatrics are used in propaganda to seduce audiences</li>
                        <li>If people can believe something as CRAZY as this, what <i>can't</i> they believe?</li>
                    </ul>
                </TextBox>
            </LeftText>
            <Stars />
        </SlideContainer>
    }
}

export default Slide1;
