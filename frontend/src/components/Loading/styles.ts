import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 1rem;
  filter: drop-shadow(5px 10px 10px rgba(0, 0, 0, 0.2));
  color: #fff;

  h1 {
    font-size: 3rem;
  }
`;
