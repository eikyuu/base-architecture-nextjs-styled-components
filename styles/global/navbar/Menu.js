import styled from "styled-components";
import breakpoints from "../../helpers/breakpoints";

const Menu = styled.ul`
  clear: both;
  max-height: 0;
  transition: max-height 0.2s ease-out;

  @media (min-width: ${breakpoints.small}) {
    clear: none;
    max-height: none;
    float: right;
  }
`;

export default Menu;
