import { useEffect } from 'react';
import useConsultationStore from '../store/consultationStore';

const useTimer = () => {
  const { isButtonDisabled, timer, setIsButtonDisabled, setTimer } = useConsultationStore();

  useEffect(() => {
    let interval;
    if (isButtonDisabled && timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else if (timer === 0) {
      setIsButtonDisabled(false);
      setTimer(300);
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isButtonDisabled, timer, setIsButtonDisabled, setTimer]);
};

export default useTimer;