import {Component} from "react";
import styled from "styled-components";
import {Header, SubHeader, TextBox} from "../Components/Basics";
import Stars from "../Components/Stars";

const SlideContainer = styled.div`
  animation: fadeInAnimation ease 3s;
  animation-fill-mode: forwards;
  text-align: center;
  height: 50%;
  width: 60%;
  display: flex;
`;

const LeftText = styled.div`
  text-align: left;
  display: inline-block;
`;

const WellsImage = styled.div`
`;

class Slide1 extends Component {

    render() {
        return <SlideContainer>

            <LeftText>
                <Header>
                    About The Author
                </Header>
                <TextBox>

                    <ul>
                        <li>H.G. Wells born Sept. 21st, 1866</li>
                        <li>Studied and lived in London, England</li>
                        <li>Politically active advocating for socialism & world government</li>
                        <li>Died on August 13th, 1946</li>
                    </ul>

                </TextBox>
            </LeftText>
            <WellsImage>
                <img style={{width: "300px"}} src={"images/hgwells.webp"} />
            </WellsImage>
            <Stars />

        </SlideContainer>
    }
}

export default Slide1;
