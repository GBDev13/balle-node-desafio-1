import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2rem;

  @media (max-width: 680px) {
    transform: scale(0.7);
  }
`;
