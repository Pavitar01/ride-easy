'use client'

import { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu'
import TwoWheeler from '@mui/icons-material/TwoWheelerOutlined'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { AppName } from '@/shared/constants'
import actionLinks from './action-links'
import BaseButton from '../base-button'
import './styles.scss'
import AppLogo from '../logo'

const settings = ['Profile', 'Account', 'Dashboard', 'Logout']

export const Header = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null)
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null)

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget)
  }
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }

  return (
    <AppBar position="static" className="app-bar-wrapper" elevation={0}>
      <Container maxWidth="lg" className="container">
        <Toolbar className="tool-bar" disableGutters>
          <Box display="flex" alignItems="center">
            <AppLogo sx={{ display: { xs: 'none', md: 'flex' }, mr: 1,fontSize:"34px !important" }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              className="app-name-title"
            >
              {AppName}
            </Typography>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {actionLinks.map((page) => (
                <MenuItem key={page.path} onClick={handleCloseNavMenu}>
                  <Typography sx={{ textAlign: 'center' }}>
                    {page.name}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AppLogo sx={{ display: { xs: 'flex', md: 'none' } }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              textDecoration: 'none',
            }}
          >
            {AppName}
          </Typography>

          <Box display="flex" gap={10}>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, gap:4 }}>
              {actionLinks.map((page) => (
                <Button
                  id="action-button"
                  key={page.path}
                  onClick={handleCloseNavMenu}
                >
                  {page.name}
                </Button>
              ))}
            </Box>
            <BaseButton sx={{ display: { xs: 'none', md: 'flex' }}}>Rent now</BaseButton>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography sx={{ textAlign: 'center' }}>
                    {setting}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
