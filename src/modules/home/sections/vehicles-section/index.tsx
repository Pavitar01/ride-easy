import { Box, Button, Container, Typography } from "@mui/material"
import VehicleCard from "./card"
import { vehicles } from "./vehicles"
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import "./styles.scss"

const VehiclesSection = () => {
    return (
        <Box className="vehicles-section">
            <Container maxWidth="lg" className="container">
                <Box className="wrapper">
                    <Box className="title-container">
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
                    </Box>
                    <Button variant="outlined" className="all-vehicles-button">
                        <ArrowRightAltIcon color="inherit"/>
                        &nbsp; &nbsp;
                        All Vehicles
                    </Button>
                </Box>
                <Box className="vehicles">
                    {vehicles.map((vehicle, index) => (
                        <VehicleCard
                            key={index}
                            features={vehicle.features}
                            title={vehicle.title}
                            price={vehicle.price}
                            image={vehicle.image}
                        />
                    ))}
                    
                </Box>
            </Container>
        </Box>
    )
}

export default VehiclesSection
