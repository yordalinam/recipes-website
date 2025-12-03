import styled from "styled-components";

export const NavContainer = styled.div`
  font-size: var(--medium-font-size);
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0.8rem 1.5rem;
`;

export const NavImgContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5rem;
`;

export const WebsiteName = styled.span`
  font-size: var(--medium-font-size);
  font-weight: 800;
`;

export const NavWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 3rem;
`;
