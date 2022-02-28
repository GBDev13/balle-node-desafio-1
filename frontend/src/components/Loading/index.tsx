import Lottie from 'react-lottie';
import { Container } from "./styles";
import loading from '../../assets/loading.json';
import { AbsContainer } from '../SuccessArea/styles';

const defaultOptions = {
  loop: true,
  autoPlay: true,
  animationData: loading,
  rendererSettings: {
    preserveAspectRatio: `xMidYMid slice`
  },
  autoReverseAnimation: true
};

export function Loading() {
  return (
    <AbsContainer>
      <Container
      key="loading"
      animate={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 50 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 1, type: 'spring', bounce: 0.8 }}
    >
      <Lottie options={defaultOptions} width={150} height={200} />
      <h1>Gerando...</h1>
    </Container>
    </AbsContainer>
  )
}