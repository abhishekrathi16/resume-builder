import { Fragment, useRef, useState } from "react";
import { MdCancel } from "react-icons/md";
import { Dialog, Transition } from "@headlessui/react";
import useSignInStore, { useAuthStore } from "../../store/SignIn_SignOut";
import useAuth from "../../FirebaseConfig/firebase_helper";
import Loading from "../Loading_Button";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import { CircularIntegration } from "../Loading_Button";

export default function SignUp(): JSX.Element {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const state = useSignInStore();
  const { signIn } = useAuth();
  const cancelButtonRef = useRef(null);
  const router = useRouter();
  const notify = (content: string) => {
    toast(content);
  };
  const handleSignIn = async () => {
    console.log(email);
    console.log(password);
    setLoading(true);
    signIn(email, password).then(() => {
      setEmail("");
      setPassword("");
      setLoading(false);
    });
  };

  return (
    <Transition.Root show={state.open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={() => state.setOpen(state.open)}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>
        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform  rounded-lg bg-transparent p-10 text-left transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="p-2 flex ">
                  <div>
                    {/* for email and password entry */}
                    {/* <!-- component --> */}
                    {/* <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12"> */}
                    <div className="relative py-3 sm:max-w-xl sm:mx-auto  ">
                      <div className="absolute inset-0 bg-gradient-to-r  from-[#2491f7] to-[#67c5fc] shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl "></div>

                      <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                        <div className="max-w-md mx-auto">
                          <div className="absolute right-6 top-5">
                            <p
                              onClick={() => state.setOpen(state.open)}
                              ref={cancelButtonRef}
                              style={{ cursor: "pointer" }}
                            >
                              <MdCancel
                                className="invert"
                                fontSize="2rem"
                                color="white"
                              />
                            </p>
                          </div>
                          <div className="w-80">
                            <h1 className="text-2xl font-semibold ">Sign In</h1>
                          </div>
                          <div className="divide-y divide-gray-200">
                            <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                              <div className="relative ">
                                <input
                                  autoComplete="off"
                                  id="email"
                                  name="email"
                                  type="text"
                                  className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                                  placeholder="Email address"
                                  value={email}
                                  onChange={(e) => setEmail(e.target.value)}
                                />
                                <label
                                  className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm
                                                                    "
                                >
                                  Email Address
                                </label>
                              </div>
                              <div className="relative top-3">
                                <input
                                  autoComplete="off"
                                  id="password"
                                  name="password"
                                  type="password"
                                  className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                                  placeholder="Password"
                                  value={password}
                                  onChange={(e) => setPassword(e.target.value)}
                                />
                                <label className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
                                  Password
                                </label>
                              </div>

                              <div className="relative top-6">
                                <CircularIntegration
                                  name="Sign In"
                                  handleFunction={handleSignIn}
                                  isLoading={loading}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* </div> */}
                  </div>
                  <div>{/* for svg */}</div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
