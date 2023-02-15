import {Component} from "react";
import styled from "styled-components";
import {Header, SubHeader} from "../Components/Basics";
import Stars from "../Components/Stars";

const SlideContainer = styled.div`
  animation: fadeInAnimation ease 3s;
  animation-fill-mode: forwards;
  text-align: center;
`;

class Slide1 extends Component {

    render() {
        return <SlideContainer>
            <Header>
                My Thesis
            </Header>
            <SubHeader>
               We <i>are</i> the Martians
            </SubHeader>
            <Stars />
        </SlideContainer>
    }
}

export default Slide1;
