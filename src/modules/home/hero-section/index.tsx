import Image from "next/image";
import { Box, Container, Typography } from "@mui/material";
import { TypeWriter } from "@/shared/ui";
import { RiderCouples2 } from "../assets";
import "./styles.scss";

const textList = [
  {
    text: "Anytime !",
    delay: 2000,
  },
  {
    text: "Anywhere !",
    delay: 2000,
  },
];

const HeroSection = () => {
  return (
    <Box className="hero-section">
      <Container maxWidth="lg" className="hero-section-container">
        <Box className="left-section">
          <Typography component="p" className="hero-section-title">
            Enjoy your ride!
          </Typography>
          <Typography
            component="h1"
            variant="h1"
            className="hero-section-heading"
          >
            Travel with Ease <TypeWriter textList={textList} />
          </Typography>
          <Typography component="p" className="hero-section-description">
            <span className="highlight">RideEasy</span> – Enjoy fast, affordable
            bike and scooter rentals for effortless urban travel. Find, unlock,
            and ride anytime with ease and convenience. 🚲🛴
          </Typography>
        </Box>
        <Box className="right-section">
          <Image src={RiderCouples2} alt="rider-image" width={450} height={550}/>
        </Box>
      </Container>
    </Box>
  );
};

export default HeroSection;
