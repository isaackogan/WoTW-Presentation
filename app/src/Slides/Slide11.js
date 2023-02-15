import {Component} from "react";
import styled from "styled-components";
import {Header, SubHeader, TextBox} from "../Components/Basics";
import Letters from "../Components/Letters";
import Stars from "../Components/Stars";
import Crosses from "../Components/Crosses";

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

const QuoteText = styled.div`
    display: flex;
  flex-direction: column;
`;

class Slide6 extends Component {

    render() {
        return <SlideContainer>

            <LeftText>
                <Header>
                    Christianity in WoTW
                </Header>
                <TextBox>

                    <ul style={{fontSize: "30px"}}>
                        <li>The curate and narrator are travelling together</li>
                        <li>They are trapped when they stop to rest in a house overnight</li>
                        <li>A martian cylinder crashes partially crushing the house they are in w/ debris</li>
                        <li>The curate loses his mind over several days in a battle with his beliefs</li>
                    </ul>

                    <QuoteText style={{fontSize: "25px"}}>
                        <strong style={{marginBottom: "10px"}}>Quote #1</strong>

                        <i style={{fontSize: "25px"}}>

                            “It is just. On me and mine be the punishment laid. We have sinned, we have fallen short… I held my peace. I should have stood up, though I [would] have died for it, and called upon them to repent⁠— repent!”
                        </i>

                        <br/>

                        <strong style={{marginBottom: "10px"}}>Quote #2</strong>

                        <i >
                            “The word of the lord is upon me! I must bear my witness! I go! It has already been too long delayed.”

                        </i>
                    </QuoteText>

                    <Crosses />

                </TextBox>
            </LeftText>

        </SlideContainer>
    }
}

export default Slide6;
