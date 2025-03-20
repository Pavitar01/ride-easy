import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import actionLinks from '../appbar/action-links';
import { useRouter } from 'next/navigation';


interface DrawerProps {
    isOpen: boolean;
    onClose: () => void
}
export default function TemporaryDrawer({ isOpen, onClose }: DrawerProps) {
    const { push } = useRouter()
    const DrawerList = (
        <Box sx={{ width: 250,height:"100%", bgcolor: "var(--global-color-text)", color: "var(--global-color-primary)" }} role="presentation" onClick={onClose}>
            <List>
                {actionLinks.map((action, index) => (
                    <ListItem key={index} disablePadding>
                        <ListItemButton color='inherit'>
                            <ListItemIcon color='inherit'>
                                {index % 2 === 0 ? <InboxIcon color='inherit'/> : <MailIcon color='inherit'/>}
                            </ListItemIcon>
                            <ListItemText primary={action.name} onClick={() => push(action.path)} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <Drawer open={isOpen} onClose={onClose} anchor='right'>
            {DrawerList}
        </Drawer>
    );
}