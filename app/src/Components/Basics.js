import styled from "styled-components";

const Header = styled.div`
  font-weight: 500;
  font-size: 90px;
  color: whitesmoke;
`;

const SubHeader = styled.div`
  font-weight: 300;
  font-size: 60px;
  color: whitesmoke;
`;

const TextBox = styled.div`
  font-weight: normal;
  font-size: 30px;
  color: whitesmoke;
`;

const LeftText = styled.div`
  text-align: left;
  display: inline-block;
`;

function SmallMars() {
    const FeatherImage = styled.img`
      width: 250px;
      
      animation: rotation 120s infinite linear;
    
    `;

        const ScaleImage = styled.div`
      animation: flickerAnimation 60s infinite;
    `;


    return (
        <ScaleImage>
            <FeatherImage src={"mars.gif"} />
        </ScaleImage>
    )
}

export {
    Header,
    SubHeader,
    TextBox,
    LeftText,
    SmallMars
}

