import {Component} from "react";
import styled from "styled-components";
import {Header, SmallMars, SubHeader, TextBox} from "../Components/Basics";
import Stars from "../Components/Stars";
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
  display: flex;
  justify-content: center;
  align-items: center;
`;


class Slide6 extends Component {

    render() {
        return <SlideContainer>

            <LeftText>

                <TextBox>
                    <Header style={{marginBottom: "15px"}}>
                        Intertextuality
                    </Header>

                    There are several instances of intertextuality in WoTW:
                    <ul style={{fontSize: "30px"}}>
                        <li>Through "On The Origin of Species"</li>
                        <li>Through "Invasion Literature" of the 19th Century</li>
                        <li>Through "The Call of Cthulhu" (we read this one!)</li>
                        <li>Through "The Bible" (yes, the famous book)</li>
                    </ul>

                </TextBox>

                <div style={{marginLeft: "150px"}}>
                    <SmallMars />

                </div>

            </LeftText>
            <Stars />

        </SlideContainer>
    }
}

export default Slide6;
