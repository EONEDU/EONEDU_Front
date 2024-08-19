import { create } from 'zustand';
import { combine } from 'zustand/middleware';

const useStore = create(
  combine(
    {
      user: null,
      theme: 'light',
    },
    (set) => ({
      setUser: (user) => set({ user }),
      setTheme: (theme) => set({ theme }),
    })
  )
);

export default useStore;