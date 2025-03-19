import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined'
import InstagramIcon from '@mui/icons-material/Instagram'
import YouTubeIcon from '@mui/icons-material/YouTube';

export const footerLinks=[
    {
        title:"About Us",
        links:null,
        description:"RideEasy offers bikes & scooters for city and adventure."
    },
    {
        title:"Quick Links",
        links:[
            {
                title:"About Us",
                href:"/about-us"
            },
            {
                title:"Vehicles",
                href:"/vehicles"
            },
            {
                title:"Services",
                href:"/services"
            },
            {
                title:"locations",
                href:"/locations"
            }
        ],
        description:null
    },
    {
        title:"Useful Links",
        links:[
            {
                title:"Privacy Policy",
                href:"/privacy-policy"
            },
            {
                title:"Terms & Conditions",
                href:"/terms-and-conditions"
            },
            {
                title:"FAQ",
                href:"/faq"
            },
          
        ],
        description:null
    },
    {
        title:"Subscribe Us",
        description:"Subscribe to get the latest updates and exclusive offers!",
        links:null
    },
]

export const socialLinks=[
    {
      icon: <FacebookOutlinedIcon />,
      href: 'https://www.facebook.com',
    },
    {
      icon: <InstagramIcon />,
      href: 'https://www.instagram.com',
    },
    {
      icon: <YouTubeIcon />,
      href: 'https://www.youtube.com',
    }
  ]