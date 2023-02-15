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
                        Freud: Gender Roles
                    </Header>

                    <ul>
                        <li>Gender roles play a large role in the novel</li>
                        <li>Narrator's wife is depicted as fragile and vulnerable; waits in Leatherhead</li>
                        <li>So are the women travelling with the narrator's brother</li>
                        <li>The martians are androgynous & asexual. An almost <i>rejection</i> on victorian societal norms of gender</li>
                        <li>In the mini-series, free thinkers like Amy and George also rejected norms</li>
                    </ul>
                </TextBox>
            </LeftText>

            <Stars />

        </SlideContainer>
    }
}

export default Slide1;
