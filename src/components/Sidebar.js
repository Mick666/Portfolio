import React from 'react'
import emailLogo from '../images/mail.png'
import githubLogo from '../images/github.png'
import { List, ListItem, ListItemIcon, ListItemText, Divider } from '@material-ui/core'

const Sidebar = ({ setPage }) => {

    return (
        <List>
            <ListItem>
                <ListItemText primary={<a onClick={() => setPage('projects')}>Projects</a>} />
            </ListItem>
            <Divider />
            <ListItem>
                <ListItemText primary={<a onClick={() => setPage('about')} >About</a>} />
            </ListItem>
            <Divider />
            <ListItem>
                <ListItemIcon><a href='https://github.com/Mick666' ><img src={emailLogo} className='nav-sidebar-image'/></a></ListItemIcon>
            </ListItem>
            <Divider />
            <ListItem>
                <ListItemIcon><a href='mailto:MichaelM94@outlook.com.au' ><img src={githubLogo} className='nav-sidebar-image'/></a></ListItemIcon>
            </ListItem>
        </List>
    )
}

export default Sidebar
