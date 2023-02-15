import {Component} from "react";
import styled from "styled-components";
import {Header, SmallMars, SubHeader, TextBox} from "../Components/Basics";
import Stars from "../Components/Stars";

const SlideContainer = styled.div`
  animation: fadeInAnimation ease 3s;
  animation-fill-mode: forwards;
  text-align: center;
  width: 70%;
  display: flex;
`;

const LeftText = styled.div`
  text-align: left;
  display: flex;
  align-items: center;
`;

class Slide6 extends Component {

    render() {
        return <SlideContainer>

            <LeftText>


                <TextBox style={{fontSize: "38px"}}>
                    <Header style={{fontSize: "66px"}}>
                        Where we differ from Martians
                    </Header>
                    <ul>
                        <li>The martians do not have empathy</li>
                        <li>We possess the capability for empathy</li>
                        <li>Tangentially, we have a <i>morality</i> that they do not</li>
                    </ul>
                </TextBox>
                <div style={{marginLeft: "150px", filter: "hue-rotate(180deg)"}}>
                    <SmallMars />
                </div>
            </LeftText>


            <Stars />

        </SlideContainer>
    }
}

export default Slide6;
