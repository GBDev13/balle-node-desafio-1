import { Logo } from '../../components/Logo';
import { Container } from './styles';
import { AnimatePresence } from "framer-motion";
import { useState } from 'react';
import { PassForm } from '../../components/PassForm';
import { Loading } from '../../components/Loading';
import { SuccessArea } from '../../components/SuccessArea';
import { api } from '../../services/api';
import toast from 'react-hot-toast';

export function Home() {
  const [selectedSize, setSelectedSize] = useState('');

  const [isCreatingNewPass, setIsCreatingNewPass] = useState(false);
  const [isCreated, setIsCreated] = useState(''); 

  function resetFc() {
    setIsCreatingNewPass(false);
    setIsCreated('');
    setSelectedSize('');
  }

  async function startNewPass() {
    try {
      setIsCreatingNewPass(true);

      const { data } = await api.post("/generatePass", { size : selectedSize })
      setSelectedSize('');

      setTimeout(() => {
        setIsCreatingNewPass(false);
        setIsCreated(data.password);
      }, 2000);
    } catch (err: any) {
      toast.error(err.response.data.message ?? 'Ocorreu um erro ao gerar sua senha Emojify 😢')
      console.log(err)
    }
  }

  return (
    <Container>
      <Logo />
      <AnimatePresence>
        {isCreatingNewPass && <Loading />}
      </AnimatePresence>
      <AnimatePresence>
        {!isCreatingNewPass && !isCreated && (
          <PassForm
            startNewPass={startNewPass}
            selectedSize={selectedSize}
            setSelectedSize={setSelectedSize}
          />
        )
        }
      </AnimatePresence>
      <AnimatePresence>
        {!!isCreated && (
          <SuccessArea password={isCreated} resetFc={resetFc}/>
        )
        }
      </AnimatePresence>
      
    </Container>
  )
}