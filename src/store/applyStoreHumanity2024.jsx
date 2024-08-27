import { create } from 'zustand';

const useApplyStoreHumanity2024 = create((set) => ({
  year: 2000,
  month: 1,
  day: 1,
  name: '',
  phoneNumber: '',
  studentPhoneNumber: '',
  parentPhoneNumber: '',
  code: '',
  photoFile: null,
  uploadedFile: null,
  isButtonDisabled: false,
  isLoading: true,
  isVerified: false,
  selectedKoreanOptions: [],
  selectedMathOptions: [],
  selectedScienceOptions: [],
  selectedGenderOptions: [],
  selectedGraduationType: [],
  photoUrl: '',
  fileUrl: '',
  isVerified: false,
  
  setYear: (year) => set({ year }),
  setMonth: (month) => set({ month }),
  setDay: (day) => set({ day }),
  setName: (name) => set({ name }),
  setPhoneNumber: (phoneNumber) => set({ phoneNumber }),
  setStudentPhoneNumber: (studentPhoneNumber) => set({ studentPhoneNumber }),
  setParentPhoneNumber: (parentPhoneNumber) => set({ parentPhoneNumber }),
  setCode: (code) => set({ code }),
  setPhotoFile: (photoFile) => set({ photoFile }),
  setUploadedFile: (uploadedFile) => set({ uploadedFile }),
  setIsButtonDisabled: (isButtonDisabled) => set({ isButtonDisabled }),
  setIsLoading: (isLoading) => set({ isLoading }),
  setIsVerified: (isVerified) => set({ isVerified }),
  setSelectedKoreanOptions: (selectedKoreanOptions) => set({ selectedKoreanOptions }),
  setSelectedMathOptions: (selectedMathOptions) => set({ selectedMathOptions }),
  setSelectedScienceOptions: (selectedScienceOptions) => set({ selectedScienceOptions }),
  setSelectedGenderOptions: (selectedGenderOptions) => set({ selectedGenderOptions }),
  setSelectedGraduationType: (selectedGraduationType) => set({ selectedGraduationType }),
  setPhotoUrl: (photoUrl) => set({ photoUrl }),
  setFileUrl: (fileUrl) => set({ fileUrl }),
  setIsVerified: (isVerified) => set({ isVerified }),
}));

export default useApplyStoreHumanity2024;