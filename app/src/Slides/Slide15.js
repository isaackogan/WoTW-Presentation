import {Component} from "react";
import styled from "styled-components";
import {Header, SubHeader, TextBox} from "../Components/Basics";
import Letters from "../Components/Letters";

const SlideContainer = styled.div`
  animation: fadeInAnimation ease 3s;
  animation-fill-mode: forwards;
  text-align: center;
  width: 60%;
  display: flex;
`;

const LeftText = styled.div`
  text-align: left;
  display: inline-block;
`;

class Slide6 extends Component {

    render() {
        return <SlideContainer>

            <LeftText>

                <TextBox>
                    <strong style={{marginBottom: "10px"}}>Another Quote</strong>
                    <br/><br/>
                    <i style={{fontSize: "28px"}}>
                        “And before we judge of them too harshly we must remember what ruthless and utter destruction our own species has wrought, not only upon animals, such as the vanished bison and the dodo, but upon its inferior races. The Tasmanians, in spite of their human likeness, were entirely swept out of existence in a war of extermination waged by European immigrants, in the space of fifty years. Are we such apostles of mercy as to complain if the Martians warred in the same spirit?”

                    </i>

                </TextBox>
            </LeftText>
            <Letters />
        </SlideContainer>
    }
}

export default Slide6;
