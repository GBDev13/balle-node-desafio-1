import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.section)`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  justify-content: center;
  flex-direction: column;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(3px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  padding: 2rem 3.5rem;
  border-radius: 2rem;
  max-width: 40rem;
  color: #fff;

  > div {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    width: 100%;
  }

  h2 {
    font-size: 1.2rem;
    text-align: center;
    font-weight: 500;
  }

  > button {
    width: 100%;
    background: #aecbff;
    padding: 0.5rem 1rem;
    border-radius: 0.8rem;
    color: #fff;
    font-size: 1.5rem;
    font-weight: 900;
    border: none;
    transition: background-color 0.5s, padding 0.5s;

    &:hover {
      background-color: #ffd736;
      padding: 1.5rem;
    }
  }

  @media (max-width: 680px) {
    max-width: 100%;
    width: 100%;
    padding: 2rem;
  }
`;

export const Buttons = styled.div`
  gap: 1rem;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  button {
    width: 100%;
    background: #e57ec0;
    padding: 0.5rem 1rem;
    border-radius: 0.8rem;
    color: #fff;
    font-size: 1.2rem;
    border: none;
    transition: background-color 0.3s;

    &:hover {
      background-color: #ffd736;
    }

    &.selected {
      background-color: #ffd736;
    }
  }
`;
