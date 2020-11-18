import React from 'react'
import emailLogo from '../images/mail.png'
import githubLogo from '../images/github.png'

const Sidebar = ({ setPage }) => {

    return (
        <div>
            <a onClick={() => setPage('projects')}>Projects</a>
            <a onClick={() => setPage('about')} >About</a>
            <a href='https://github.com/Mick666' ><img src={emailLogo} className='nav-sidebar-image'/></a>
            <a href='mailto:MichaelM94@outlook.com.au' ><img src={githubLogo} className='nav-sidebar-image'/></a>
        </div>
    )
}

export default Sidebar
