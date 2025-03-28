import { ReactNode } from 'react'
import Link from 'next/link'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Toolbar from '@mui/material/Toolbar'

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="fixed"
          sx={{ bgcolor: 'var(--global-color-white)' }}
          elevation={0}
        >
          <Toolbar>
            <Link href={'/'}>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2, color: 'var(--global-color-secondary)' }}
              >
                <ArrowBackIcon color="inherit" />
              </IconButton>
            </Link>
          </Toolbar>
        </AppBar>
      </Box>
      {children}
    </>
  )
}

export default layout
