import { create } from 'zustand';

const useApplyStore = create((set) => ({
  year: 2000,
  month: 1,
  day: 1,
  name: '',
  phoneNumber: '',
  studentPhoneNumber: '',
  code: '',
  photoFile: null,
  uploadedFile: null,
  isButtonDisabled: false,
  isLoading: true,
  isVerified: false,
  
  setYear: (year) => set({ year }),
  setMonth: (month) => set({ month }),
  setDay: (day) => set({ day }),
  setName: (name) => set({ name }),
  setPhoneNumber: (phoneNumber) => set({ phoneNumber }),
  setStudentPhoneNumber: (studentPhoneNumber) => set({ studentPhoneNumber }),
  setCode: (code) => set({ code }),
  setPhotoFile: (photoFile) => set({ photoFile }),
  setUploadedFile: (uploadedFile) => set({ uploadedFile }),
  setIsButtonDisabled: (isButtonDisabled) => set({ isButtonDisabled }),
  setIsLoading: (isLoading) => set({ isLoading }),
  setIsVerified: (isVerified) => set({ isVerified }),
}));

export default useApplyStore;