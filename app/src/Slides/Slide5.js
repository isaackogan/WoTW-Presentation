import {Component} from "react";
import styled from "styled-components";
import {Header, SubHeader, TextBox} from "../Components/Basics";

const SlideContainer = styled.div`
  animation: fadeInAnimation ease 3s;
  animation-fill-mode: forwards;
  text-align: center;
  height: 90%;
  width: 90%;
  display: flex;
`;


class Slide5 extends Component {

    render() {
        return <SlideContainer>
            <iframe src="https://www.google.com/maps/d/embed?mid=1tSHP60lHyfZO0EfQQ-xOLVv1o7k&hl=en&ehbc=2E312F" width="100%" height="100%"></iframe>
        </SlideContainer>
    }
}

export default Slide5;
