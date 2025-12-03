import styled from "styled-components";

export const WrapHome = styled.div`
  position: relative;
`;

export const Intro = styled.div`
  position: relative;
  width: 100%;
  min-height: 80vh;
  margin-bottom: 24px;
`;

export const MainImage = styled.img`
  width: 100%;
  //height: 100%;
  object-fit: cover;
`;

export const SVGContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 27rem;
  height: 27rem;
`;

export const WelcomeText = styled.p`
  font-size: var(--large-font-size);
  font-family: Caveat;
  font-weight: 500;
  position: absolute;
  top: 50%;
  left: 50%;
  max-width: 19rem;
  max-height: 19rem;
  transform: translate(-50%, -50%);
  text-align: center;
  margin-top: -1rem;
  margin-bottom: 0;
  color: var(--primary-color);
`;
