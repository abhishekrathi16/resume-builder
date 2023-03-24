import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface SignIn_SignUpState {
  open: boolean;
  setOpen: (open: boolean) => boolean;
}

const signInstore = (set: any): SignIn_SignUpState => ({
  open: false,
  setOpen: (open: boolean) => {
    set((state: any) => ({
      open: !state.open,
    }));
    return open;
  },
});

const signUpstore = (set: any): SignIn_SignUpState => ({
  open: false,
  setOpen: (open: boolean) => {
    set((state: any) => ({
      open: !state.open,
    }));
    return open;
  },
});

export interface UserData {
  name: string;
  email: string | null;
  userId: string;
}

interface AuthState {
  loading: boolean;
  User: UserData;
  setUser: (user: UserData, isLoging: boolean) => void;
  setLoading: () => void;
}

const useAuthStore = create<AuthState>((set) => ({
  loading: false,
  User: { name: "", email: "", userId: "" } as UserData,
  setUser: (user: UserData, isLoging: boolean) =>
    set((state) => ({
      ...state,
      User: {
        name: isLoging ? (state.User.name = user.name) : (state.User.name = ""),
        email: isLoging
          ? (state.User.email = user.email)
          : (state.User.email = ""),
        userId: isLoging
          ? (state.User.userId = user.userId)
          : (state.User.userId = ""),
      },
    })),
  setLoading: () =>
    set((state) => ({
      ...state,
      loading: !state.loading,
    })),
}));

const useSignInStore = create(signInstore);

const useSignUpStore = create(signUpstore);

export default useSignInStore;
export { useSignUpStore, useAuthStore };
