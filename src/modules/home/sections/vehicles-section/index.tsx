import { Box, Typography } from "@mui/material"

const VehiclesSection = () => {
    return (
        <Box className="vehicles-section">
            <Typography component="h1" className="vehicles-section-title">
                Deal of the day
            </Typography>
            <Typography component="p">Discount vehicles</Typography>
        </Box>
    )
}

export default VehiclesSection
