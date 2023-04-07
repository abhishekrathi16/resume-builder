import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { LinearProgress } from "@mui/material";

interface width {
  width: number;
}

const Loading = () => {
  return (
    <>
      <div className={`flex items-center justify-center w-${16} m-[4px] `}>
        <div
          className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
          role="status"
        >
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Loading...
          </span>
        </div>
      </div>
    </>
  );
};

const BuilderPageLoading = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          height: "100vh",
          widht: "100wh",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CircularProgress thickness={2} size={60} />
        <div className="mt-4 text-[#3b82f6]">Loading...</div>
      </Box>
    </>
  );
};

export default Loading;
export { BuilderPageLoading };
