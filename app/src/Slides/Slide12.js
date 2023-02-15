import {Component} from "react";
import styled from "styled-components";
import {Header, SubHeader, TextBox} from "../Components/Basics";
import Stars from "../Components/Stars";
import Crosses from "../Components/Crosses";

const SlideContainer = styled.div`
  animation: fadeInAnimation ease 3s;
  animation-fill-mode: forwards;
  text-align: center;
  width: 50%;
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

                    <ul>
                        <li>Curate believes the apocalypse has come</li>
                        <li>His relationship with God & himself brings about his insanity</li>

                    </ul>

                    <QuoteText>
                        <strong style={{marginBottom: "10px"}}>Quote #1</strong>

                        <i style={{fontSize: "28px"}}>
                            “They come from a distant land, from the end of the heavens, the Lord and the weapons of his indignation, to destroy the whole land.” - Isaiah 13:15
                        </i>
                    </QuoteText>


                </TextBox>
            </LeftText>

            <Crosses />

        </SlideContainer>
    }
}

export default Slide6;
