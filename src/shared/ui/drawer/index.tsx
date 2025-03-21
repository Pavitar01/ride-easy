'use client'

import { usePathname } from 'next/navigation'
import { Box, Typography, useMediaQuery } from '@mui/material'
import actionLinks, { ActionLink } from '../appbar/action-links'
import './styles.scss'

interface DrawerProps {
  isOpen: boolean
  onClose: (path: ActionLink) => void
}
const Drawer = ({ isOpen, onClose }: DrawerProps) => {
  const pathname = usePathname()
  const isMobile = useMediaQuery('(max-width: 893px)')
  return isMobile && isOpen ? (
    <Box className="temp-drawer">
      {actionLinks.map((action) => {
        const isSelected = action.path === pathname
        return (
          <Box
            key={action.path}
            className={`temp-drawer__item ${isSelected ? 'active' : ''}`}
            onClick={() => onClose(action)}
          >
            <Typography component="p" id="action-link">
              {action.name}
            </Typography>
          </Box>
        )
      })}
    </Box>
  ) : null
}

export default Drawer
