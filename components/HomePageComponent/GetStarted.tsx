import React from "react";
import HomePageImage from "../../assets/homepg_img.jpg";

const GetStarted = (): JSX.Element => {
  return (
    <div className=" text-center flex justify-center items-center   ">
      <div className="header flex flex-row justify-center items-center mt-10">
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
          <div className="button w-[16vw] h-[4vw] bg-gradient-to-r from-[#ec008c] to-[#fc6767] rounded-full flex flex-col justify-center items-center mt-10">
            <a
              href="#"
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
            </a>
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
