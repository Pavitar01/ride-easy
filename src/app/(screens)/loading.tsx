'use client'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { Box } from '@mui/material';

const Loading = () => {
  return (
    <Box sx={{ width: "100%", height: "100vh", display: "grid", placeItems: "center" }}>
      <DotLottieReact
        src="https://lottie.host/eecd177f-2c25-4957-82af-b1ab883d348e/eLj1MN9h9i.lottie"
        loop
        autoplay
      />
    </Box>
  );
};

export default Loading;