import React from 'react'

const Sidebar = ({ setPage }) => {

    return (
        <div>
            <a onClick={() => setPage('projects')}>Projects</a>
            <a onClick={() => setPage('about')}>About</a>
            <a href='https://github.com/Mick666'><img src='/images/github.png'/></a>
            <a href='mailto:MichaelM94@outlook.com.au'><img src='/images/mail.png'/></a>
        </div>
    )
}

export default Sidebar