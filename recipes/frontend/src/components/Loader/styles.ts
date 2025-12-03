import styled, {keyframes} from "styled-components";

const rotation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const StyledLoader = styled.span<{
  $width: string;
  $height: string;
  $afterWidth: string;
  $afterHeight: string;
}>`
  width: ${(props) => props.$width};
  height: ${(props) => props.$height};
  border: 3px solid #acb5b2;
  border-radius: 50%;
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  animation: ${rotation} 1s linear infinite;

  &::after {
    content: "";
    box-sizing: border-box;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: ${(props) => props.$afterWidth};
    height: ${(props) => props.$afterHeight};
    border-radius: 50%;
    border: 4px solid transparent;
    border-bottom-color: #a31414;
  }
`;