import { Buttons, Container } from "./styles";
import { motion } from "framer-motion";
import party from 'party-js';
import { MouseEvent } from "react";
import { AbsContainer } from "../SuccessArea/styles";
import toast from "react-hot-toast";

const sizes = [
  {
    label: 'Pequena',
    value: 'small'
  },
  {
    label: 'Média',
    value: 'medium'
  },
  {
    label: 'Grande',
    value: 'large'
  }
];

interface PassProps {
  startNewPass: () => void;
  selectedSize: string;
  setSelectedSize: (size: string) => void;
}

export function PassForm({ startNewPass, selectedSize, setSelectedSize }: PassProps) {

  async function onClick(event: MouseEvent) {
    if(!selectedSize) {
      toast.error("Selecione um tamanho!")
      return
    }

    party.confetti((event.target as any), {
      count: party.variation.range(100, 100),
    });
    setTimeout(() => {
      startNewPass();
    }, 500)
  }

  function onClickSize(event: MouseEvent, size: string) {
    party.sparkles((event.target as any));
    setSelectedSize(size)
  }
  
  return (
    <AbsContainer top="58%">
      <Container
        key="form"
        animate={{ opacity: 1, scale: 1, y: 0 }}
        initial={{ opacity: 0, scale: 0.7, y: 80 }}
        exit={{ opacity: 0, y: 80, transition: { duration: 0.8 } }}
        transition={{ duration: 1, type: 'spring', bounce: 0.8 }}
      >
        <h2>Para criar sua senha é muito simples! Basta selecionar o tamanho e clicar no botão logo abaixo</h2>

        <div>
          <h4>Tamanho</h4>
          <Buttons>
            {sizes.map(size => (
              <motion.button
                key={size.label}
                animate={{ opacity: 1, scale: 1 }}
                initial={{ opacity: 0, scale: 0.7 }}
                whileHover={{
                  scale: 0.9
                }}
                whileTap={{
                  y: -5
                }}
                transition={{ duration: 1, type: 'spring', bounce: 0.8 }}
                onClick={(event: MouseEvent) => onClickSize(event, size.value)}
                className={selectedSize === size.value ? 'selected' : ''}
              >{size.label}</motion.button>
            ))}
          </Buttons>
        </div>

        <motion.button
          animate={{ opacity: 1, scale: 1 }}
          initial={{ opacity: 0, scale: 0.7 }}
          transition={{ duration: 1, type: 'spring', bounce: 0.8 }}
          whileTap={{
            scale: 0.9
          }}
          onClick={onClick}
        >EMOJIFICAR</motion.button>
      </Container>
    </AbsContainer>
  )
}