import { useEffect } from 'react';
import useConsultationStore from '../store/consultationStore';

function useTimer() {
  const { timer, setTimer, isButtonDisabled, setIsButtonDisabled } = useConsultationStore();

  useEffect(() => {
    if (isButtonDisabled && timer > 0) {
      const intervalId = setInterval(() => {
        setTimer((prevTimer) => {
          if (prevTimer > 0) {
            return prevTimer - 1;
          } else {
            clearInterval(intervalId);
            setIsButtonDisabled(false);
            return 0;
          }
        });
      }, 1000);

      return () => clearInterval(intervalId);
    }
  }, [isButtonDisabled, timer, setTimer, setIsButtonDisabled]);
}

export default useTimer;