import {Component} from "react";
import styled from "styled-components";
import {Header, LeftText, SubHeader, TextBox} from "../Components/Basics";
import Letters from "../Components/Letters";
import Stars from "../Components/Stars";

const SlideContainer = styled.div`
  animation: fadeInAnimation ease 3s;
  animation-fill-mode: forwards;
  text-align: center;
  width: 60%;
  display: flex;
`;



const QuoteText = styled.div`
    display: flex;
  flex-direction: column;
`;

class Slide6 extends Component {

    render() {
        return <SlideContainer>
            <LeftText>
                <TextBox style={{fontSize: "32px"}}>
                    <QuoteText>
                        <strong style={{marginBottom: "10px"}}>Quote #1</strong>
                        <i>
                            “The perfection of mechanical appliances must ultimately supersede limbs; the perfection of chemical devices, digestion; that such organs as hair, external nose, teeth, ears and chin were no longer essential… natural selection would lie in the direction of their steady diminution”

                        </i>
                        <br/><br/>
                        <strong style={{marginBottom: "10px"}}>Quote #2</strong>
                        <i>
                            “To me it is quite credible that the Martians may be descended from beings not unlike ourselves, by a gradual development of brain and hands (the latter giving rise to the two bunches of delicate tentacles at last) at the expense of the rest of the body. Without the body the brain would, of course, become mere selfish intelligence, without any of the emotional substratum of the human being.”

                        </i>
                        <Letters />

                    </QuoteText>

                </TextBox>
            </LeftText>

        </SlideContainer>
    }
}

export default Slide6;
