import React from 'react'
import emailLogo from '../images/mail.png'
import githubLogo from '../images/github.png'
import { List, ListItem, ListItemIcon, ListItemText, Divider } from '@material-ui/core'
import { Link } from 'react-router-dom'

const Sidebar = () => {

    return (
        <List>
            <ListItem>
                <ListItemText primary={<Link to="/">Projects</Link>} />
            </ListItem>
            <Divider />
            <ListItem>
                <ListItemText primary={<Link to="/about">About</Link>} />
            </ListItem>
            <Divider />
            <ListItem>
                <ListItemIcon>
                    <a href='mailto:MichaelM94@outlook.com.au' ><img src={emailLogo} className='nav-sidebar-image'/></a>
                </ListItemIcon>
            </ListItem>
            <Divider />
            <ListItem>
                <ListItemIcon>
                    <a href='https://github.com/Mick666' ><img src={githubLogo} className='nav-sidebar-image'/></a>
                </ListItemIcon>
            </ListItem>
        </List>
    )
}

export default Sidebar
