import styled from "styled-components";
import Button from "./Button";
const ButtonTransparent=styled(Button)`
 background-color:transparent;
 border:2px solid #4E71FE;
 color: #4E71FE;
 &:hover {
  background-color:#4E71FE;
  color: #fff;
 }
`
export default ButtonTransparent;
