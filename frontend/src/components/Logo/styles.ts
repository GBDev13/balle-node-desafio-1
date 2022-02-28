import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 1rem;
  filter: drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.2));
  color: #fff;

  div {
    h1 {
      font-size: 3rem;
    }

    h2 {
      font-size: 1.5rem;
      font-weight: 500;
      color: #ffd736;
    }
  }
`;
