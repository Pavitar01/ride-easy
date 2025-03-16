import TwoWheeler from '@mui/icons-material/TwoWheelerOutlined'
import { Box } from '@mui/material'
import "./styles.scss"

const AppLogo = ({ sx }: {
  sx?: object
}) => {
  return (
    <TwoWheeler sx={{ ...sx }} />
  )
}

export default AppLogo
