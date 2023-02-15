import {Component} from "react";
import styled from "styled-components";
import {Header, SubHeader, TextBox} from "../Components/Basics";
import Stars from "../Components/Stars";

const SlideContainer = styled.div`
  animation: fadeInAnimation ease 3s;
  animation-fill-mode: forwards;
  text-align: center;
  height: 50%;
  width: 75%;
  display: flex;
  justify-content: center;
  align-content: center;
`;

const LeftText = styled.div`
  text-align: left;
  display: inline-block;
`;

const WellsImage = styled.div`
  justify-content: center;
  margin-top: auto;
  margin-bottom: auto;
  align-content: center;
  margin-left: 70px;
  opacity: 0.8;
  animation: flickerGrayscale 10s infinite;
`;

class Slide6 extends Component {

    render() {
        return <SlideContainer>

            <LeftText>
                <Header>
                    Darwin<sub>1</sub> x WoTW<sub>1</sub>
                </Header>
                <TextBox style={{width: "90%", fontSize: "40px"}}>

                    <ul>
                        <li>The martians are intellectually as well as evolutionarily MORE advanced than us</li>
                        <li>They are out-competing humans; they are 'fitter' organisms than us</li>
                        <li>In a sense, the martians <i>are</i> us, only a more physically evolved version</li>
                    </ul>

                </TextBox>
            </LeftText>
            <WellsImage>
                <img style={{width: "300px", borderRadius: "5px"}} src={"images/martian.jpg"} />
            </WellsImage>
            <Stars />

        </SlideContainer>
    }
}

export default Slide6;
