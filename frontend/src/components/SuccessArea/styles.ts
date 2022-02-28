import styled from "styled-components";
import { motion } from "framer-motion";

interface AbsProps {
  top?: string;
}

export const AbsContainer = styled.div<AbsProps>`
  position: absolute;
  top: ${({ top }) => top ?? "50%"};
  left: 50%;
  transform: translate(-50%, -50%);
`;

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
  position: relative;

  .back {
    position: absolute;
    left: -1rem;
    top: -1rem;
    font-size: 2.5rem;
    transform: rotate(-20deg);
    color: #fff;
    transition: 0.4s;
    cursor: pointer;

    &:hover {
      transform: scale(1.2);
    }
  }

  > input {
    background: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.18);
    padding: 1rem 0.1rem;
    text-align: center;
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
