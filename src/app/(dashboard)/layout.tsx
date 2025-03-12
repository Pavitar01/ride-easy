import { Header } from "@/shared/ui"
import { Box } from "@mui/material"

const ProtectedLayout = () => {
  return (
    <Box className="layout-wrapper">
      <Header/>
    </Box>
  )
}

export default ProtectedLayout
