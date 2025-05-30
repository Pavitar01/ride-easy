'use client'

import { useEffect, useState, useTransition } from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import MenuIcon from '@mui/icons-material/Menu'
import MenuOpenIcon from '@mui/icons-material/MenuOpen'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import IconButton from '@mui/material/IconButton'
import Toolbar from '@mui/material/Toolbar'
import { login } from '@/modules/auth/store/authSlice'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import TemporaryDrawer from '../drawer'
import AppLogo from '../logo'
import UnderlineAnimation from '../underline-animation'
import actionLinks from './action-links'
import Locations from '@/modules/home/components/state-selector'
import './styles.scss'

export const Header = () => {
  const { push } = useRouter()
  const dispatch = useAppDispatch()
  const user = useAppSelector((state) => state.auth.user)

  const [isOpen, setIsOpen] = useState(false)
  const [_, setTransition] = useTransition()

  const pathname = usePathname()
  const searchParams = useSearchParams()
  const userId = searchParams.get('userId')

  const toggleDrawer = () => {
    setIsOpen((prev) => !prev)
  }
  const handleChooseItem = (page: ActionLink) => {
    if (user.id && page.name.includes('Login')) {
      push('/profile?userId=' + user.id)
    } else {
      setTransition(() => {
        push(page.path)
      })
    }
    setIsOpen(false)
  }
  useEffect(() => {
    if (userId) {
      dispatch(login({ user: { id: userId as string }, token: '' }))
    }
  }, [userId])

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
            <Locations />
            <IconButton
              size="large"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={toggleDrawer}
            >
              {!isOpen ? (
                <MenuIcon />
              ) : (
                <MenuOpenIcon
                  sx={{
                    color: 'var(--global-color-secondary)',
                  }}
                />
              )}
            </IconButton>
          </Box>

          <Box display="flex" gap={10}>
            <Box
              sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, gap: 4 }}
            >
              {actionLinks.map((page) => {
                const isSelected = page.path === pathname || (pathname.includes("profile") && page.name.includes('Login') && user.id)
                return (
                  <UnderlineAnimation
                    isSelected={isSelected}
                    onClick={() => handleChooseItem(page)}
                    id="action-link"
                    text={page.name}
                    key={page.name}
                    origin="center"
                  />
                )
              })}
              <Locations />
            </Box>
          </Box>

        </Toolbar>
      </Container>
      <TemporaryDrawer isOpen={isOpen} onClose={handleChooseItem} />
    </AppBar>
  )
}
