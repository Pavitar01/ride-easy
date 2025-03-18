import { Box, Container, Typography } from "@mui/material"
import "./styles.scss"

const VehiclesSection = () => {
    return (
        <Box className="vehicles-section">
            <Container maxWidth="lg" className="container">
                <Typography component="h1" className="vehicles-section-title">
                    Deal of the day
                </Typography>
                <Typography component="h1" className="vehicles-section-heading" sx={{
                    fontSize: {
                        md: 'var(--global-xxl-font-size-alt)',
                        lg: 'var(--global-xl-font-size)',
                        xs: 'var(--global-xl-font-size-alt)',
                    },
                }}>
                    Discount vehicles
                </Typography>
            </Container>
        </Box>
    )
}

export default VehiclesSection
