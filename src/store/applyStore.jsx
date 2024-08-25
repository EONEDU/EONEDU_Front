import { create } from 'zustand';

const useApplyStore = create((set) => ({
  name: '',
  phoneNumber: '',
  code: '',
  isCodeSent: false,
  isButtonDisabled: false,
  timer: 300,
  isLoading: true,
  codeGenerateRequestConfig: null,
  consultationRequestConfig: null,
  
  setName: (name) => set({ name }),
  setPhoneNumber: (phoneNumber) => set({ phoneNumber }),
  setCode: (code) => set({ code }),
  setIsCodeSent: (isCodeSent) => set({ isCodeSent }),
  setIsButtonDisabled: (isButtonDisabled) => set({ isButtonDisabled }),
  setTimer: (timer) => set({ timer }),
  setCodeGenerateRequestConfig: (config) => set({ codeGenerateRequestConfig: config }),
  setIsLoading: (isLoading) => set({ isLoading }),
  setConsultationRequestConfig: (config) => set({ consultationRequestConfig: config }),
}));

export default useApplyStore;