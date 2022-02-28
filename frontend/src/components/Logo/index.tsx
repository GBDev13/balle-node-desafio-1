import Lottie from 'react-lottie';
import { Container } from "./styles";
import logo from '../../assets/logo.json';
import { AbsContainer } from '../SuccessArea/styles';

const defaultOptions = {
  loop: true,
  autoPlay: true,
  animationData: logo,
  rendererSettings: {
    preserveAspectRatio: `xMidYMid slice`
  },
  autoReverseAnimation: true
};

export function Logo() {
  return (
    <AbsContainer top="30%">
      <Container
      animate={{ opacity: 1, scale: 1 }}
      initial={{ opacity: 0, scale: 0.7 }}
      whileHover={{
        scale: 0.9
      }}
      transition={{ duration: 1, type: 'spring', bounce: 0.8 }}
    >
      <Lottie options={defaultOptions} width={150} height={200} />
      <div>
        <h1>Emojify</h1>
        <h2>"Emojifique" sua senhas</h2>
      </div>
    </Container>
    </AbsContainer>
  )
}