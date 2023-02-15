import {Component} from "react";
import styled from "styled-components";
import {Header, SubHeader, TextBox} from "../Components/Basics";
import Stars from "../Components/Stars";

const SlideContainer = styled.div`
  animation: fadeInAnimation ease 3s;
  animation-fill-mode: forwards;
  text-align: center;
  height: 50%;
  width: 80%;
  display: flex;
  justify-content: center;
`;

const LeftText = styled.div`
  text-align: left;
  display: inline-block;
`;

const Image = styled.img`
    width: 300px;
  height: 400px;
    margin-left: 150px;
  border-radius: 10px;
`;

class Slide1 extends Component {

    render() {
        return <SlideContainer>

            <LeftText>
                <Header>
                    Refresher
                </Header>
                <TextBox>

                    <ul>
                        <li>Apocalyptic Novel set in 1890s England</li>
                        <li>Martians come to Earth to "start over"</li>
                        <li>Try to exterminate Earth's population</li>
                        <li>This is the story of humanity's survival</li>
                    </ul>

                </TextBox>

            </LeftText>
            <Stars />

            <Image src={"/images/martianmachine.jpg"} />


        </SlideContainer>
    }
}

export default Slide1;
