import { create } from 'zustand';

const useConsultationStore = create((set) => ({
  selectedDate: new Date(),
  selectedTime: null,
  selectedType: 0,
  selectedBranch: 0,
  name: '',
  phoneNumber: '',
  code: '',
  isLoading: true,
  isVerified: false,
  consultationRequestConfig: null,
  setSelectedDate: (date) => set({ selectedDate: date }),
  setSelectedTime: (time) => set({ selectedTime: time }),
  setSelectedType: (type) => set({ selectedType: type }),
  setSelectedBranch: (branch) => set({ selectedBranch: branch }),
  setName: (name) => set({ name }),
  setPhoneNumber: (phoneNumber) => set({ phoneNumber }),
  setCode: (code) => set({ code }),
  setIsCodeSent: (isCodeSent) => set({ isCodeSent }),
  setTimer: (timer) => set({ timer }),
  setIsLoading: (isLoading) => set({ isLoading }),
  setConsultationRequestConfig: (config) => set({ consultationRequestConfig: config }),
  setIsVerified: (isVerified) => set({ isVerified }),
}));

export default useConsultationStore;