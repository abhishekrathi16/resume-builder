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
    // console.log("open",open);
    return open;
  },
});

const signUpstore = (set: any): SignIn_SignUpState => ({
  open: false,
  setOpen: (open: boolean) => {
    set((state: any) => ({
      open: !state.open,
    }));
    // console.log("open", open);
    return open;
  },
});

const useSignInStore = create(signInstore);

const useSignUpStore = create(signUpstore);

export default useSignInStore;
export { useSignUpStore };
