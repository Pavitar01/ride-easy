'use client'

import { useState } from 'react'
import { Box, Container, Typography } from '@mui/material'
import BaseButton from '../base-button'
import { BaseInput } from '../base-input'
import { footerLinks, socialLinks } from './footer-links'
import './styles.scss'

const Footer = () => {
  const [email, setEmail] = useState('')
  return (
    <Box className="footer-section">
      <Container maxWidth="lg" className="container">
        {footerLinks.map((item, index) => (
          <div key={index} className="footer-column">
            <Typography variant="h4" className="footer-column-title">
              {item.title}
            </Typography>
            {item.description && (
              <Typography component="p" className="footer-column-description">
                {item.description}
              </Typography>
            )}
            {item.links && (
              <ul className="footer-column-links">
                {item.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href={link.href}>{link.title}</a>
                  </li>
                ))}
              </ul>
            )}
            {item.title.includes('Subscribe Us') && (
              <form className="footer-column-form">
                <BaseInput
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <BaseButton>Subscribe</BaseButton>
              </form>
            )}
          </div>
        ))}
        <Box className="divider" />
        <Box className="footer-copyright">
          <Typography className="footer-copyright-text" component="p">
            © 2025 RideEasy. All rights reserved.
          </Typography>
          <Box className="footer-social-links">
            {socialLinks.map((item, index) => (
              <Box
                key={index}
                onClick={() => window.open(item.href)}
                className="social-link"
              >
                {item.icon}
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Footer
