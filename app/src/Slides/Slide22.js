import {Component} from "react";
import styled from "styled-components";
import {Header, LeftText, SubHeader, TextBox} from "../Components/Basics";
import Stars from "../Components/Stars";

const SlideContainer = styled.div`
  animation: fadeInAnimation ease 3s;
  animation-fill-mode: forwards;
  text-align: center;
  width: 60%;
`;

const SideImage = styled.div`
  margin-left: 100px;
`;

class Slide1 extends Component {

    render() {
        return <SlideContainer>
            <LeftText style={{display: "flex", alignItems: "center"}}>
                <TextBox>
                    <Header>
                        A Jungian View
                    </Header>

                    <ul>
                        <li>The martians can be seen as a manifestation of "The Shadow" in his model of the psyche</li>
                        <li>Represent dark, repressed aspects of humanity hidden from conscious awareness</li>
                        <li>Martians bring the shadow to light through their invasion, making us to reflect on our own selves</li>
                    </ul>
                </TextBox>
                <SideImage>                <img style={{width: "300px", borderRadius: "5px"}} src={"images/jungmodel.jpg"} />
                </SideImage>
            </LeftText>

            <Stars />

        </SlideContainer>
    }
}

export default Slide1;
