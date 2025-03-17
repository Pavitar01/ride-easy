import Logo from "@/assets/app-logo.svg";
import { Box } from "@mui/material";

const AppLogo = ({ sx }: { sx?: object }) => {
  return (
    <Box sx={{ width: "100px", height: "50px", ...sx }}>
      <Logo width="100%" height="100%" />
    </Box>
  );
};

export default AppLogo;
