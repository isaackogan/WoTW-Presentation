import {Component} from "react";
import styled from "styled-components";
import {Header, LeftText, SubHeader, TextBox} from "../Components/Basics";
import Stars from "../Components/Stars";

const SlideContainer = styled.div`
  animation: fadeInAnimation ease 3s;
  animation-fill-mode: forwards;
  text-align: center;
  width: 70%;
`;


const QuoteText = styled.div`
    display: flex;
  flex-direction: column;
`;
class Slide1 extends Component {

    render() {
        return <SlideContainer>
            <LeftText style={{display: "flex", alignItems: "center"}}>
                <TextBox>
                    <Header>
                        British Propaganda
                    </Header>

                    <ul>
                        <li>British newspaper in the novel also propagandizes the citizens</li>
                        <li>They <i>downplay</i> the threat of the Martians and <i>overplay</i> the strength of the british empire to send a positive message</li>
                    </ul>

                    <QuoteText>
                        <strong style={{marginBottom: "10px", fontSize: "25px"}}>The Accompanying Quote</strong>
                        <i style={{fontSize: "25px"}}>
                            “The Martians, alarmed by the approach of a crowd, had killed a number of people with a quick-firing gun… The Martians have not moved from the pit into which they have fallen, and, indeed, seem incapable of doing so.”
                        </i>
                    </QuoteText>

                </TextBox>
                <img style={{width: "300px", borderRadius: "5px", marginLeft: "100px"}} src={"images/britishpropaganda.jpg"} />

            </LeftText>

            <Stars />

        </SlideContainer>
    }
}

export default Slide1;
