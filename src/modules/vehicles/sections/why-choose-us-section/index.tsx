import Image from 'next/image'
import { Box, Container, Typography } from '@mui/material'
import { Circle } from '@/shared/assets'
import { WhyChooseUs } from '../../assets'
import DoneIcon from '@mui/icons-material/Done';
import VideoPlayer from '@/shared/ui/video'
import { services } from './services'
import './styles.scss'
import { Accordian } from '@/shared/ui/accordian';

const WhyChooseUsSection = () => {
  return (
    <Box className="why-choose-us-section">
      <Container maxWidth="lg" className="container">
        <Box className="why-choose-us-left-section">
          <Box className="image-container">
            <Image
              src={WhyChooseUs}
              className='why-choose-us-image'
              alt="why-choose-us-image"
              quality={100}
              width={500}
              height={500}
              style={{ objectFit: "cover" }}
            />
          </Box>
          <Image
            src={Circle}
            alt="circle-image"
            className="circle-image"
            width={260}
            height={260}
          />
        </Box>
        <Box className="why-choose-us-right-section">
          <Typography component="h1" className="why-choose-us-title">
            Best rental service
          </Typography>
          <Typography
            component="h1"
            className="why-choose-us-heading"
            sx={{
              fontSize: {
                md: 'var(--global-xxl-font-size-alt)',
                lg: 'var(--global-xl-font-size)',
                xs: 'var(--global-xl-font-size-alt)',
              },
            }}
          >
            Why Rent From Us?
          </Typography>
          <Typography component="p" className="why-choose-us-description">
            We provide top-quality bikes and Activas at budget-friendly rates. With seamless booking, flexible plans, easy pickups, and 24/7 support, your ride is always smooth and hassle-free.
          </Typography>

          <Box className="service-list-container">
            {
              services.map((service, index) => {
                return <Accordian title={service.title} description={service.description} key={index} />
              })
            }
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default WhyChooseUsSection
