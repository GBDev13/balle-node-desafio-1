import { AbsContainer, Container } from "./styles";
import { motion } from "framer-motion";
import party from 'party-js';
import { MouseEvent } from "react";
import toast from "react-hot-toast";
import { RiArrowLeftCircleFill } from 'react-icons/ri';

interface SuccessProps {
  password: string;
  resetFc: () => void;
}

export function SuccessArea({ password, resetFc }: SuccessProps) {

  function onClick(event: MouseEvent) {
    party.confetti((event.target as any), {
      count: party.variation.range(100, 100),
    });
    navigator.clipboard.writeText(password);
    toast.success("Emojify foi copiado para sua área de transferência!")
  }
  
  return (
    <AbsContainer top="55%">
      <Container
        key="success"
        animate={{ opacity: 1, scale: 1, y: 0 }}
        initial={{ opacity: 0, scale: 0.7, y: 80 }}
        exit={{ opacity: 0, y: 80, transition: { duration: 0.8 } }}
        transition={{ duration: 1, type: 'spring', bounce: 0.8 }}
      >
        <RiArrowLeftCircleFill className="back" onClick={resetFc} />
        <h2>Sua senha Emojify está pronta!<br />Agora armazene ela com carinho!</h2>

        <input value={password} disabled/>

        <motion.button
          animate={{ opacity: 1, scale: 1 }}
          initial={{ opacity: 0, scale: 0.7 }}
          transition={{ duration: 1, type: 'spring', bounce: 0.8 }}
          whileTap={{
            scale: 0.9
          }}
          onClick={onClick}
        >COPIAR SUA EMOJIFY</motion.button>
      </Container>
    </AbsContainer>
  )
}