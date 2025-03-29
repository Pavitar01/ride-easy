import Image from 'next/image'
import { Box, Container, Typography } from '@mui/material'
import { Circle } from '@/shared/assets'
import { WhoWeAre } from '../../assets'
import DoneIcon from '@mui/icons-material/Done';
import VideoPlayer from '@/shared/ui/video'
import { services } from './services'
import './styles.scss'

const WhoWeAreSection = () => {
  return (
    <Box className="who-we-are-section">
      <Container maxWidth="lg" className="container">
        <Box className="who-we-are-left-section">
          <Box className="image-container">
            <Image
            loading="lazy"
              src={WhoWeAre}
              className='who-we-are-image'
              alt="who-we-are-image"
              quality={100}
              width={500}
              height={500}
              style={{ objectFit: "cover" }}
            />
          </Box>
          <Image
                  loading='lazy'
            src={Circle}
            alt="circle-image"
            className="circle-image"
            width={260}
            height={260}
          />
          <Box className="video-player-container">
            <VideoPlayer />
          </Box>
        </Box>
        <Box className="who-we-are-right-section">
          <Typography component="h1" className="who-we-are-title">
            Who We Are
          </Typography>
          <Typography
            component="h1"
            className="who-we-are-heading"
            sx={{
              fontSize: {
                md: 'var(--global-xxl-font-size-alt)',
                lg: 'var(--global-xl-font-size)',
                xs: 'var(--global-xl-font-size-alt)',
              },
            }}
          >
            Offering a wide range of reliable rental vehicles.
          </Typography>
          <Typography component="p" className="who-we-are-description">
            We are a trusted rental service offering a diverse selection of vehicles to suit every need, from daily commutes to special occasions. Our commitment is to provide reliable, well-maintained, and affordable transportation solutions for individuals and businesses alike.
          </Typography>

          <Box className="service-list-container">
            {
              services.map((service, index) => {
                return <Typography key={index} className="service">
                  <DoneIcon className="service-icon" fontSize='inherit' />{service}
                </Typography>
              })
            }
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default WhoWeAreSection
