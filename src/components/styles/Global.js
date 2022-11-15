import { createGlobalStyle } from "styled-components";
import RobotLight from "../../assets/fonts/roboto/Roboto-Light.ttf";
import RobotMedium from "../../assets/fonts/roboto/Roboto-Medium.ttf";
import RobotRegular from "../../assets/fonts/roboto/Roboto-Regular.ttf";
const GlobalStyles = createGlobalStyle`

@font-face {
        font-family: 'RobotLight';
        src: url(${RobotLight}) format("ttf");
        font-weight: 100;
        font-style: normal;
    }
@font-face {
        font-family: 'RobotMedium';
        src: url(${RobotMedium}) format("ttf");
        font-weight: 600;
        font-style: normal;
    }
@font-face {
        font-family: 'RobotRegular';
        src: url(${RobotRegular}) format("ttf");
        font-weight: 800;
        font-style: normal;
    }
*{
box-sizing: border-box;
margin: 0;
padding: 0;
border: 0;
&::-webkit-scrollbar {
  width: 6px;
}

&::-webkit-scrollbar-track {
 margin: 20px 0;
}

&::-webkit-scrollbar-thumb {
  background-color: #242424ba;
  border-radius: 20px;
  /* border: 3px solid orange; */
}
}



.App{
  height: 100vh;
  background-color: ${({ theme }) => theme.body.background};
  color:${({ theme }) => theme.generalColors.textDefaultColor};
  display:grid;
  grid-template-columns: 1fr;
  grid-template-rows: 63px 1fr;
  /* font-family: 'RobotLight', Helvetica, sans-serif !important; */

font-family: 'RobotMedium', Helvetica, sans-serif !important;
/* font-family: 'RobotRegular', Helvetica, sans-serif !important; */
}
a {
  text-decoration: none;
  color :${({ theme }) => theme.generalColors.black};
}

`;

export default GlobalStyles;
