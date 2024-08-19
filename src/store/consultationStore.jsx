import { create } from 'zustand';

const useConsultationStore = create((set) => ({
  selectedDate: new Date(),
  selectedTime: null,
  selectedType: 0,
  selectedBranch: 0,
  name: '',
  phoneNumber: '',
  code: '',
  isCodeSent: false,
  isButtonDisabled: false,
  timer: 300,
  isLoading: true,
  codeGenerateRequestConfig: null,
  consultationRequestConfig: null,
  setSelectedDate: (date) => set({ selectedDate: date }),
  setSelectedTime: (time) => set({ selectedTime: time }),
  setSelectedType: (type) => set({ selectedType: type }),
  setSelectedBranch: (branch) => set({ selectedBranch: branch }),
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

export default useConsultationStore;