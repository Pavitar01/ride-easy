'use client'

import { useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import MenuIcon from '@mui/icons-material/Menu'
import { Typography } from '@mui/material'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import IconButton from '@mui/material/IconButton'
import Toolbar from '@mui/material/Toolbar'
import BaseButton from '../base-button'
import TemporaryDrawer from '../drawer'
import AppLogo from '../logo'
import UnderlineAnimation from '../underline-animation'
import actionLinks, { ActionLink } from './action-links'
import './styles.scss'

export const Header = () => {
  const { push } = useRouter()
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const closeDrawer = () => {
    setIsOpen(false)
  }

  const openDrawer = () => {
    setIsOpen(true)
  }
  const handleCloseNavMenu = (page: ActionLink) => {
    push(page.path)
  }

  return (
    <AppBar position="static" className="app-bar-wrapper" elevation={0}>
      <Container maxWidth="lg" className="container">
        <Toolbar className="tool-bar" disableGutters>
          <Box display="flex" alignItems="center">
            <AppLogo
              sx={{
                display: { xs: 'none', md: 'flex' },
              }}
            />
          </Box>
          <Box className="logo-wrapper">
            <AppLogo sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={openDrawer}
            >
              <MenuIcon />
            </IconButton>
            <TemporaryDrawer isOpen={isOpen} onClose={closeDrawer} />
          </Box>

          <Box display="flex" gap={10}>
            <Box
              sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, gap: 4 }}
            >
              {actionLinks.map((page) => (
                <UnderlineAnimation
                  onClick={() => handleCloseNavMenu(page)}
                  id="action-link"
                  text={page.name}
                  key={page.name}
                  origin="center"
                />
              ))}
            </Box>
            <BaseButton sx={{ display: { xs: 'none', md: 'flex' } }}>
              Rent now
            </BaseButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
