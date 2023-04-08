import React from "react";
import Image_404 from "../assets/3747371.jpg";

const Custom404 = () => {
  return (
    <div className=" text-center flex justify-center items-center h-[82vh] overflow-y-hidden">
      <div className="header flex flex-row justify-center items-center mt-[5rem]">
        <div className="quote w-[40vw] p-20">
          <div
            className="larger-quote"
            style={{
              fontWeight: "bolder",
              fontSize: "40px",
              textAlign: "left",
            }}
          >
            Nobody Else Has Shown Up. Well, Damn. Guess They Got Lost.
          </div>
          <div className="smaller-quote text-left text-[30px] text-gray-500 mt-2">
            -Zoro
          </div>
          {/* bg-gradient-to-r from-[#ec008c] to-[#fc6767] */}
          <div className="button w-[16vw] h-[4vw] bg-gradient-to-r from-[#2491f7] to-[#67c5fc] hover:cursor-pointer rounded-full flex flex-col justify-center items-center mt-10">
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
              Back to landing!
            </a>
          </div>
        </div>
        <div className="image">
          <img src={Image_404.src} alt="pic" className="w-[40vw] h-[50vh]" />
        </div>
      </div>
    </div>
  );
};

export default Custom404;
