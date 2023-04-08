import React from "react";
import HomePageImage from "../../assets/homepg_img.jpg";
import { Router, useRouter } from "next/router";
import { useAuthStore } from "../../store/SignIn_SignOut";
import { toast } from "react-toastify";

const GetStarted = (): JSX.Element => {
  const { User } = useAuthStore((state) => ({
    User: state.User,
  }));

  //  for notification
  const notify = (content: string) => {
    toast(content);
  };

  const router = useRouter();
  const routeTobuilder = () => {
    //  check wether the user is logged in or not
    if (User.userId === "") {
      notify("Login Required");
    } else {
      router.push("/builder");
    }
  };
  return (
    <div className=" text-center flex justify-center items-center h-[auto]">
      <div className="header flex flex-row justify-center items-center mt-[5rem]">
        <div className="quote w-[40vw] p-20">
          <div
            className="larger-quote"
            style={{
              fontWeight: "bolder",
              fontSize: "50px",
              textAlign: "left",
            }}
          >
            Build a job-winning resume for free
          </div>
          <div className="smaller-quote text-left text-lg text-gray-500 mt-2">
            Set yourself apart with a modern resume. Expert tips, customizable
            templates & quick PDF download included.
          </div>
          {/* bg-gradient-to-r from-[#ec008c] to-[#fc6767] */}
          <div
            className="button w-[16vw] h-[4vw] bg-gradient-to-r from-[#2491f7] to-[#67c5fc] hover:cursor-pointer rounded-full flex flex-col justify-center items-center mt-10"
            onClick={routeTobuilder}
          >
            <p
              style={{
                textDecoration: "none",
                color: "white",
                fontWeight: "bold",
                textAlign: "center",
                padding: 0,
                fontSize: "1.2rem",
              }}
            >
              Get Started
            </p>
          </div>
        </div>
        <div className="image">
          <img
            src={HomePageImage.src}
            alt="pic"
            className="w-[40vw] h-[50vh]"
          />
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
