import { Fragment, useEffect, useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { useRouter } from "next/router";
import useSignInStore, {
  useAuthStore,
  useSignUpStore,
} from "../store/SignIn_SignOut";
import { UserData } from "../store/SignIn_SignOut";
// import Logo from "../assets/resume-icon.png";
import Logo from "../assets/logos/Logo-3.jpeg";
import { toast } from "react-toastify";
import UserImage from "../public/user.png"
import Image from "next/image";

const navigation = [
  { name: "Home", href: "/", current: true },
  { name: "Sign In", href: "/", current: false },
  { name: "Sign Up", href: "/", current: false },
];

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const state = useSignInStore();
  const state1 = useSignUpStore();
  const router = useRouter();
  const { User, setUser } = useAuthStore((state) => ({
    User: state.User,
    setUser: state.setUser,
  }));

  const notify = (content: string) => {
    toast(content);
  };

  const handleSignOut = () => {
    // remove data from localstorage -> add this part after adding context API
    setUser(User, false);
    console.log("user", User);
    notify("zaannkuuu my friend");
    localStorage.removeItem("userInfo");
    router.push("/");
  };

  const redirect_to_Home_page = ()=>{
    router.push("/")
  }

  return (
    <Disclosure
      as="nav"
      className="bg-gradient-to-r from-[#2491f7] to-[#67c5fc] print:hidden"
    >
      {({ open }) => (
        <>
          <div className="px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              {/* Icon of website */}
              <div className="flex  `justify-center` items-center ml-0  ">
                <div className="p-3 cursor-pointer " onClick={redirect_to_Home_page}>
                  <img
                    className="hidden h-10 w-auto rounded-xl lg:block"
                    src={Logo.src}
                    alt="Your Company"
                  />
                </div>
                {/* <div className="p-3">
                  <p className="text-white font-bold">Resumize</p>
                </div> */}
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-end">
                <div className="flex flex-shrink-0 items-center"></div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {User.userId.length == 0 ? (
                      <>
                        <p
                          style={{ cursor: "pointer" }}
                          onClick={() => state.setOpen(state.open)}
                          key="Sign In"
                          className="text-white hover:text-gray-200 rounded-md px-3 py-2 text-sm font-bold"
                        >
                          Sign In
                        </p>
                        <p
                          onClick={() => state1.setOpen(state1.open)}
                          key="Sign Up"
                          style={{ cursor: "pointer" }}
                          className="text-white hover:text-gray-200 rounded-md px-3 py-2 text-sm font-bold"
                        >
                          Sign Up
                        </p>
                      </>
                    ) : (
                      <></>
                    )}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  {User.userId.length > 0 ? (
                    <>
                      <div>
                        <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                          <span className="sr-only">Open user menu</span>
                          <Image
                            className="h-8 w-8 rounded-full"
                            src={UserImage}
                            alt=""
                          />
                        </Menu.Button>
                      </div>
                    </>
                  ) : (
                    <></>
                  )}

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div>
                        <p className=" block px-4 py-2  text-cyan-800 font-thin">
                          {User.name}
                        </p>
                        <p className=" block px-4 py-2 text-sm text-cyan-800 ">
                          {" "}
                          {User.email}{" "}
                        </p>
                      </div>
                      <Menu.Item>
                        {({ active }) => (
                          <p
                            style={{ cursor: "pointer" }}
                            className={classNames(
                              active ? "bg-gray-200" : "",
                              "block px-4 py-2 font-medium bg-gray-100	 text-gray-700 "
                            )}
                            onClick={handleSignOut}
                          >
                            Sign Out
                          </p>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  );
}
